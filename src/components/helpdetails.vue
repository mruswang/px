<template>
  <div class="recommend">
    <BScroll ref="scroll" class="wrapper recommend-content" 
    :data="data"
    :pulldown="pulldown"
    @pulldown="loadData">
      <ul class="content slider-wrapper">
        <li v-for="item in data">{{item.content}}</li>
      </ul>
      <div class="loading-wrapper"></div>
    </BScroll>
  </div>
</template>

<script>
import BScroll from 'base/scroller'
export default {
  data () {
    return {
      data: [],
      pulldown: true
    }
  },
  components: {
    BScroll
  },
  created () {
    setTimeout(() => {
      this.loadData()
    }, 30)
  },
  methods: {
    loadData () {
      this.$http.get('http://peicentapi.demo.sclonsee.com/v1/news/index', {params: { target_id: 9, type: 1, page: 1, flag: 3 }}).then(response => {
        console.log(response.data.data)
        this.data = this.data.concat(this.data)
      }, response => {
        alert(response)
      })
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
}
        
</style>
