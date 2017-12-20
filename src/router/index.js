import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Mine from '@/components/mine'
import Myinformation from '@/components/my_information'
import Myhelp from '@/components/my_help'
import Myorder from '@/components/my_order'
import Mymechanism from '@/components/my_mechanism'
import Mystorelist from '@/components/my_store_list'
import Myactivity from '@/components/my_activity'
import Mygoods from '@/components/my_goods'
import Mytougao from '@/components/my_tougao'
import Myextension from '@/components/my_extension'
import Pushimformation from '@/components/push_imformation'
import Pushhelp from '@/components/push_help'
import ZixunDetails from '@/components/zixundetails'
import HelpDetails from '@/components/helpdetails'
import Seat from '@/components/seat'
import Guide from '@/components/guide'
import Organization from '@/components/organization'
import Piazza from '@/components/piazza'
import Activity from '@/components/activity'
import Shops from '@/components/shops'
import Information from '@/components/information'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/seat',
      name: 'Seat',
      component: Seat
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/organization',
      name: 'Organization',
      component: Organization
    },
    {
      path: '/piazza',
      name: 'Piazza',
      component: Piazza
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/shops',
      name: 'Shops',
      component: Shops
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/my_information/:type/:id',
      name: 'Myinformation',
      component: Myinformation
    },
    {
      path: '/my_help/:type/:id',
      name: 'Myhelp',
      component: Myhelp
    },
    {
      path: '/my_order/:type/:id',
      name: 'Myorder',
      component: Myorder
    },
    {
      path: '/my_mechanism/:type/:id',
      name: 'Mymechanism',
      component: Mymechanism
    },
    {
      path: '/my_store_list/:type/:id',
      name: 'Mystorelist',
      component: Mystorelist
    },
    {
      path: '/my_activity/:type/:id',
      name: 'Myactivity',
      component: Myactivity
    },
    {
      path: '/my_goods/:type/:id',
      name: 'Mygoods',
      component: Mygoods
    },
    {
      path: '/my_tougao/:type/:id',
      name: 'Mytougao',
      component: Mytougao
    },
    {
      path: '/my_extension/:type/:id',
      name: 'Myextension',
      component: Myextension
    },
    {
      path: '/push_imformation',
      name: 'Pushimformation',
      component: Pushimformation
    },
    {
      path: '/push_help',
      name: 'Pushhelp',
      component: Pushhelp
    },
    {
      path: '/zixundetails/:time/:id/:mid',
      name: 'ZixunDetails',
      component: ZixunDetails
    },
    {
      path: '/helpdetails/:time/:id/:mid',
      name: 'HelpDetails',
      component: HelpDetails
    }
  ]
})
