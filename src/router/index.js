import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Mine from '@/components/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
