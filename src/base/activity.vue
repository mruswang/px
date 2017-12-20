<template>
  <div>
    <ul>
      <li class="activity-item" v-for="(item,index) in data">
        <div class="activity-item-left"><img :src="item.pics[0]" alt=""></div>
        <div class="activity-item-right">
          <h4>{{item.name}}</h4>
          <p>{{item.start_time}} 开始</p>
          <p>{{item.name}}</p>
          <div class="activity-item-right-div">
            <span class="activity-item-right-blue">{{item.status_str}}</span>
            <p><span>￥</span><span class="activity-item-right-moeny">{{item.costs}}</span><span>起</span></p>
          </div>
          <div v-show="fromindex==='mine' && item.status_str === '正在报名'" class="edititem"><span>修改</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default: [],
      type: Array
    },
    fromindex: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  /*商品*/
  .activity ul{
    background-color: #fff;
  }
  .activity-item{
    padding: 10px .625rem;
    display: flex;align-items: center;justify-content: space-between;border-bottom: 1px solid #eee;
  }
  .activity-item-left{
    width: 108px;height: 120px;
    flex: 0 0 108px;margin-right: 10px;
  }
  .activity-item-left img{
    width: 100%;
    height: 100%;
  }
  .activity-item-right{
    flex: 1;
  }
  .activity-item-right h4{
    font-size: 0.75rem;color: #333;
    margin-bottom: 10px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .activity-item-right p{
    font-size: 0.6rem;color: #828282;
  }
  .activity-item-right-div{
    display: flex;
    align-items: center;justify-content: space-between;
  }
  .activity-item-right-div>span{
    font-size: 0.6rem;color: #828282;
  }
  .activity-item-right-blue{
    color:#3AC5FC !important;
  }
  .activity-item-right-div>p{
    font-size: 0.6rem;color: #FE6459;
  }
  .activity-item-right-moeny{
    font-size: 1rem;
  }
  .edititem span{
    background-color: rgb(240,88,18);
    padding: 2px 10px;
    font-size: 0.6rem;
    border-radius: 5px;
    color: #fff;
  }
</style>
