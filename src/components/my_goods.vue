<template>
  <div class="recommend">
    <Scroll ref="scroll" class="wrapper recommend-content"
    :data="list"
    :pulldown="pulldown"
    :pullup="pullup"
    @pulldown="pulldowndata"
    @scrollToEnd="pullupdata"
    :refreshDelay="refreshDelay">
      <div class="box2 slider-wrapper">
        <goods :fromindex="fromindex" :data="list" :page="page" :num="all"></goods>
        <div class="alldata" v-show="nodata">我是有底线的</div>
      </div>
    </Scroll>
    <add :url="url" ></add>
  </div>
</template>

<script>
import Scroll from 'base/scroller'
import goods from 'base/goods'
import add from 'base/add'
export default {
  components: {
    Scroll,
    goods,
    add
  },
  data () {
    return {
      url: 'push_imformation',
      fromindex: 'mine',
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
      let typee = 0
      if (this.$route.params.type === '1') {
        typee = 0
      } else {
        typee = 1
      }
      this.$http.get('http://peicentapi.demo.sclonsee.com/v1/goods/index', {params: {target_id: this.$route.params.id, type: typee, page: this.page, flag: 3}}).then(response => {
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
        this.loadData()
      } else {
        this.nodata = true
      }
    },
    pulldowndata () {
      this.page = 1
      this.list = []
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
