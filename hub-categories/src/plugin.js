
// Pages
import CategoryIndex from './categories/pages/CategoryIndex'
import CategoryDetails from './categories/pages/edit/CategoryDetails'
import CategoryMedia from './categories/pages/edit/CategoryMedia'
import CategoryAvailability from './categories/pages/edit/CategoryAvailability'
import CategoryAssociations from './categories/components/CategoryAssociations'
import CategoryAssociationsPage from './categories/pages/edit/CategoryAssociations'
import CategoryRoutes from './categories/pages/edit/CategoryRoutes'
import CategoryDisplay from './categories/pages/edit/CategoryDisplay'
import { state, mutations, actions } from './categories/store/categories.js';

export default ({ app }, inject) => {
  const options = <%= JSON.stringify(options, null, 2) %>

  const routes = [
    {
      path: '/catalogue-manager/categories',
      name: 'categories',
      component: CategoryIndex,
      meta: {
        permissions: ['manage-categories', 'manage-catalogue']
      }
    },
    {
        path: '/catalogue-manager/categories/:id',
        name: 'categories.edit.details',
        component: CategoryDetails,
        meta: {
          permissions: ['manage-categories', 'manage-catalogue']
        }
    },
    {
      path: '/catalogue-manager/categories/:id/media',
      name: 'categories.edit.media',
      component: CategoryMedia,
      meta: {
        permissions: ['manage-categories', 'manage-catalogue']
      }
    },
    {
        path: '/catalogue-manager/categories/:id/availability',
        name: 'categories.edit.availability',
        component: CategoryAvailability,
        meta: {
          permissions: ['manage-categories', 'manage-catalogue']
        }
    },
    {
        path: '/catalogue-manager/categories/:id/associations',
        name: 'categories.edit.associations',
        component: CategoryAssociationsPage,
        meta: {
          permissions: ['manage-categories', 'manage-catalogue']
        }
    },
    {
        path: '/catalogue-manager/categories/:id/display',
        name: 'categories.edit.display',
        component: CategoryDisplay,
        meta: {
          permissions: ['manage-categories', 'manage-catalogue']
        }
    },
    {
        path: '/catalogue-manager/categories/:id/routes',
        name: 'categories.edit.routes',
        component: CategoryRoutes,
        meta: {
          permissions: ['manage-categories', 'manage-catalogue']
        }
    }
  ]

  routes.forEach((route) => {
    app.router.addRoute(route)
  })

  // Add our store module
  app.store.registerModule('categories', {
    namespaced: true,
    state,
    mutations,
    actions
  })

  app.store.dispatch('addNavItems', {
    section: 'catalogue-manager',
    items: [
      {
        label: 'Categories',
        position: 10,
        access: ['manage-categories', 'manage-catalogue'],
        route: {
          name: 'categories'
        }
      }
    ]
  })

  app.store.commit('categories/setConfig', options)



  app.$hooks.hook('products.associations.tabs', (items) => {
    items.push({
        title: 'Categories',
        component: CategoryAssociations
    })
  })

  app.$hooks.hook('blogs.associations.tabs', (items) => {
    items.push({
      title: 'Categories',
      component: CategoryAssociations
    })
  })

  // app.$hooks.hook('tree-test', async (items) => {
  //   items.push('four');
  // })

}
