<template>
  <div>
    <ul class="list">

      <li class="noImg">
        <p>
          <span>置顶</span>资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题</p>
        <div class="infobtm"><span>资讯类别|来源</span><span>1000</span><span>20</span></div>
      </li>

      <li class="noImg">
        <p>
          <span>置顶</span>资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题资讯标题</p>
        <div class="imgBox">
          <img src="../assets/img/pic_huodong3.png" />
          <img src="../assets/img/pic_huodong3.png" />
          <img src="../assets/img/pic_huodong3.png" />
        </div>
        <div class="infobtm"><span>资讯类别|来源</span><span>1000</span><span>20</span></div>
      </li>

      <li class="oneImg">
        <div class="infoBox">
          <p><span>置顶</span>资讯标题资讯标题资讯标题资讯标题</p>
          <div class="infobtm"><span>资讯类别|来源</span><span>1000</span><span>20</span></div>
        </div>
        <div class="imgBox">
          <img src="../assets/img/pic_huodong3.png" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style scoped>
  .list{
    padding:0 .5rem;background: #fff;
  }
  .list li{
    list-style: none;padding:.5rem 0;
    border-bottom: 1px solid #E0E0E0;
  }
  .list li:last-child{
    border: 0;
  }
  .list li.noImg > p{
    font-size:.75rem;color: #333;margin-bottom: .5rem;
  }
  .list li p span{
    /*display: none;*/font-size:.6rem;color:#FE6459;border: 1px solid #FE6459;
    border-radius: 5px;padding:0px 4px;margin-right:.3rem;
  }
  .list li p .top{
    display: inline-block;
  }
  .list li .infobtm{
    font-size:.5rem;color:#999;
  }
  .list li .infobtm span{
    margin-right:.75rem;
  }
  .list li .infobtm span:nth-child(2){
    padding-left:.65rem;background: url(../assets/img/icon_pinglun.png) no-repeat left center;
    background-size:.45rem .4rem;
  }
  .list li .infobtm span:nth-child(3){
    padding-left:.65rem;margin-right:0;background: url(../assets/img/icon_eye.png) no-repeat left center;
    background-size:.45rem .35rem;
  }
  .list li.noImg .imgBox{
    display: flex;align-items: center;
    margin:.4rem 0;margin-top: 0;
  }
  .list li.noImg .imgBox img{
    width:32%;height:3.65rem;margin-right:2%;
  }
  .list li.noImg .imgBox img:last-child{
    margin-right:0;
  }

  .list .oneImg{
    display: flex;justify-content: space-between;
  }
  .list .oneImg .infoBox{
    margin-right:.5rem;flex: 1;
  }
  .list .oneImg .infoBox > p{
    margin-bottom:.65rem;
  }
  .list .oneImg .imgBox img{
    width:5.75rem;height:3.65rem;
  }
</style>
