<template>
    <div>
      <sticky scroll-box="vux_view_box_body"  :check-sticky-support="true" :offset="46">
        <tab :line-width=3 >
          <tab-item :selected="demo4 === item"  v-for="(item, index) in list4" @click="demo4 = item" :key="index">{{item}}</tab-item>
        </tab>
      </sticky>
      <scroller id="vux_view_box_body">
        <helps></helps>
      </scroller>
      <add></add>
    </div>
</template>

<script>
  import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
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
      Swiper,
      SwiperItem,
      add
    },
    data () {
      return {
        index01: 0,
        list4: ['正在放映', '即将上映'],
        demo4: '即将上映',
        demoDisabled: 'A',
        index: 0
      }
    },
    methods: {
    }
  }
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/center.less';

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
