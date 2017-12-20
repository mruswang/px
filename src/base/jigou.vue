<template>
  <div>
    <ul class="list">
      <li class="goods-item" v-for="(item,index) in data">
        <div class="imgBox">
          <img :src="item.thumb[0]" />
        </div>
        <div class="infoBox">
          <div class="name">{{item.name}}</div>
          <div class="txt">{{item.describe}}</div>
          <p><span class="distance">{{item.distance}}KM</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
    fromindex: {
      type: String,
      default: ''
    }
  },
  created () {
    this.myid = 9
  }
}
</script>

<style scoped>
/*机构*/
ul li{
  padding:1rem .5rem .75rem;display: flex;
  background:#fff;border-bottom: 1px solid #e0e0e0;
}
ul li:last-child{
  border:0;
}
ul li .imgBox img{
  height:5rem;width:5rem;display: block;margin-right:.5rem;
}
li .infoBox{
  flex: 1;
}
li .infoBox .name{
  overflow: hidden;text-overflow:ellipsis;
  font-size:.75rem;color:#333;
  display:-webkit-box;-webkit-box-orient:vertical;
  -webkit-line-clamp:1;
}
li .infoBox .txt{
  overflow:hidden; 
  text-overflow:ellipsis;
  display:-webkit-box; 
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
  font-size:.6rem;color:#828282;
  min-height:1.5rem;margin-top:.4rem;
}
li .infoBox p{
  text-align: right;
}
li .infoBox .distance{
  font-size:.6rem;color:#828282;
}
</style>
