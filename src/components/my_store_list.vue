<template>
  <div class="recommend">
    <Scroll ref="scroll" class="wrapper recommend-content"
    :data="list"
    :pulldown="pulldown"
    @pulldown="pulldowndata"
    :refreshDelay="refreshDelay">
      <div class="box2 slider-wrapper">
        <store :fromindex="fromindex" :data="list"></store>
        <div class="alldata" v-show="nodata">我是有底线的</div>
      </div>
    </Scroll>
    <add :url="url" ></add>
  </div>
</template>

<script>
import Scroll from 'base/scroller'
import store from 'base/store'
import add from 'base/add'
export default {
  components: {
    Scroll,
    store,
    add
  },
  data () {
    return {
      url: 'push_imformation',
      fromindex: 'mine',
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
      this.$http.get('http://peicentapi.demo.sclonsee.com/v1/shop/my-shop', {params: {member_id: this.$route.params.id, flag: 3}}).then(response => {
        this.list = response.data.data
        console.log(this.list)
      }, response => {
        alert(response)
      })
    },
    pulldowndata () {
      this.loadData()
    }
  }
}
</script>

<style scoped>
.recommend{
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
}
.recommend-content{
  height: 100%;
  overflow: hidden;
}
.slider-wrapper{
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 60px;
}
.alldata{
  text-align: center;
  background-color: #dedede;
}     
</style>
