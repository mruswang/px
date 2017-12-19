<template>
  <div class="container">
    <sticky scroll-box="vux_view_box_body"  :check-sticky-support="true" :offset="46">
      <tab :line-width=3 >
        <tab-item :selected="demo4 === item"  v-for="(item, index) in list4" @click="demo4 = item" :key="index">{{item}}</tab-item>
      </tab>
    </sticky>
    <Scroll id="vux_view_box_body" ref="scroll" class="scroll"
        :data="list"
        :pulldown="pulldown"
        :pullup="pullup"
        @pulldown="pulldowndata"
        @scrollToEnd="pullupdata"
        :refreshDelay="refreshDelay">
      <div class="scroll-content">
        <helps></helps>
        <div class="alldata" v-show="nodata">我是有底线的</div>
      </div>
    </Scroll>
    <add :url="url"></add>
  </div>
</template>

<script>
import { Tab, TabItem, Sticky, Divider, XButton } from 'vux'
import scroller from 'base/scroller'
import helps from 'base/help'
import add from 'base/add'
export default{
  components: {
    scroller,
    helps,
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton,
    add
  },
  data () {
    return {
      index01: 0,
      list4: ['正在放映', '即将上映'],
      demo4: '即将上映',
      demoDisabled: 'A',
      index: 0,
      url: 'push_help',
      page: 1,
      all: 15,
      list: [],
      pulldown: true,
      pullup: true,
      nodata: false,
      refreshDelay: 500
    }
  },
  created () {
    setTimeout(() => {
      this.loadData()
    }, 30)
  },
  methods: {
    loadData () {
      this.$http.get('http://peicentapi.demo.sclonsee.com/v1/news/index', {params: {target_id: this.$route.params.id, type: this.$route.params.type, page: this.page, flag: 3}}).then(response => {
        this.list = this.list.concat(response.data.data)
        if (response.data.data.length > 0) {
          this.all = this.list.length
        } else {
          this.nodata = true
        }
      }, response => {
        alert(response)
      })
    },
    pullupdata () {
      this.page ++
      this.loadData()
    },
    pulldowndata () {
      this.page = 1
      this.list = []
      this.loadData()
    }
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.container{
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
}
.scroll{
  height: 100%;
  overflow: hidden;
}
.scroll-content{
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 60px;
}
.alldata{
  text-align: center;
  background-color: #dedede;
}     
.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}
</style>
