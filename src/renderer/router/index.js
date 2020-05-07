import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const REQUEST_LIST_PAGE = 'Home'
export const REQUEST_DETAILS_PAGE = 'Request Details'

const router = new Router({
  routes: [
    {
      path: '/',
      name: REQUEST_LIST_PAGE,
      components: {
        default: require('@/components/LandingPage').default,
        header: require('@/components/HeaderSearch').default
      }
    },
    {
      path: '/requests/:id',
      name: REQUEST_DETAILS_PAGE,
      components: {
        default: require('@/components/RequestDetailsPage').default,
        header: require('@/components/HeaderSearch').default
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
