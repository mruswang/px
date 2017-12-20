<template>
  <div id="footer">
    <tabbar>
      <tabbar-item selected link="/">
        <img slot="icon"  src="../assets/img/icon_index-sel_2x.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/information">
        <img slot="icon" src="../assets/img/icon_dtai.png">
        <span slot="label" >资讯</span>
      </tabbar-item>
      <tabbar-item class='foot-fa'>
        <img class='foot-fa-img' slot="icon" src="../assets/img/icon_tjia_2x.png">
        <span slot="label"></span>
      </tabbar-item>
      <tabbar-item link="/seat">
        <img slot="icon" src="../assets/img/icon_dz.png">
        <span slot="label">订座</span>
      </tabbar-item>
      <tabbar-item link="/mine">
        <img slot="icon" src="../assets/img/icon_my.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    }
  }
</script>
<style type="text/css" scoped>
  #footer{
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 5;
  }
  .foot-fa{
    margin-top: -18px;
    left: -15px;
    position: relative;
    z-index: 10;
  }
  .foot-fa-img{
    width: 50px;
    height: 50px;
  }
  #footer .weui-tabbar__icon {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
</style>
