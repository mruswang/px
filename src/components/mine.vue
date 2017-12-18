<template>
  <div>
    <section class="section-bg">
      <div class="se-top">
        <a href="./set.html"><img src="../assets/img/ixon_sz_2x.png" alt=""></a>
        <a href="./my_info.html" class="myinfo">
          <img src="../assets/img/icon_xiaox_2x.png" alt="">
          <!-- <span class="se-top-dot"></span> -->
        </a>
      </div>
      <div class="mine-info">
        <div class="mine-info-top">
          <div class="mine-info-top-left">
            <div class="mine-info-tl-img">
              <a href="javascript:;"><img src="../assets/img/pic_tx_2x.png" alt=""></a>
            </div>
            <div>
              <div class="mine-info-tl-name">
                <a href="javascript:;">
                  <span class="title nickname">昵称</span>
                  <img class="icon" src="../assets/img/icon_edit_2x.png" alt="">
                </a>

              </div>
              <div class="mine-info-tl-status">
                <img class="icon"  src="../assets/img/icon_js_2x.png" alt="">
                <span class="title identity">未认证</span>
              </div>
            </div>
          </div>
          <div class="mine-info-top-right">
            <a href="javascript:;">
              <span class="vip">开通会员</span>
              <img src="../assets/img/icon_rt_2x.png" alt="">
            </a>
          </div>
        </div>
        <div class="mine-info-bottom">
          <ul class="mine-info-b-text">
            <li>
              <a href="javascript:;" class="guanzhu">
                <p>45</p>
                <span>关注</span>
              </a>

            </li>
            <li>
              <a href="javascript:;" class="shou">
                <p>85</p>
                <span>收藏</span>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="jifen">
                <p>745</p>
                <span>积分</span>
              </a>
            </li>
            <li>
              <a href="javascript:;" class="yue">
                <p>12345</p>
                <span>账户余额</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mine-type">
        <grid :cols="3">
          <grid-item v-for="(item,index) in allmine" :key="index">
              <a href="javascript:;" class="grid-center" :class="item.classname" @click="go(item)">
                <div class="weui-grid__icon">
                  <img :src="item.icon" alt="">
                  <!-- <span class="weui-grid-dot"></span> -->
                </div>
                <p class="weui-grid__label">
                  {{item.name}}
                </p>
              </a>
          </grid-item>
        </grid>
      </div>
    </section>
  </div>
</template>

<script type='text/ecmascript-6'>
  import { Grid, GridItem, GroupTitle } from 'vux'

  export default {
    data () {
      return {
        allmine: [
          {
            name: '我的资讯',
            classname: 'my_information',
            url: './my_information',
            icon: require('../assets/img/icon_dt_2x.png')
          },
          {
            name: '我的互助',
            classname: 'my_help',
            url: './my_help',
            icon: require('../assets/img/icon_hzhu_2x.png')
          },
          {
            name: '我的预订',
            classname: 'my_order',
            url: './my_order',
            icon: require('../assets/img/icon_dzuo_2x.png')
          },
          {
            name: '我的机构',
            classname: 'my_mechanism',
            url: './my_mechanism',
            icon: require('../assets/img/icon_jigou_2x.png')
          },
          {
            name: '我的店铺',
            classname: 'my_store_list',
            url: './my_store_list',
            icon: require('../assets/img/icon_dp_2x.png')
          },
          {
            name: '我的活动',
            classname: 'my_activity',
            url: './my_activity',
            icon: require('../assets/img/icon_hd_2x.png')
          },
          {
            name: '我的商品',
            classname: 'my_goods',
            url: './my_goods',
            icon: require('../assets/img/icon_sp_2x.png')
          },
          {
            name: '我要投稿',
            classname: 'my_tougao',
            url: './my_tougao',
            icon: require('../assets/img/icon_zxgl_2x.png')
          },
          {
            name: '我要推广',
            classname: 'my_extension',
            url: './my_extension',
            icon: require('../assets/img/icon_tg_2x.png')
          }
        ]
      }
    },
    components: {
      Grid,
      GridItem,
      GroupTitle
    },
    methods: {
      onItemClick () {
        console.log('on item click')
      },
      go (item) {
        console.log(item)
        this.$router.push({ path: `${item.url}/1/9` })
      }
    }
  }
