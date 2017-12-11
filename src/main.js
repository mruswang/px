// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { AjaxPlugin, Datetime, Group, WechatPlugin } from 'vux'
Vue.component(Datetime.name, Datetime)
Vue.component(Group.name, Group)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)

Vue.config.productionTip = false

const FastClick = require('fastclick')
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
