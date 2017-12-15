<template>
    <div>
      <section class="head">
        <div class="imgBox">
          <img src="../assets/img/pic_tx_2x.png" />
        </div>
        <div class="head-info">
          <p class="name"><span>机构名称</span><img src="../assets/img/icon_edit-bai@2x.png" alt=""></p>
          <p class="site">机构地址，点击进入地址选择</p>
          <p class="qian">￥<span></span></p>
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
          请输入机构的服务内容~
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
        <ul class="zitext">
           <li class="z-item">skdjshfbkshbfhgs商品名称商品名称商品名称商称商品商称商品商品名称商品商</li>
          <li class="z-item">skdjshfbkshbfhgs</li>
          <li class="z-item">skdjshfbkshbfhgs</li>
        </ul>
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
           <li class="shop_item" data-id="1">
              <img src="../assets/img/pic_huodong1.png" />
              <p class="shopName">商品名称商品名称商品名称商称商品商称商品商品名称商品商</p>
              <p class="spanBox"><span>价格:</span><span>￥562</span><span>￥999</span></p>
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
          <li class="a_item">
            <img src="../assets/img/pic_huodong1.png" />
            <p class="a_item-n">商品名称商品名称商品名称商称商品商称商品商品名称商品商</p>
            <p class="a_item-s"><span>$5.00</span><span>报名中</span>   </p>
          </li>
          <li class="a_item">
            <img src="../assets/img/pic_huodong1.png" />
            <p class="a_item-n">商品名称商品名称商品名称商称商品商称商品商品名称商品商</p>
            <p class="a_item-s"><span>$5.00</span><span>报名中</span>   </p>
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
             <li><img src="../assets/img/2@2x.png" alt=""></li>
            <li><img src="../assets/img/2@2x.png" alt=""></li>
            <li><img src="../assets/img/2@2x.png" alt=""></li>
            <li><img src="../assets/img/2@2x.png" alt=""></li>
            <li><img src="../assets/img/2@2x.png" alt=""></li>
            <li><img src="../assets/img/2@2x.png" alt=""></li>
            <li><img src="../assets/img/2@2x.png" alt=""></li>
            <li class="weui-uploader__input-box"></li>
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
             <li class="meBox-item">
                <p>
                    <img src="../assets/img/icon_qq.png" />
                    <span>管理员</span>
                </p>
                <span>成员名称</span>
            </li>
            <li class="meBox-item">
                <p>
                    <img src="../assets/img/icon_qq.png" />

                </p>
                <span>成员名称</span>
            </li>
            <li class="meBox-item">
                <p>
                    <img src="../assets/img/icon_qq.png" />

                </p>
                <span>成员名称</span>
            </li>
            <li class="meBox-item">
                <p>
                    <img src="../assets/img/icon_qq.png" />

                </p>
                <span>成员名称</span>
                <span class="meBox-del">删除</span>
            </li>
            <li class="meBox-item adduser">
              <p><img src="../assets/img/icon_add@2x.png" /></p>
              <span>添加</span>
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
          请输入机构的详细介绍~~
        </div>
      </section>

      <section class="zhuan">
        <span>转让机构</span>
      </section>
    </div>
</template>

<script>
</script>

<style scoped>
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
  // margin:.125rem;
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
    background:#FE6459;margin-right:.5rem;
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
    height:5rem;width: 100%;
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
    color:#FE6459;font-size:.75rem;
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
    color:  #FE6459;
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
    background-color: #FE6459;
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
    background-color: #FE6459;
    display: block;
    padding: 10px 0;
    border-radius: 5px;
    color: #fff;
    font-size: 0.7rem;
  }
</style>
