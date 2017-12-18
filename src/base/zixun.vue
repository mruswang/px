<template>
  <div>
    <ul class="list">
      <li v-for="(item, index) in list">
        <div v-if="item.thumb.length === 1" class="oneimg">
          <div class="infoBox">
            <p class="title">{{item.title}}</p>
            <div class="infobtm">
              <span v-if="item.type === 1">个人资讯|{{item.attribute.name}}</span>
              <span v-else-if="item.type === 2">机构资讯|{{item.attribute.name}}</span>
              <span v-else="item.type === 3">官方资讯|{{item.attribute.name}}</span>
              <span>1000</span>
              <span>20</span>
            </div>
          </div>
          <div class="imgBox">
            <img :src='item.thumb[0]' />
          </div>
        </div>
        <div v-else-if="item.thumb.length === 2">
          <p class="title">{{item.title}}</p>
          <div class="imgBox">
            <img :src='item.thumb[0]' />
            <img :src='item.thumb[1]' />
          </div>
          <div class="infobtm"><span>资讯类别|来源</span><span>1000</span><span>20</span></div>
        </div>
        <div v-else-if="item.thumb.length >= 3">
          <p class="title">{{item.title}}</p>
          <div class="imgBox">
            <img :src='item.thumb[0]' />
            <img :src='item.thumb[1]' />
            <img :src='item.thumb[2]' />
          </div>
          <div class="infobtm"><span>资讯类别|来源</span><span>1000</span><span>20</span></div>
        </div>
        <div v-else>
          <p class="title">{{item.title}}</p>
          <div class="infobtm"><span>资讯类别|来源</span><span>1000</span><span>20</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: []
      }
    },
    created () {
      this.$http.get('http://peicentapi.demo.sclonsee.com/v1/news/index', {params: {target_id: this.$route.params.id, type: this.$route.params.type, flag: 3}}).then(response => {
        console.log(response.data.data)
        this.list = response.data.data
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
      getimg () {
        console.log(this.$route.params.type)
        console.log(this.$route.params.id)
      }
    }
  }
</script>

<style scoped>
  .list{
    padding:0 .5rem;background: #fff;
  }
  .list li{
    list-style: none;padding:.5rem 0;
    border-bottom: 1px solid #E0E0E0;
  }
  .list li:last-child{
    border: 0;
  }
  .oneimg{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .oneimg .infoBox{
    flex: 1;
  }
  .oneimg .imgBox{
    width:5.75rem;
  }
  .oneimg .imgBox img{
    width:5.75rem;height:3.65rem;
  }
  .title{
    font-size:.9rem;color: #333;margin-bottom: .5rem;
  }
  .imgBox{
    display: flex;
  }
  .imgBox img{
    flex: 1;
    width:5.75rem;height:3.65rem;
  }
  .imgBox img:nth-child(2){
    margin: 0 10px;
  }
  /*.list li p span{
    font-size:.6rem;color:#FE6459;border: 1px solid #FE6459;
    border-radius: 5px;padding:0px 4px;margin-right:.3rem;
  }
  .list li p .top{
    display: inline-block;
  }*/
  .list li .infobtm{
    font-size:.5rem;color:#999;
  }
  .list li .infobtm span{
    margin-right:.75rem;
  }
  .list li .infobtm span:nth-child(2){
    padding-left:.65rem;background: url(../assets/img/icon_pinglun.png) no-repeat left center;
    background-size:.45rem .4rem;
  }
  .list li .infobtm span:nth-child(3){
    padding-left:.65rem;margin-right:0;background: url(../assets/img/icon_eye.png) no-repeat left center;
    background-size:.45rem .35rem;
  }
</style>
