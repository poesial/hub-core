'use strict';

import CandyResource from '../CandyResource'

import BlogFamilies from './BlogFamilies'
// import BlogVariants from './BlogVariants'
export default class Blogs extends CandyResource {
    constructor (candy) {
        super (candy)
        this.families = new BlogFamilies(candy)
        // this.variants = new BlogVariants(candy)
    }
    get (params) {
        return this.$get('blogs', params)
    }
    find (id, params) {
        return this.$get(`blogs/${id}`, params)
    }
    update(id, params) {
        return this.$put(`blogs/${id}`, params)
    }
    create (data, params) {
        return this.$post(`blogs`, data, params)
    }
    createDraft (id, data, params) {
        return this.$post(`blogs/${id}/drafts`, data, params)
    }
    publish (id, data, params) {
        return this.$post(`blogs/${id}/publish`, data, params)
    }
    destroy (id) {
        return this.$delete(`blogs/${id}`);
    }
    updateChannels (id, data, params) {
        return this.$post(`blogs/${id}/channels`, data, params)
    }
    updateCustomerGroups (id, data, params) {
        return this.$post(`blogs/${id}/customer-groups`, data, params)
    }
    updateBlogAssociations (id, associations, params) {
        return this.$post(`blogs/${id}/associations`, {
            relations: associations
        }, params)
    }
    associateCategories(id, categories, params) {
        return this.$post(`blogs/${id}/categories`, {
            categories
        }, params)
    }
    addRoute(id, data, params) {
        return this.$post(`/blogs/${id}/urls`, data, params)
    }
    attachAsset(id, assetId, position) {
        return this.$put(`/blogs/${id}/assets`, {
            asset_id: assetId,
            position: position || null
        })
    }
}
