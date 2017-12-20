<template>
  <div>
    <ul class="content">
      <li v-for="(item,index) in data">
        <img :src="item.thumb[0]" />
        <div>
          <p>{{item.name}}</p>
          <p>{{item.type_name}}</p>
          <p>{{item.address}}</p>
        </div>
        <p>
          <span>{{item.set_num}}</span>
          <span v-show="fromindex==='dating'">{{item.distance}}KM</span>
          <span v-show="fromindex==='mine'" v-if="item.member_id == myid">创建者</span>
          <span v-show="fromindex==='mine'" v-else>营业员</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myid: ''
    }
  },
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
  },
  methods: {
  }
}
</script>

<style scoped>
  ul li{
    border-bottom:1px solid #e0e0e0;display: flex;align-items: center;
    padding:1rem .5rem;position: relative;background:#fff;
  }
  ul li:last-child{
    border:0;
  }
  ul li img{
    height:5rem;width:5rem;margin-right:.5rem;
  }
  ul li > div{
    flex: 1;overflow:hidden;
  }
  ul li div p{
    white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
  }
  ul li div p:first-child{
    font-size:.75rem;color:#333;
  }
  ul li div p:nth-child(2){
    font-size:.6rem;color:#FE6459;
    margin:.7rem 0 1rem;
  }
  ul li div p:last-child{
    font-size:.6rem;color:#828282;
  }
  .weui-badge{
    position:absolute;top:.55rem;left:1.7rem;
  }
  ul li > p span{
    display: block;font-size:.6rem;color:#828282;
    text-align: right;
  }
  ul li > p span:first-child{
    margin-bottom:2.5rem;padding-left:.6rem;
    background: url(../assets/img/icon_zuoweishu.png) no-repeat 30% center;
    background-size:.55rem .5rem;margin-top:.2rem;
  }
  ul li > p span:last-child{
    color: #FE6459;
  }
</style>
