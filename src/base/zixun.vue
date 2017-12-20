<template>
  <div>
    <ul class="list">
      <li v-for="(item, index) in data" v-show="index< num">
        <div v-if="item.thumb.length === 1" class="oneimg" @click="godetails(item)">
          <div class="infoBox">
            <p class="title"><span v-show="item.is_top==='1'">置顶</span>{{item.title}}</p>
            <div class="infobtm">
              <span v-if="item.type === 1">个人资讯|{{item.attribute.name}}</span>
              <span v-else-if="item.type === 2">机构资讯|{{item.attribute.name}}</span>
              <span v-else="item.type === 3">官方资讯|{{item.attribute.name}}</span>
              <span>{{item.view}}</span>
              <span>{{item.zan}}</span>
            </div>
          </div>
          <div class="imgBox">
            <img :src='item.thumb[0]' />
          </div>
        </div>
        <div v-else-if="item.thumb.length === 2" @click="godetails(item)">
          <p class="title"><span v-show="item.is_top==='1'">置顶</span>{{item.title}}</p>
          <div class="imgBox">
            <img :src='item.thumb[0]' />
            <img :src='item.thumb[1]' />
          </div>
          <div class="infobtm">
            <span v-if="item.type === 1">个人资讯|{{item.attribute.name}}</span>
              <span v-else-if="item.type === 2">机构资讯|{{item.attribute.name}}</span>
              <span v-else="item.type === 3">官方资讯|{{item.attribute.name}}</span>
              <span>{{item.view}}</span>
              <span>{{item.zan}}</span>
          </div>
        </div>
        <div v-else-if="item.thumb.length >= 3" @click="godetails(item)">
          <p class="title"><span v-show="item.is_top==='1'">置顶</span>{{item.title}}</p>
          <div class="imgBox">
            <img :src='item.thumb[0]' />
            <img :src='item.thumb[1]' />
            <img :src='item.thumb[2]' />
          </div>
          <div class="infobtm">
            <span v-if="item.type === 1">个人资讯|{{item.attribute.name}}</span>
              <span v-else-if="item.type === 2">机构资讯|{{item.attribute.name}}</span>
              <span v-else="item.type === 3">官方资讯|{{item.attribute.name}}</span>
              <span>{{item.view}}</span>
              <span>{{item.zan}}</span>
          </div>
        </div>
        <div v-else @click="godetails(item)">
          <p class="title"><span v-show="item.is_top==='1'">置顶</span>{{item.title}}</p>
          <div class="infobtm">
            <span v-if="item.type === 1">个人资讯|{{item.attribute.name}}</span>
              <span v-else-if="item.type === 2">机构资讯|{{item.attribute.name}}</span>
              <span v-else="item.type === 3">官方资讯|{{item.attribute.name}}</span>
              <span>{{item.view}}</span>
              <span>{{item.zan}}</span>
          </div>
        </div>
        <div v-show="fromindex === 'mine' && item.status !== '10'" class="mangerstatus"><span v-show="item.status !== '10'" @click="editzixun(item)">编辑</span><span v-show="item.status !== '10'" @click="delzixun(item)">删除</span></div>
        <div v-show="fromindex === 'mine' && item.status !== '10'">
          <div class="item-status" :class="{'blue':item.status==='3'}"></div>
          <div class="item-text"><span>{{item.status_str}}</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: [],
        allnum: ''
      }
    },
    props: {
      fromindex: {
        type: String,
        default: ''
      },
      num: {
        type: Number,
        default: 15
      },
      page: {
        type: Number,
        default: 1
      },
      data: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      godetails (item) {
        let timestamp = Date.parse(new Date())
        this.$router.push({ path: `/zixundetails/${timestamp}/${item.id}/${item.attribute.id}` })
      },
      editzixun (item) {
        console.log(item)
      },
      delzixun (item) {
        console.log(item)
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
    position: relative;
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
  .title span{
    font-size: 0.7rem;
    color: #FE6459;
    border:1px solid #FE6459;
    padding:0 5px;
    border-radius: 5px;
    margin-right: 5px;
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
  .mangerstatus{
    border-top: 1px solid #eee;
    text-align: right;
    margin-top: 10px;
    padding-top: 5px;
  }
  .mangerstatus span{
    font-size: 0.6rem;
    border:1px solid #ddd;
    padding: 4px 10px;
    border-radius: 5px;
    margin: 5px
  }
  .item-status{
    position: absolute;
    right: 0;
    top: 0;
    border-top: 50px solid #999;
    border-left: 50px solid transparent;
  }
  .orange{
     border-top-color: #FBB254; 
  }
  .blue{
      border-top-color: #2AAFF1 !important;
  }
  .item-text{
      transform: rotate(45deg); 
      position: absolute;
      top: 0;
      right: 0;
      width:50px;
      height: 50px;
      line-height: 25px;
      font-size: 0.4rem;
      color: #fff;
      text-align: center;
  }
  .bg-gray{
      background-color: #dedede;
  }
</style>
