const defaultIncludes = Array([
  'assets.tags',
  'assets.transforms',
  'associations.association.assets.transforms',
  'associations.group',
  'attributes.group.attributes',
  'categories.assets.transforms',
  'categories.routes',
  'products.assets.transforms',
  'products.routes',
  'draft',
  'publishedParent',
  'family.attributes.group',
  'layout',
  'routes.language',
  'routes.publishedParent',
  'routes.draft',
  'versions.user',
  'versions.relations'
]).join(',')

export const state = () => ({
  model: null,
  liveId: null,
  isDraft: false,
  createDraft: false,
  creatingDraft: false,
  publishingDraft: false,
  attributes: null,
  state: 'idle',
  pendingAssets: [],
  assets: [],
  config: {},
  errors: {}
})
export const mutations = {
  setCreatingDraft (state, val) {
    state.creatingDraft = val
  },
  setPublishingDraft (state, val) {
    state.publishingDraft = val
  },
  setModel (state, model) {
    state.model = model
  },
  setErrors  (state, errors) {
    state.errors = errors
  },
  setOnModel (state, conf) {
    state.model[conf.field] = conf.value
  },
  setConfig (state, conf) {
    state.config = conf
  },
  setAttributes (state, attributes) {
    state.attributes = attributes
  },
  setIsDraft (state, val) {
    state.isDraft = val
  },
  setModelId (state, val) {
    state.model.id = val
  },
  setLiveId (state, val) {
    state.liveId = val
  },
  setCreateDraft (state, val) {
    state.createDraft = val
  },
  addAttribute (state, options) {
    state.model.attribute_data[options.handle] = options.value
  },
  setState (state, value) {
    state.state = value
  },
  setPendingAssets (state, assets) {
    state.pendingAssets = assets
  },
  setAssets (state, assets) {
    state.assets = assets
  },
  addPendingAsset (state, asset) {
    const pending = state.pendingAssets
    pending.push(asset)
    state.pendingAssets = pending
  }
}

export const actions = {
  resetState ({ commit }) {
    commit('setModel', null)
    commit('setIsDraft', false)
    commit('setCreateDraft', false)
  },
  setAttribute ({ commit }, { field, value }) {
    commit('setOnModel', {
      field,
      value
    })
  },
  /**
   * Create a draft for a given blog
   *
   * @param   {Function}  commit
   * @param   {String}  id
   * @param   {Object}  $nuxt
   *
   * @return  {Object}
   */
  async createDraft ({ commit }, { id, $nuxt }) {
    commit('setCreatingDraft', true)
    const response = await $nuxt.$getcandy.on('blogs', 'postBlogsIdDrafts', id, {
      query: {
        include: defaultIncludes,
        full_response: true
      }
    })
    commit('setIsDraft', true)
    commit('setModel', response.data.data)
    commit('setLiveId', id)
    commit('setCreatingDraft', false)
    return response
  },
  /**
   * Fetch the blog from the API
   *
   * @param   {Object}  commit
   * @param   {Function}  dispatch
   * @param   {Object}  $nuxt
   * @param   {String}  id
   *
   * @return  {Object}
   */
  async fetch ({ commit, dispatch }, { $nuxt, id }) {
    const response = await $nuxt.$getcandy.on('blogs', 'getBlogsBlogId',
      id,
      defaultIncludes,
      true,
      true,
      true,
      1
    )

    const blog = response.data.data
    const isDraft = !!blog.drafted_at
    const draftModel = blog.draft.data

    if (draftModel) {
      await this.$router.replace({
        name: 'blogs.view',
        params: {
          id: draftModel.id
        }
      })
      await dispatch('fetch', {
        $nuxt,
        id: draftModel.id
      })
      return
    }

    commit('setModel', blog)

    if (!isDraft) {
      commit('setLiveId', blog.id)
    } else {
      commit('setLiveId', blog.published_parent.data.id)
    }

    commit('setIsDraft', isDraft)

    return blog
  },
  save ({ commit, state }, payload) {
    const { context, data } = payload
    commit('setState', 'saving')
    commit('setErrors', {})
    context.on('blogs', 'putBlogsBlogId', state.model.id, data).then(() => {
      commit('setState', 'saved')
    }).catch((error) => {
      commit('setErrors', error.body)
    })
  },

  async publish ({ commit }, { id, $nuxt }) {
    commit('setPublishingDraft', true)
    const response = await $nuxt.$getcandy.on('blogs', 'postBlogsIdPublish', id, {
      query: {
        include: defaultIncludes,
        full_response: true
      }
    })

    const { params, name } = $nuxt.$route
    const publishedId = response.data.data.id

    // Only try and redirect if the ID for the current route
    // is different, otherwise we get an error.
    if (params.id !== publishedId || name !== 'blogs.view') {
      await $nuxt.$router.push({
        name: 'blogs.view',
        params: {
          id: publishedId
        }
      })
    }

    commit('setModel', response.data.data)
    commit('setLiveId', publishedId)
    commit('setIsDraft', false)
    commit('setPublishingDraft', false)
    return response
  },
  /**
   * Discard a blog
   *
   * @param   {Function}  dispatch
   * @param   {String}  id
   * @param   {Object}  $nuxt
   * @param   {String}  liveId
   *
   * @return  void
   */
  async discard ({ dispatch }, { id, $nuxt, liveId }) {
    await $nuxt.$gc.blogs.destroy(id)
    await $nuxt.$router.push({
      name: 'blogs.view',
      params: {
        id: liveId
      }
    })
  },
}
