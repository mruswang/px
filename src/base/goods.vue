<template>
  <div>
    <ul class="list">
      <li class="goods-item" v-for="(item,index) in data">
        <div class="goods-item-tou">
          <img :src="item.attribute.photo" />
          <div><h4>{{item.name}}</h4><p class="catname">{{item.cat_name}}</p></div>
        </div>
        <div class="goods-item-img" v-if="item.pics.length===1">
          <div><img :src="item.pics[0]" alt=""></div>
          <div></div>
          <div></div>
        </div>
        <div class="goods-item-img" v-if="item.pics.length===2">
          <div><img :src="item.pics[0]" alt=""></div>
          <div><img :src="item.pics[1]" alt=""></div>
          <div></div>
        </div>
        <div class="goods-item-img" v-if="item.pics.length>=3">
          <div><img :src="item.pics[0]" alt=""></div>
          <div><img :src="item.pics[1]" alt=""></div>
          <div><img :src="item.pics[2]" alt=""></div>
        </div>
        <div class="goods-item-img" v-else>
        </div>
        <p class="goods-item-text">{{item.describle}}</p>
        <div class="goods-item-info" :class="{'noborder':fromindex!=='mine'}">
          <div class="goods-item-info-num">
            <span>{{item.created_at}}</span><img src="../assets/img/liuyanhui@2x.png" alt=""><span>{{item.comment_num}}</span>
          </div>
          <div class="goods-item-info-moeny">
            <span>￥</span><span>{{item.now_price}}</span>
          </div>
        </div>
        <div class="goods-item-status" v-show="fromindex==='mine'">
          <span>下架</span><span class="goods_active">编辑</span>
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
.goods-item{
  padding: 0.6rem;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
.goods-item-del{
  background-color: #eee !important;
}
.goods-item-orange{
  color: rgb(240,88,18);
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
     color: rgb(240,88,18);
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
  border-color: rgb(240,88,18)!important;
  color: rgb(240,88,18)!important;
}
.noborder{
  border-bottom: none;
}
/*长按添加的背景颜色*/
.bg-gray{
    background-color: #dedede !important;
}
/*发表互助的按钮*/
.push{
  position: fixed;
  right: 10px;
  bottom: 50px;
  z-index: 20;
}
.push a{
    display: block;
}
.push img{
    width: 2.2rem;
    height: 2.2rem;
}


.modal{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    align-items: center;
    justify-content: center;
    z-index: 5;
    display: none;
}
.mohu{
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 10;
}
.modal-content{
    position: relative;
    z-index: 15;
    background-color: #fff;
    width: 80%;
    overflow: hidden;
    border-radius: 5px;
    text-align: center;
} 
.modal-content p{
    padding-top: 20px;
}
.tishi{
    font-size: 0.9rem;
    color: #333;
    font-weight: 600;
}
.modal-desc{
    font: 0.75rem;
    color: #333;
}
.modal-content>div{
    border-top: 1px solid #ddd;
    display: flex;
    align-items: center;
    margin-top: 20px;
}
.modal-content>div span{
    flex: 1;
    padding: 10px;
    color: rgb(240,88,18);
    font-size: 0.75rem;
}
.modal-content>div span:last-child{
    border-left: 1px solid #ddd;
}
.catname{
  font-size: 0.6rem;
  
}
</style>
