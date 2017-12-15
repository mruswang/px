<template>
  <div>
    <ul>
      <li class="activity-item">
        <div class="activity-item-left"><img src="../assets/img/11_2x.png" alt=""></div>
        <div class="activity-item-right">
          <h4>活动名称活动名称活动名称活动名称活动名称活...</h4>
          <p>2017.12.08 9:00 开始</p>
          <p>中和社区</p>
          <div class="activity-item-right-div">
            <span class="activity-item-right-blue">可报名</span>
            <p><span>￥</span><span class="activity-item-right-moeny">99</span><span>起</span></p>
          </div>
        </div>
      </li>
      <li class="activity-item">
        <div class="activity-item-left"><img src="../assets/img/11_2x.png" alt=""></div>
        <div class="activity-item-right">
          <h4>活动名称活动名称活动名称活动名称活动名称活...</h4>
          <p>2017.12.08 9:00 开始</p>
          <p>中和社区</p>
          <div class="activity-item-right-div">
            <span class="activity-item-right-blue">可报名</span>
            <p><span>￥</span><span class="activity-item-right-moeny">99</span><span>起</span></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
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
</style>
