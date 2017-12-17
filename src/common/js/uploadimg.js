/**
 * Created by wang on 2017/12/17.
 */
export function jssdk () {
  let _url = 'http://peicentapi.demo.sclonsee.com/v1/index/wx-config'
  // 获取配置的config
  let _url_ = window.location.href
  this.$http.get(_url, {params: {url: _url_}}).then(response => {
    let config = response.data.data
    this.$wechat.config(config)
  }, response => {
    alert(response)
  })
}
