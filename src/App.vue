<template>
  <div id="app" >
    <div v-show="!flag">
      <!--<Index></Index>-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive> 
      <foot></foot>
    </div>
    <div class="advertising" ref="advertising" v-show="flag">
      <img :src="qiimg" />
      <span class="skip" @click="skip">跳过 <span class="miao" ref="miao">{{num}}</span></span>
    </div>
  </div>
</template>

<script>
import foot from 'base/foot'
const flag = 1
let m = 3
let ftext = sessionStorage.getItem('flag')
export default {
  name: 'app',
  data () {
    return {
      qiimg: '',
      flag: false,
      num: 3
    }
  },
  created () {
    this.$http.get('http://peicentapi.demo.sclonsee.com/v1/index/ads', {position_id: '', region_id: 5101070000, type: 0, size: 1}).then(response => {
      this.qiimg = response.data.data[0].thumb[0]
    }, response => {
      alert(response)
    })
    this.getimg()
  },
  methods: {
    getimg () {
      if (ftext !== 1) {
        this.flag = true
        this.miao()
        let dao = setInterval(() => {
          if (m === 0) {
            window.clearInterval(dao)
            this.$refs.advertising.style.display = 'none'
            sessionStorage.setItem('flag', flag)

            this.flag = false
          }
          this.miao()
        }, 1000)
      }
      let storage = window.localStorage
      storage.setItem('uid', '9')
    },
    miao () {
      m--
      this.num = m
    },
    skip () {
      this.$refs.advertising.style.display = 'none'
      sessionStorage.setItem('flag', flag)
      this.flag = false
    }
  },
  components: {
    foot
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';


img{
  width: 100%;
  height:auto;
}
/*遮盖广告*/
.advertising{
  position: fixed;width:100%;height:100%;
  top:0;left:0;z-index:10000; background-color: #ccc;
  /*display: none;*/
}
.advertising img{
  width:100%;height:100%;
}
.advertising .skip{
  position: absolute;top:1rem;right:1rem;
  background:rgba(0,0,0,.3);border-radius:5px;font-size:.6rem;
  color:#fff;padding:.1rem .3rem;
}
</style>
