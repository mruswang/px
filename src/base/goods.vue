<template>
  <div>
    <ul class="list">
      <li class="goods-item">
        <div class="goods-item-img">
          <div><img src="../assets/img/10_2x.png" alt=""></div>
          <div><img src="../assets/img/pic_huodong3.png" alt=""></div>
          <div></div>
        </div>
        <p class="goods-item-text">商品的描述详情信息息，商品描述详情信息，商品描述详情信息，商品描述详情信息，商品描述详情信息，商品描述详情信，商品描述详情信息想睡觉打卡机，超过一行内容则显示...</p>
        <div class="goods-item-info">
          <div class="goods-item-info-num">
            <span>2017-10-15 10:53</span><img src="../assets/img/liuyanhui@2x.png" alt=""><span>10</span>
          </div>
          <div class="goods-item-info-moeny">
            <span>￥</span><span>180</span>
          </div>
        </div>
        <div class="goods-item-status">
          <span>下架</span><span class="goods_active">编辑</span>
        </div>
      </li>
      <li class="goods-item goods-item-del">
        <div class="goods-item-img">
          <div><img src="../assets/img/10_2x.png" alt=""></div>
          <div><img src="../assets/img/pic_huodong3.png" alt=""></div>
          <div></div>
        </div>
        <p class="goods-item-text">商品的描述详情信息息，商品描述详情信息，商品描述详情信息，商品描述详情信息，商品描述详情信息，商品描述详情信，商品描述详情信息想睡觉打卡机，超过一行内容则显示...</p>
        <div class="goods-item-info">
          <div class="goods-item-info-num">
            <span>2017-10-15 10:53</span><img src="../assets/img/liuyanhui@2x.png" alt=""><span>10</span>
          </div>
          <div class="goods-item-info-moeny">
            <span>￥</span><span>180</span>
          </div>
        </div>
        <div class="goods-item-status">
          <span>上架</span><span class="goods_active">编辑</span>
        </div>
      </li>
      <li class="goods-item">
        <div class="goods-item-img">
          <div><img src="../assets/img/10_2x.png" alt=""></div>
          <div><img src="../assets/img/pic_huodong3.png" alt=""></div>
          <div></div>
        </div>
        <p class="goods-item-text">商品的描述详情信息息，商品描述详情信息，商品描述详情信息，商品描述详情信息，商品描述详情信息，商品描述详情信，商品描述详情信息想睡觉打卡机，超过一行内容则显示...</p>
        <div class="goods-item-info">
          <div class="goods-item-info-num">
            <span>2017-10-15 10:53</span><img src="../assets/img/liuyanhui@2x.png" alt=""><span>10</span>
          </div>
          <div class="goods-item-info-moeny">
            <span>￥</span><span>180</span>
          </div>
        </div>
        <div class="goods-item-status">
          <span>上架</span><span class="goods_active">编辑</span>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
</script>

<style scoped>
  /*商品*/
  .goods-item{
    padding: 0.6rem;
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }
  .goods-item-del{
    background-color: #eee !important;
  }
  .goods-item-orange{
    color: #FE6459;
  }
  .goods-item-blue{
    color: #2AAFF1;
  }
  .goods-item-tou{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .goods-item-tou img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .goods-item-tou h4{
    font-size: 0.7rem;
  }
  .goods-item-img{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .goods-item-img div{
    flex: 1;
    height: 4.5rem;
    overflow: hidden;
  }
  .goods-item-img div img{
    width: 100%;
    height: auto
  }
  .goods-item-img div:nth-child(2){
    margin-left: 5px;
    margin-right: 5px;
  }
  .goods-item-text{
    font-size: 0.6rem;
    color: #333;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal !important;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    margin-bottom: 10px;
  }
  .goods-item-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }
  .goods-item-info-num{
    font-size: 0.5rem;
    color: #666
  }
  .goods-item-info-num img{
    width: 11px;
    height: 10px;
    margin-left: 10px;
    margin-right: 8px;
  }
  .goods-item-info-moeny{
    color: #FE6459;
  }
  .goods-item-info-moeny span:first-child{
    font-size: 0.6rem;
  }
  .goods-item-info-moeny span:last-child{
    font-size: 0.9rem;
  }
  .goods-item-status{
    text-align: right;
    margin-top: 10px;
  }
  .goods-item-status span{
    padding: 5px 20px;border:1px solid #ddd;
    display: inline-block;
    margin-left: 8px;border-radius: 5px;font-size: 0.6rem;color: #333;
  }
  .goods_active{
    border-color: #FE6459!important;
    color: #FE6459!important;
  }
</style>
