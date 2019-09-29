import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const REQUEST_LIST_PAGE = 'landing-page'
export const REQUEST_DETAILS_PAGE = 'request-details-page'

export default new Router({
  routes: [
    {
      path: '/',
      name: REQUEST_LIST_PAGE,
      component: require('@/components/LandingPage').default
    },
    {
      path: '/requests/:id',
      name: REQUEST_DETAILS_PAGE,
      component: require('@/components/RequestDetailsPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
