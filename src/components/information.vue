<template>
  <div class="container">
    <ul class="topnav">
      <li v-for="(item,index) in listtop" @click="slect(item)" :class="{'active':item.news_cat_id === cat_id}">{{item.name}}</li>
    </ul>
    <scroller ref="scroll" class="scroll"
        :data="list"
        :pulldown="pulldown"
        :pullup="pullup"
        @pulldown="pulldowndata"
        @scrollToEnd="pullupdata"
        :refreshDelay="refreshDelay">
      <div class="scroll-content">
        <zixun :data="list"></zixun>
        <div class="alldata" v-show="nodata">我是有底线的</div>
      </div>
    </scroller>
  </div>
</template>

<script>
import { Tab, TabItem, Sticky, Divider, XButton } from 'vux'
import scroller from 'base/scroller'
import zixun from 'base/zixun'
export default{
  components: {
    scroller,
    zixun,
    Tab,
    TabItem,
    Sticky,
    Divider,
    XButton
  },
  data () {
    return {
      listtop: [],
      index: 0,
      url: 'push_help',
      page: 1,
      all: 15,
      list: [],
      pulldown: true,
      pullup: true,
      nodata: false,
      refreshDelay: 500,
      cat_id: 0,
      geturl: 'http://peicentapi.demo.sclonsee.com/v1/news/index'
    }
  },
  created () {
    this._loadinterest()
    // setTimeout(() => {
    //   this._loadData()
    // }, 30)
  },
  methods: {
    _loadinterest () {
      this.$http.get('http://peicentapi.demo.sclonsee.com/v1/member/member-interest', {params: { member_id: 9 }}).then(response => {
        this.listtop = response.data.data
        this.cat_id = this.listtop[0].news_cat_id
        this._loadData()
      }, response => {
        alert(response)
      })
    },
    _loadData () {
      this.$http.get(this.geturl, {params: { cat_id: this.cat_id, page: this.page, flag: 3, province_id: 51, city_id: 510100000000, region_id: 510104000000, street_id: 510104020000, community_id: 659004502528 }}).then(response => {
        this.list = this.list.concat(response.data.data)
        if (response.data.data.length > 0) {
          this.all = this.list.length
        } else {
          this.nodata = true
        }
        console.log(this.list)
      }, response => {
        alert(response)
      })
    },
    pullupdata () {
      if (!this.nodata) {
        this.page ++
        this._loadData()
      } else {
        this.nodata = true
      }
    },
    pulldowndata () {
      this.page = 1
      this.list = []
      this._loadData()
    },
    slect (item) {
      this.page = 1
      this.list = []
      this.cat_id = item.news_cat_id
      this._loadData()
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
  padding-bottom: 100px;
}
.alldata{
  text-align: center;
  background-color: #dedede;
}     
.topnav{
  // padding:0 10px;
  width: 100%;
  overflow-x:auto;
  white-space:nowrap;
  margin-top: 10px;
}
.topnav li{
  padding: 0 5px;
  border-radius: 50%;
  margin: 5px;
  display: inline-block;
 }
 .active{
    color: rgb(240,88,18);
    border-bottom: 2px solid rgb(240,88,18);
 }
</style>
