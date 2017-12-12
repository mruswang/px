<template>
  <div>
    <swiper loop auto :list="imgurl" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
  </div>
</template>

<script type="text/ecmascript-6">
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'

export default {
  data () {
    return {
      imgurl: [],
      demo06_index: 0,
      imglist: []
    }
  },
  created () {
    this.$http.get('http://peicentapi.demo.sclonsee.com/v1/index/ads', {position_id: 3, region_id: 510107000, type: '', size: ''}).then(response => {
      this.imglist = response.data.data
    }, response => {
      alert(response)
    })
  },
  mounted () {
    setTimeout(() => {
      this.getimg()
    }, 500)
  },
  methods: {
    demo06_onIndexChange (index) {
      this.demo06_index = index
    },
    getimg () {
      this.imgurl = this.imglist.map((item, index) => ({
        img: item.thumb[0]
      }))
    }
  },
  components: {
    Swiper,
    SwiperItem,
    GroupTitle,
    XButton,
    Divider
  }
}
</script>

<style scoped>
.copyright {
  font-size: 12px;
  color: #ccc;
  text-align: center;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}
.text-scroll p{
  font-size: 12px;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title{
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
.vux-indicator.custom-bottom {
  bottom: 30px;
}
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.fadeInUp {
  animation-name: fadeInUp;
}
.swiper-demo-img img {
  width: 100%;
}
</style>