</script>

<style>
  html,body{
    background-color: #f8f8f8;
  }
  .section-bg{
    background:url('../assets/img/bg_grzx_2x.png') no-repeat;
    background-size: 100% 170px;
    height: 170px;
  }
  .se-top{
    text-align: right;
    padding:0.75rem 1.2rem;
  }
  .se-top img{
    width: 0.875rem;
    height: auto;

  }
  .se-top a{
    position: relative;
  }
  .se-top a:first-child{
    margin-right: 25px;
  }
  .se-top-dot{
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 50%;
    top: 0;
    right: 0;
  }
  .mine-info{
    background-color: #fff;
    border-radius: 5px;
    margin:0 1.2rem;
    margin-bottom: 10px;
    box-shadow: 0px 3px 10px #ddd;
  }
  .mine-info-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .mine-info-top-left{
    display: flex;
    align-items: center;
  }
  .mine-info-tl-img{
    margin-left: 0.5rem;
    margin-right: 10px;
  }
  .mine-info-tl-img img{
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-top: -12px;
  }

  .mine-info-tl-name .title{
    color: #333;
    font-size: 0.75rem;
  }
  .mine-info-tl-name .icon{
    width: 0.55rem;
    height: 0.55rem;
  }
  .mine-info-tl-status span{
    color: #666;
    font-size: 0.7rem;
  }
  .mine-info-tl-status .title{
    color:#FE6459;
  }
  .mine-info-tl-status .icon{
    width: 0.55rem;
    height: 0.55rem;
  }
  .mine-info-top-right{
    background-color: #FF9D5E;
    padding: 0.35rem 0.75rem;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    font-size: 0.6rem;
  }
  .mine-info-top-right a{
    color: #fff;
  }
  .mine-info-top-right img{
    width: .5rem;
    height: .5rem;
  }
  .mine-info-bottom{
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .mine-info-b-text{
    display: flex;
    align-items: center;
  }
  .mine-info-b-text li{
    flex:1;
    text-align: center;
    list-style: none;
  }
  .mine-info-b-text li>a>p{
    font-size: 0.75rem;
    color: #555;
    font-weight: 600;
  }
  .mine-info-b-text li>a>span{
    font-size: 0.55rem;
    color: #333;
  }
  .small{
    font-size: 0.6rem !important;
  }

  .mine-type{
    margin:0 1.2rem;
    background-color: #fff;
    /*border:1px solid #E5E5E5;*/
    margin-bottom: 60px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .mine-type .weui-grid__icon{
    width: 3rem;
    height:3rem;
    position: relative;
  }

  /*更变弹出列表样式*/
  .weui-actionsheet__menu{
    display: flex;padding: 1rem 1.25rem;justify-content: space-between;
    padding-top:2.1rem;
  }
  .weui-actionsheet__menu img{
    height:3rem;width:3rem;
  }
  .weui-actionsheet__menu dd{
    text-align: center;font-size:.65rem;color: #666;
  }
  .weui-actionsheet__cell:before{
    border:0;
  }
  .weui-actionsheet__action{
    margin:0;
  }
  .weui-actionsheet__action > div{
    padding:1rem 0;
    background: url(../assets/img/icon_fabu_quxiao.png) no-repeat center top;
    background-size:.8rem .8rem;
  }
  .weui-picker__action{
    color:#FE6459;
  }



  .allpsuh{
  }
  .zhe{
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: none;
  }
  .allpsuh-content{
    display: none;
    position: fixed;
    left: 0;
    bottom: 34px;
    z-index: 15;
    background-color: #fff;
    width: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
  }
  .allpsuh-content a{
    flex:1;
    text-align: center;
    display: block;
  }
  .allpsuh-content a img{
    width: 2.5rem;height: 2.5rem;
  }
  .allpsuh-content a dd{
    color: #555;font-size:.7rem;
  }
  .allpush-del{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index: 15;
    padding-bottom: 15px;
    display: none;
  }
  .allpush-del img{
    display: block;
    margin: auto;
    width: 1rem;
    height: 1rem;
  }

</style>
