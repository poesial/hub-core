/* eslint-disable */

import Vue from 'vue'

import Sortable from 'sortablejs'
import BlogAssociations from './blogs/pages/edit/BlogAssociations.vue'
import BlogDetails from './blogs/pages/edit/BlogDetails.vue'
import BlogAvailability from './blogs/pages/edit/BlogAvailability.vue'
import BlogFamilyAttributes from './blogs/pages/families/BlogFamilyAttributes.vue'
import BlogFamilyEdit from './blogs/pages/families/BlogFamilyEdit.vue'
import BlogFamilyIndex from './blogs/pages/families/BlogFamilyIndex.vue'
import BlogFamilyBlogs from './blogs/pages/families/BlogFamilyBlogs.vue'
import BlogFamilyStore from './blogs/store/blog-family.js'
import BlogIndex from './blogs/pages/BlogIndex.vue'
import BlogMedia from './blogs/pages/edit/BlogMedia.vue'
import BlogUrls from './blogs/pages/edit/BlogUrls.vue'
import { state, mutations, actions } from './blogs/store/blog.js'

export default ({ app }, inject) => {
  // eslint-disable-next-line no-alert, quotes, semi
  const options = <%= JSON.stringify(options, null, 2) %>

  // Example if you wanted a global component
  app.i18n.mergeLocaleMessage('en', require('./blogs/locales/en.json'))
  app.i18n.mergeLocaleMessage('fr', require('./blogs/locales/fr.json'))

  // TODO: Move this into a more global thingy
  Vue.directive('sortable', {
    inserted (el, binding) {
      const sortable = new Sortable(el, binding.value || {})
    }
  })
  const routes = [
    {
      path: '/blog-content/posts',
      name: 'blogs',
      component: BlogIndex,
      meta: {
        permissions: ['manage-catalogue']
      }
    },
    {
      path: '/blog-content/blogs/:id',
      name: 'blogs.view',
      component: BlogDetails,
      meta: {
        permissions: ['manage-catalogue']
      }
    },
    {
      path: '/blog-content/blogs/:id/media',
      name: 'blogs.edit.media',
      component: BlogMedia,
      meta: {
        permissions: ['manage-catalogue']
      }
    },
    {
      path: '/blog-content/blogs/:id/availability-pricing',
      name: 'blogs.edit.availability',
      component: BlogAvailability,
      meta: {
        permissions: ['manage-catalogue']
      }
    },
    {
      path: '/blog-content/blogs/:id/associations',
      name: 'blogs.edit.associations',
      component: BlogAssociations,
      meta: {
        permissions: ['manage-catalogue']
      }
    },
    {
      path: '/blog-content/blogs/:id/urls',
      name: 'blogs.edit.urls',
      component: BlogUrls,
      meta: {
        permissions: ['manage-catalogue']
      }
    },
    {
      path: '/blog-content/blog-families/',
      name: 'blog-families',
      component: BlogFamilyIndex,
      meta: {
        permissions: ['manage-catalogue']
      }
    },
    {
      path: '/blog-content/blog-families/:id',
      name: 'blog-families.edit',
      component: BlogFamilyEdit,
      meta: {
        permissions: ['manage-catalogue']
      }
    },
    {
      path: '/blog-content/blog-families/:id/attributes',
      name: 'blog-families.edit.attributes',
      component: BlogFamilyAttributes,
      meta: {
        permissions: ['manage-catalogue']
      }
    },
    {
      path: '/blog-content/blog-families/:id/blogs',
      name: 'blog-families.edit.blogs',
      component: BlogFamilyBlogs,
      meta: {
        permissions: ['manage-catalogue']
      }
    }
  ]

  routes.forEach(route => {
    app.router.addRoute(route)
  });

  // Add our store module
  app.store.registerModule('blog', {
    namespaced: true,
    state,
    mutations,
    actions
  })

  app.store.registerModule('blogFamily', BlogFamilyStore)

  app.store.commit('blog/setConfig', options)

  app.store.dispatch('addNavItems', {
    section: 'blog-content',
    items: [
      {
        label: 'Blogs',
        position: 0,
        access: ['manage-catalogue'],
        route: {
          name: 'blogs'
        }
      },
      {
        label: 'Blog Families',
        position: 5,
        access: ['manage-catalogue'],
        route: {
          name: 'blog-families'
        }
      }
    ]
  })
}
