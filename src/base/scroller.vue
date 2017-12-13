<template>
  <div>
    <scroller lock-x  @on-scroll-bottom="onScrollBottom" :use-pulldown="true" :use-pullup="true" :pulldown-config="pulldownconfig" :pullup-config="pullupconfig" ref="scrollerBottom" :scroll-bottom-offst="200">
      <div class="box2">
        <slot></slot>
      </div>
    </scroller>
  </div>
</template>



<script type="text/ecmascript-6">
  import { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore } from 'vux'

  export default {
    components: {
      Scroller,
      Divider,
      Spinner,
      XButton,
      Group,
      Cell,
      LoadMore
    },
    data () {
      return {
        showList1: true,
        scrollTop: 0,
        onFetching: false,
        bottomCount: 20,
        pulldownconfig: {
          content: '下拉刷新',
          height: 60,
          autoRefresh: false,
          downContent: '下拉刷新',
          upContent: '下拉刷新',
          loadingContent: 'Loading...',
          clsPrefix: 'xs-plugin-pulldown-'
        },
        pullupconfig: {
          content: '上拉加载更多',
          height: 60,
          autoRefresh: false,
          downContent: '上拉加载更多',
          upContent: '上拉加载更多',
          loadingContent: 'Loading...',
          clsPrefix: 'xs-plugin-pulldown-'
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.scrollerBottom.reset({top: 0})
      })
    },
    methods: {
      onScrollBottom () {
        if (this.onFetching) {
          // do nothing
        } else {
          this.onFetching = true
          setTimeout(() => {
            this.bottomCount += 10
            this.$nextTick(() => {
              this.$refs.scrollerBottom.reset()
            })
            this.onFetching = false
          }, 2000)
        }
      }
    }
  }
</script>

<style scoped>

  .box2-wrap {
    height: 100%;
    overflow: hidden;
  }
</style>
