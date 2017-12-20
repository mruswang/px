<template>
  <div class="container">
    <scroller ref="scroll" class="scroll"
        :data="list"
        :pulldown="pulldown"
        :pullup="pullup"
        @pulldown="pulldowndata"
        @scrollToEnd="pullupdata"
        :refreshDelay="refreshDelay">
      <div class="scroll-content">
        <helps :data="list"></helps>
        <div class="alldata" v-show="nodata">我是有底线的</div>
      </div>
    </scroller>
  </div>
</template>

<script>
import scroller from 'base/scroller'
import helps from 'base/help'
export default{
  components: {
    scroller,
    helps
  },
  data () {
    return {
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
      this._loadData()
    }, 30)
  },
  methods: {
    _loadData () {
      this.$http.get('http://peicentapi.demo.sclonsee.com/v1/help/index', {params: { flag: 1, page: this.page, province_id: 51, city_id: 510100000000, region_id: 510104000000, street_id: 510104020000, community_id: 659004502528 }}).then(response => {
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
  padding-bottom: 50px;
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
