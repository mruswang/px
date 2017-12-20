<template>
  <div>
    <ul>
       <li class="swiper-slide-item" v-for="(item,index) in data">
          <div class="swiper-slide-item-title">
             <div class="swiper-slide-item-title-left">
                <img :src="item.photo" alt="">
                <div class="swiper-slide-item-title-text">
                    <span class="nickname">{{item.nickname}}</span>
                    <p><span>采纳率：{{(item.adopt*100).toFixed(2)}}%</span><span>求助：{{item.help_total}}</span></p>
                </div>
             </div>
             <span v-if="item.status==='0'" class="swiper-slide-item-title-right">已失效</span>
             <span v-else-if="item.status==='1'" class="swiper-slide-item-title-right swiper-blue">进行中</span>
             <span v-else-if="item.status==='2'" class="swiper-slide-item-title-right swiper-orange">已采纳</span>
             <span v-else class="swiper-slide-item-title-right">已完成</span>
          </div>
          <p class="swiper-slide-item-text" v-html="item.content"></p>
          <div class="swiper-slide-item-img" v-if="item.pics.length==1">
               <div><img :src="item.pics[0]" alt=""></div>
               <div></div>
               <div></div>
          </div>
          <div class="swiper-slide-item-img" v-else-if="item.pics.length==2">
               <div><img :src="item.pics[0]" alt=""></div>
               <div><img :src="item.pics[1]" alt=""></div>
               <div></div>
          </div>
          <div class="swiper-slide-item-img" v-else-if="item.pics.length>=3">
               <div><img :src="item.pics[0]" alt=""></div>
               <div><img :src="item.pics[0]" alt=""></div>
               <div><img :src="item.pics[0]" alt=""></div>
          </div>
          <div class="swiper-slide-item-img" v-else>
          </div>
          <div class="swiper-slide-item-info">
              <div class="swiper-slide-item-info-num">
                  <span>悬赏：</span><span>￥{{item.money}}</span>
              </div>
              <div class="swiper-slide-item-info-conact">
                  <span>{{item.created_at}}</span><span>{{item.type_str}}</span><span> 回答({{item.answer_count}})</span>
              </div>
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
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  /*商品*/
  .swiper-slide-item{
    padding: 0.6rem;
    background-color: #fff;
    border-bottom: 1px solid #eee;
  }
  .swiper-del{
    background-color: #eee !important;
  }
  .swiper-slide-item-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .swiper-slide-item-title-left{
    display: flex;
    align-items: center;
  }
  .swiper-slide-item-title-right{
    font-size: 0.6rem;
    color: #666;
  }
  .swiper-orange{
    color: #FE6459;
  }
  .swiper-blue{
    color: #2AAFF1;
  }
  .swiper-slide-item-title img{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 8px;
  }
  .swiper-slide-item-title-text{
    font-size: 0.5rem;
    color: #333;
  }
  .nickname{
    font-size: 0.75rem;
    color: #333;
  }
  .swiper-slide-item-title-text>p span:last-child{
    margin-left: 10px;
  }
  .swiper-slide-item-img{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .swiper-slide-item-img div{
    flex: 1;
    height: 4.5rem;
    overflow: hidden;
  }
  .swiper-slide-item-img div img{
    width: 100%;
    height: auto
  }
  .swiper-slide-item-img div:nth-child(2){
    margin-left: 5px;
    margin-right: 5px;
  }
  .swiper-slide-item>p{
    font-size: 0.6rem;
    color: #333;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 10px;
  }
  .swiper-slide-item-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .swiper-slide-item-info-num span{
    font-size: 0.6rem;
    color: #FE6459;
  }
  .swiper-slide-item-info-num span:last-child{
    font-size: 0.9rem;

  }
  .swiper-slide-item-info-conact span{
    margin-left:10px;
    font-size: 0.5rem;
    color: #333;
    border-radius: 5px;
  }
  .conact-del{
    color: #fff !important;
    background-color: #FE6459 ;
  }
</style>
