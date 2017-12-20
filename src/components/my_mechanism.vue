<template>
  <div class="container">
    <!-- 头部活动图片 活动名称 -->
    <section class="head" :class="{'yiren': list.status==='2'}">
       <div class="imgBox">
            <img :src="list.thumb[0]" />
        </div>
        <div class="head-info">
            <p class="name"><span>{{list.name}}</span><img src="../assets/img/icon_edit-bai@2x.png" alt=""></p>
            <p class="site">{{list.address}}</p>
            <p class="qian">￥<span></span>{{list.money.balance}}</p>
        </div> 
        <p class="head-right"><span class="mingxi">明细</span><span class="tixian">提现</span></p>
    </section>
    <!-- 服务介绍 -->
    <div class="introduce">
        <div class="title">
            <span></span>
            <span>服务介绍</span>
        </div>
        <div class="txt">
            {{list.content}}
        </div>

    </div>
     <!-- 机构资讯 -->
    <section class="zixun">
        <div class="top">
            <div class="title">
                <span></span>
                <span>机构资讯</span>
            </div>
            <div class="top-right">
                <span class="morezixun">更多</span>
            </div>
            
        </div>
        <banshi :data="list.news" fromindex="jigou" class="zitext"></banshi>
    </section>
    <!-- 机构商品 -->
    <section class="shop">
        <div class="top">
            <div class="title">
                <span></span>
                <span>机构商品</span>
            </div>
            <div class="top-right">
                <span class="moreshop">更多</span>
            </div>
        </div>
        <ul class="shtext">
            <li class="shop_item" v-for="(item,index) in list.goods" v-show="index<2">
                <img :src="item.pics[0]" />
                <p class="shopName">{{item.name}}</p>
                <p class="spanBox"><span>价格:</span><span>￥{{item.now_price}}</span><span>￥{{item.price}}</span></p>
            </li>
        </ul>
    </section>
    <!-- 机构活动 -->
    <section class="activity">
        <div class="top">
            <div class="title">
                <span></span>
                <span>机构活动</span>
            </div> 
            <div class="top-right">
                <span class="moreactive">更多</span>
            </div>
            
        </div>
        <ul class="actext">
            <li class="a_item"  v-for="(item,index) in list.activity" v-show="index<2">
                <img :src="item.pics[0]" />
                <p class="a_item-n">{{item.name}}</p>
                <p class="a_item-s"><span>￥{{item.costs}}</span>
                  <span>{{item.status_str}}</span>
                </p>
            </li>
        </ul>
    </section>
    <!-- 相关照片 -->
    <section class="photo">
        <div class="title">
            <span></span>
            <span>相关照片</span>
        </div>
        <div class="weui-uploader" >
            <ul class="weui-uploader-img">
                <li v-for="(item,index) in list.pics"><img :src="item" alt=""></li>
            </ul>
        </div>
    </section>

    <!-- 机构成员 -->
    <section class="member">
        <div class="title">
            <span></span>
            <span>机构成员</span>
        </div>
        <div class="meBox">
            <ul>
                <li class="meBox-item" v-for="(item,index) in list.user">
                    <p v-if="item.role==='2'">
                        <img :src="item.photo" />
                        <span>管理员</span>
                    </p>
                    <p v-else>
                        <img :src="item.photo" />
                    </p>
                    <span>{{item.nickname}}</span>
                    <span v-show="item.role!=='2'" class="meBox-del">删除</span>
                </li>
                <li class="meBox-item adduser">
                    <p><img src="../assets/img/icon_add@2x.png" /></p>
                    <span>添加</span>
                </li>
            </ul>
        </div>
    </section>
    <section class="jigou">
         <div class="title">
            <span></span>
            <span>机构所有店铺</span>
        </div>
        <div class="meshop">
            <ul>
                <li class="meshop-item" v-for="(item,index) in list.shop">
                    <p>
                        <img :src="item.thumb[0]" />
                    </p>
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </section>
    <!-- 详细介绍 -->
    <section class="details">
        <div class="title">
            <span></span>
            <span>详细介绍</span>
        </div>
        <div class="txt">
            {{list.describe}}
        </div>
    </section>
    <section class="zhuan">
        <span>转让机构</span>
    </section>
  </div>
</template>

<script>
import banshi from 'base/banshi'
export default{
  data () {
    return {
      list: []
    }
  },
  created () {
    setTimeout(() => {
      this.loadData()
    }, 30)
  },
  methods: {
    loadData () {
      this.$http.get('http://peicentapi.demo.sclonsee.com/v1/organization/my-organ', {params: { member_id: this.$route.params.id, type: this.$route.params.type }}).then(response => {
        this.list = response.data.data
        console.log(this.list)
      }, response => {
        alert(response)
      })
    }
  },
  components: {
    banshi
  }
}
</script>

