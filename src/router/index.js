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
    },
    {
      path: '/my_information/:type/:id',
      name: 'Myinformation',
      component: Myinformation
    },
    {
      path: '/my_help',
      name: 'Myhelp',
      component: Myhelp
    },
    {
      path: '/my_order',
      name: 'Myorder',
      component: Myorder
    },
    {
      path: '/my_mechanism',
      name: 'Mymechanism',
      component: Mymechanism
    },
    {
      path: '/my_store_list',
      name: 'Mystorelist',
      component: Mystorelist
    },
    {
      path: '/my_activity',
      name: 'Myactivity',
      component: Myactivity
    },
    {
      path: '/my_goods',
      name: 'Mygoods',
      component: Mygoods
    },
    {
      path: '/my_tougao',
      name: 'Mytougao',
      component: Mytougao
    },
    {
      path: '/my_extension',
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
      path: '/zixundetails/:id/:mid',
      name: 'ZixunDetails',
      component: ZixunDetails
    },
    {
      path: '/helpdetails/:id/:mid',
      name: 'HelpDetails',
      component: HelpDetails
    }
  ]
})
