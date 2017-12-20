<template>
  <div class="container">
    <allhead class='head'></allhead>
    <ul class="topnav">
      <li v-for="(item,index) in listtop" @click="slect(item)" :class="{'active':item.id === cat_id}">{{item.name}}</li>
    </ul>
    <scroller ref="scroll" class="scroll"
        :data="list"
        :pulldown="pulldown"
        :pullup="pullup"
        @pulldown="pulldowndata"
        @scrollToEnd="pullupdata"
        :refreshDelay="refreshDelay">
      <div class="scroll-content">
        <goods :fromindex="fromindex" :data="list" :page="page"></goods>
        <div class="alldata" v-show="nodata">我是有底线的</div>
      </div>
    </scroller>
  </div>
</template>

<script>
import scroller from 'base/scroller'
import allhead from 'base/head'
import goods from 'base/goods'
export default {
  data () {
    return {
      listtop: [{
        id: '',
        name: '全部'
      }],
      cat_id: '',
      list: [],
      fromindex: 'dating',
      pulldown: true,
      pullup: true,
      nodata: false,
      refreshDelay: 500,
      page: 1
    }
  },
  created () {
    this._loadinterest()
  },
  methods: {
    _loadinterest () {
      this.$http.get('http://peicentapi.demo.sclonsee.com/v1/goods/catgary').then(response => {
        this.listtop = this.listtop.concat(response.data.data)
        console.log(this.listtop)
        this._loadData()
      }, response => {
        alert(response)
      })
    },
    _loadData () {
      this.$http.get('http://peicentapi.demo.sclonsee.com/v1/goods/index', {params: { flag: 1, cat_id: this.cat_id, page: this.page, province_id: 51, city_id: 510100000000, region_id: 510104000000, street_id: 510104020000, community_id: 659004502528 }}).then(response => {
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
      this.cat_id = item.id
      this._loadData()
    }
  },
  components: {
    allhead, goods, scroller
  }
}
</script>

<style>
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
  .head{
    background: url('../assets/img/pic_index_bk.png') no-repeat center center;
    background-size: 100% 100%;
  }
  .classify{
    display: flex;justify-content: space-between;
    flex-wrap: wrap;padding:1rem .75rem;
  }
  .classify span{
    display: block;width:30%;text-align: center;
    height:2.5rem;line-height: 2.5rem;background:#fff;
    border-radius:1.25rem;border:1px solid #FE6459;
    box-shadow:1px 2px 3px rgba(0,0,0,.2);
  }
  .classify span a{
    padding-left:.9rem;
    color:#666;font-size:.65rem;display: block;width:calc(100% - .9rem);height: 100%;
    background: url(../assets/img/icon_dingzuo.png) no-repeat .6rem center;
    background-size:1rem 1.1rem;
  }
  .classify span:nth-child(2) a{
    background-image:url(../assets/img/icon_shangpin.png);
    background-size:1.1rem 1.3rem;
    /*padding-left:1rem;width:calc(100% - 1rem);*/
  }
  .classify span:nth-child(3) a{
    background-image: url(../assets/img/icon_huodong.png);
    background-size:1.25rem 1.2rem;
  }
  .classify span:nth-child(4) a{
    background-image: url(../assets/img/icon_huzhuguangchang.png);
    background-size:1.1rem 1rem;
  }
  .classify span:nth-child(5) a{
    background-image: url(../assets/img/icon_jigou.png);
    background-size:1rem 1.15rem;
  }
  .classify span:nth-child(6) a{
    background-image: url(../assets/img/icon_banshizhinan.png);
    background-size:1rem 1.3rem;
  }
  .classify span.down{
    margin-top:.5rem;
  }
  #content .conH{
    width:100%;height:2.2rem;background:#fff;color:#333;font-size:.8rem;
    line-height:2.2rem;margin-bottom:.5rem;
  }
  #content .conH span{
    padding-left:1.3rem;background:url(../assets/img/icon_huo.png) no-repeat .5rem center;
    background-size:.6rem .8rem;
  }
  .huodong{
    display: flex;justify-content: space-between;overflow: hidden;
    padding:0 .5rem 1rem .5rem;
  }
  .huodong dl{
    height:5rem;width:38%;
    background: #fff;border-radius:4px;overflow: hidden;box-shadow:0px 2px 3px rgba(0,0,0,.1);
  }
  .huodong dt{
    height:3.75rem;width: 100%;
  }
  .huodong img{
    width:100%;height:3.75rem;
  }
  .huodong dd{
    width:calc(100% - 1rem);overflow: hidden;text-overflow:ellipsis; white-space:nowrap;
    font-size:.6rem;color:#333;line-height: 1.25rem;padding:0 .5rem;
  }
  .huodong .lookmore{
    background:#fff;height:5rem;width:20%;
    border-radius: 4px;box-shadow:0px 2px 3px rgba(0,0,0,.1);
  }
  .huodong .lookmore a{
    font-size:.6rem;color:#828282;display: block;width:100%;text-align: center;
    margin-top:1.2rem;padding-bottom: 1rem;
    background: url(../assets/img/icon_more.png) no-repeat center bottom;
    background-size:.8rem .8rem;
  }
  #content .conHt{
    width:calc(100% - .5rem);height:2.2rem;background:#fff;color:#333;font-size:.8rem;padding-right:.5rem;
    line-height:2.2rem;border-bottom: 1px solid #E0E0E0;display: flex;justify-content: space-between;
  }
  #content .conHt span{
    padding-left:1.3rem;background:url(../assets/img/icon_zhinan.png) no-repeat .5rem center;
    background-size:.6rem .8rem;
  }
  .conHt a{
    font-size:.6rem;color:#828282;
  }

  #content .news span{
    background-image:url(../assets/img/icon_zixun.png);
  }

  .gallery{
    opacity:0;
  }
</style>