<style scoped>
/*头部*/
.noren{
    background:url(../assets/img/pic_jigou_weirenzheng_bk.png) no-repeat center center;
}
.yiren{
    background:url(../assets/img/pic_jigou_bk.png) no-repeat center center;
}
.head{
    background-size: 100% 100%;
    padding:.75rem; display: flex;align-items: center; 
}
.head-info{
    flex:1
}
.head img{
    width:2.75rem;height:2.75rem;
    display: block;border-radius:5px;
    /* margin:.125rem; */
    margin-right: 10px;
}

.head .name{
    font-size:.75rem;color:#fff;display: flex;align-items: center;

}
.head .name img{
    width: 15px;
    height:15px;
    margin-left: 8px;
}
.head .site{
    font-size:.6rem;color:#fff;padding-left:1rem;
    background: url(../assets/img/icon_jigoudizhi.png) no-repeat left center;
    background-size:.65rem .6rem;
    margin-top:.2rem;
}
.head .qian{
    color: #fff;
    font-size: 0.7rem;
}
.head>p{
    font-size: 0.6rem;
}
.head>p span{
    border:1px solid #eee;
    color: #eee;
    padding: 1px 10px;
    border-radius: 5px;
    display: block;
}
.mingxi{
    margin-bottom: 8px;
}
/*活动介绍*/
.introduce{
    background:#fff;margin-bottom:.5rem;
}
.introduce .txt{
    font-size:.75rem;color:#828282;
    padding:.2rem;border: 1px solid #3363E4;
    border-radius:8px;margin:.75rem .5rem;
}
textarea{
    border: none;
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;
    display: block;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 10rem;
    line-height: normal;
    color: #424242;
    font-size: 0.8rem;
    font-family: inherit;
    box-sizing: border-box;
    -webkit-user-select: text;
    user-select: text;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
}
.reviewww{
    resize:none;
    color: #777;
    padding:.3rem;
}
/*活动咨询商品公共部分*/
.top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
}
.title{
    padding:.5rem;
    display: flex;
    align-items: center;
}
.title  > span:first-child{
    display: inline-block;width:2px;height:.85rem;
    background:rgb(240,88,18);margin-right:.5rem;
}
.title > span:last-child{
    font-size: .8rem;color: #333;
}
.top-right{
    font-size: 0.65rem;color: #333;
}
.top-right span{
    padding-left: 10px;
}
/*机构资讯*/
.zixun{
    margin-bottom:.5rem;
}
.zitext{
    padding: 10px .625rem;background-color: #fff;
}
.zixun .z-item{
    border: 1px solid #3363E4;font-size: 0.7rem;
    margin-bottom: 5px;border-radius: 5px;padding: 5px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;
}

/*机构商品*/
.shop{
    background: #fff;margin-bottom:.5rem;
}
.shop ul{
    padding: 0 .625rem;display: flex;flex-wrap: wrap;

}
.shop li{
    padding:.625rem;list-style: none;width: calc(50% - 1.25rem);position: relative;min-height: 183px;
}
.shop img{
    height:8rem;width: 100%;
    display: block;
}
.shop .shopName{
    font-size:.75rem;color:#333;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    margin:.3rem 0;
}
.shop .spanBox > span{
    font-size:.6rem;color: #828282;
    margin-right:.2rem;
}
.shop .spanBox > span:nth-child(2){
    color:rgb(240,88,18);font-size:.75rem;
}
.shop .spanBox > span:nth-child(3){
    text-decoration: line-through;
}
/*机构活动*/
.activity{
    background: #fff;margin-bottom:.5rem;
}
.activity ul{
    padding: 0 .625rem;display: flex;flex-wrap: wrap;

}
.activity li{
    padding:.625rem;list-style: none;width: calc(50% - 1.25rem);position: relative;min-height: 183px;
}
.activity img{
    height:5rem;width: 100%;
    display: block;
}
.activity .a_item-n{
    font-size:.75rem;color:#333;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    margin:.3rem 0;
}
.a_item-s{
    font-size: .75rem;color: #3AC5FC;
    display: flex;
    justify-content: space-between;
}
.a_item-s span:first-child{
    color:  rgb(240,88,18);
}
/*相关照片*/
.photo{
    background: #fff;margin-bottom:.5rem;
}
.photo .title,.introduce .title{
    border-bottom:1px solid #e0e0e0;padding:.5rem;
    display: flex;align-items: center;
}
.photo .weui-uploader{
    background-color: #fff;
    padding: 10px 15px;
}
.photo .weui-uploader-img:after{
    content: ' ';
    display: block;
    clear: both;
    visibility:hidden;
    line-height: 0;
    height:0;
}

