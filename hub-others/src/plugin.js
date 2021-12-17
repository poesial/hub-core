import OtherEdit from './others/pages/OtherEdit.vue'
import { state, mutations, actions } from './others/store/other.js';

export default ({ app }, inject) => {

  const routes = [
    {
      path: '/other-contents/:id',
      name: 'others.edit',
      component: OtherEdit,
      meta: {
        // permissions: ['manage-others']
      }
    },
  ]

  routes.forEach(route => {
    app.router.addRoute(route)
  });

  app.store.dispatch('addNavItems', {
    section: 'other-content',
    items: [
      {
        label: 'Privacy policy',
        position: 10,
        route: {
          name: 'others.edit',
          params: {
            id: 'privacy-policy'
          }
        }
      },
      {
        label: 'About us',
        position: 20,
        route: {
          name: 'others.edit',
          params: {
            id: 'about-us'
          }
        }
      },
      {
        label: 'Terms of use',
        position: 30,
        route: {
          name: 'others.edit',
          params: {
            id: 'terms-of-use'
          }
        }
      }
    ]
  })

  app.store.registerModule('other', {
    namespaced: true,
    state,
    mutations,
    actions
  })
}