.photo .weui-uploader-img li{
    float: left;
    position: relative;
    list-style: none;
}
.photo .weui-uploader-img img{
    width: 77px;
    height: 77px;
    margin-right: 5px;
}
.photo .weui-uploader-img li span{
    position: absolute;
    right: 5px;
    top:0;
    height: 20px;
    width: 20px;
    background-color: rgba(0,0,0,0.3);
    border-bottom-left-radius: 10px;
    background-image: url('../assets/img/del@2x.png');
    background-size: 10px 10px;
    background-repeat: no-repeat;
    background-position: center;
}
.container{
  margin-bottom: 60px;
}
/*机构成员*/
.member{
    background: #fff;margin-bottom:.5rem;
}
.member .title,.introduce .title{
    border-bottom:1px solid #e0e0e0;padding:.5rem;
    display: flex;align-items: center;
}
.member .meBox{
    padding:0 .375rem;
}
.meBox ul{
    padding-top: 10px;
}
.meBox ul:after{
    content: ' ';
    visibility: hidden;
    height: 0;
    line-height: 0;
    clear: both;
    display: block;
}
.meBox-item{
    width: 25%;
    float: left;
    text-align: center;
    list-style: none;
    margin-bottom: 10px;
}
.meBox-item img{
    display: block;height:2rem;width:2rem;
    margin:0 auto;
}
.meBox-item>p{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
}
.meBox-item>p span{
    font-size: 0.4rem;
    color: #fff;
    background-color: #FF9D5E;
    border-radius: 5px;
    position: absolute;
    top: 1.8rem;
}
.meBox-item>span{
    font-size: 0.7rem;
    color: #333;
    margin-top: 15px;
    display: block;
}
.meBox-del{
   margin-top: 0 !important; 
   border:1px solid #ddd;
   background-color: #dedede;
   display: inline-block;
   width: 50%;
   margin: auto;
   border-radius: 5px;
   font-size: 0.5rem !important;
   color: #999;
}
/*机构店铺*/
.jigou{
    background-color: #fff;
    margin-bottom: 10px;
}
.jigou .title{
    border-bottom: 1px solid #ddd;
}
.meshop>ul{
    width: 100%;
    overflow-x:auto;
    white-space:nowrap;
    display: flex;
    margin-top: 15px;
    padding-bottom: 15px;
}
.meshop-item{
    margin: 0 10px;
    list-style: none;
}
.meshop-item img{
    display: block;height:2rem;width:2rem;
    margin:0 auto;
}
.meshop-item>span{
    font-size: 0.7rem;
    color: #333;
    margin-top: 8px;
    display: block;
}
/*详细介绍*/
.details{
    background: #fff;
}
.details .title,.introduce .title{
    border-bottom:1px solid #e0e0e0;padding:.5rem;
    display: flex;align-items: center;
}
.details .txt{
    padding:.75rem;font-size:.75rem;color:#333;
}


/*出现添加用户*/
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
    left: 0;
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
.modal-content p:first-child{
    padding-top: 20px;
}
.tishi{
    font-size: 0.9rem;
    color: #333;
    font-weight: 600;
}
.modal-desc{
    font-size: 0.75rem;
    color: #333;
    padding: 20px;
}
.modal-desc input{
    width: 90%;
    border: 1px solid #eee;
    padding-top: 10px;
    padding-bottom: 10px;
    outline: none;
    padding-left: 5px;
    border-radius: 5px;
}
.modal-content>div{
    border-top: 1px solid #ddd;
    display: flex;
    align-items: center;
    margin-top: 10px;
}
.modal-content>div span{
    flex: 1;
    padding: 10px;
    color: rgb(240,88,18);
    font-size: 0.75rem;
}

.modal-text{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;color: #666;
}

.modal-text span{
    border: 1px solid #999;
    width: 16px;
    height: 16px;
    display: block;
    border-radius: 5px;
    margin-right: 10px;
}
.active {
    background-image: url(../assets/img/icon_gx_2x.png);
    background-repeat: no-repeat;
    background-color: #FB6048;
    border: 1px solid #FB6048 !important;
}
.modal-content .cancle{
    color: #333;
}
.modal-content>div span:last-child{
    border-left: 1px solid #ddd;
}
.weui-btn-area{
    margin: 20px 10px;
}
.weui-btn-area span{
    border-radius: 45px;
    background-color: rgb(240,88,18);
    display: block;
    text-align: center;color: #fff;
    padding: 10px 0;
}

.zhuan{
    padding: 15px;
    text-align: center;
    display: none;
}
.zhuan span{
   background-color: rgb(240,88,18);
   display: block; 
   padding: 10px 0;
   border-radius: 5px;
   color: #fff;
   font-size: 0.7rem;
}
</style>
