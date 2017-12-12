<template>
  <div class='head'>
    <allhead></allhead>
    <lunbo ></lunbo>
    <div class="classify">
        <span><a href="./seat.html">社区订座</a></span><span><a href="./shops.html">乐享社区</a></span><span><a href="./activity.html">活动</a></span>
        <span class="down"><a href="./piazza.html">社区互助</a></span><span class="down"><a href="./organization.html">社区机构</a></span><span class="down"><a href="./guide.html">社区办事</a></span>
    </div>
    <section id="content">
      <div class="conH">
        <span>最热活动</span>
      </div>
      <div class="huodong">
                 <dl>
                    <dt><img src="../assets/img/pic_huodong1.png" /></dt>
                    <dd>学习讨论组织交流会</dd>
                </dl>
                <dl>
                    <dt><img src="../assets/img/pic_huodong3.png" /></dt>
                    <dd>儿童国学讨论会会会啦啦啦啦拉拉</dd>
                </dl>
         <div id="acMore" class="lookmore">
            <a href="./activity.html">
                查看<br/>更多
            </a>
        </div>
      </div>

      <div class="conHt news">
        <span>资讯</span>
        <a href="./information.html">更多>></a>
      </div>
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

      <div class="conHt">
        <span>社区办事</span>
        <a href="./guide.html">更多>></a>
      </div>
      <div class="dothing">
                 <a href="javascript:;">锦江区工伤保险统筹管理的申请、确认程序的申请、确认程序</a>
                <a href="javascript:;">锦江区工伤保险统筹管理的申请、确认程序</a>
                <a href="javascript:;">锦江区工伤保险统筹管理的申请、确认程序</a>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
import allhead from 'base/head'
import lunbo from 'base/lunbo'
export default {
  data () {
    return {
      imglist: []
    }
  },
  components: {
    lunbo, allhead
  }
}
</script>

<style>
  .head{
    background: url('../assets/img/pic_index_bk.png') no-repeat center center;
    background-size: 100% 100%;
  }
  .classify{
    display: flex;justify-content: space-between;
    flex-wrap: wrap;padding:1rem .75rem;
  }
  .classify span{
    display: block;width:30%;text-align: center;
    height:2.5rem;line-height: 2.5rem;background:#fff;
    border-radius:1.25rem;border:1px solid #FE6459;
    box-shadow:1px 2px 3px rgba(0,0,0,.2);
  }
  .classify span a{
    padding-left:.9rem;
    color:#666;font-size:.65rem;display: block;width:calc(100% - .9rem);height: 100%;
    background: url(../assets/img/icon_dingzuo.png) no-repeat .6rem center;
    background-size:1rem 1.1rem;
  }
  .classify span:nth-child(2) a{
    background-image:url(../assets/img/icon_shangpin.png);
    background-size:1.1rem 1.3rem;
    /*padding-left:1rem;width:calc(100% - 1rem);*/
  }
  .classify span:nth-child(3) a{
    background-image: url(../assets/img/icon_huodong.png);
    background-size:1.25rem 1.2rem;
  }
  .classify span:nth-child(4) a{
    background-image: url(../assets/img/icon_huzhuguangchang.png);
    background-size:1.1rem 1rem;
  }
  .classify span:nth-child(5) a{
    background-image: url(../assets/img/icon_jigou.png);
    background-size:1rem 1.15rem;
  }
  .classify span:nth-child(6) a{
    background-image: url(../assets/img/icon_banshizhinan.png);
    background-size:1rem 1.3rem;
  }
  .classify span.down{
    margin-top:.5rem;
  }
  #content .conH{
    width:100%;height:2.2rem;background:#fff;color:#333;font-size:.8rem;
    line-height:2.2rem;margin-bottom:.5rem;
  }
  #content .conH span{
    padding-left:1.3rem;background:url(../assets/img/icon_huo.png) no-repeat .5rem center;
    background-size:.6rem .8rem;
  }
  .huodong{
    display: flex;justify-content: space-between;overflow: hidden;
    padding:0 .5rem 1rem .5rem;
  }
  .huodong dl{
    height:5rem;width:38%;
    background: #fff;border-radius:4px;overflow: hidden;box-shadow:0px 2px 3px rgba(0,0,0,.1);
  }
  .huodong dt{
    height:3.75rem;width: 100%;
  }
  .huodong img{
    width:100%;height:3.75rem;
  }
  .huodong dd{
    width:calc(100% - 1rem);overflow: hidden;text-overflow:ellipsis; white-space:nowrap;
    font-size:.6rem;color:#333;line-height: 1.25rem;padding:0 .5rem;
  }
  .huodong .lookmore{
    background:#fff;height:5rem;width:20%;
    border-radius: 4px;box-shadow:0px 2px 3px rgba(0,0,0,.1);
  }
  .huodong .lookmore a{
    font-size:.6rem;color:#828282;display: block;width:100%;text-align: center;
    margin-top:1.2rem;padding-bottom: 1rem;
    background: url(../assets/img/icon_more.png) no-repeat center bottom;
    background-size:.8rem .8rem;
  }
  #content .conHt{
    width:calc(100% - .5rem);height:2.2rem;background:#fff;color:#333;font-size:.8rem;padding-right:.5rem;
    line-height:2.2rem;border-bottom: 1px solid #E0E0E0;display: flex;justify-content: space-between;
  }
  #content .conHt span{
    padding-left:1.3rem;background:url(../assets/img/icon_zhinan.png) no-repeat .5rem center;
    background-size:.6rem .8rem;
  }
  .conHt a{
    font-size:.6rem;color:#828282;
  }
  .dothing{
    padding:.5rem;background: #fff;margin-bottom: .5rem;margin-bottom: 60px;
  }
  .dothing > a{
    color:#2AB0F1;font-size:.75rem;height:2.5rem;display: block;
    width: calc(100% - 1rem);border:1px solid #2AB0F1;overflow: hidden;text-overflow:ellipsis; white-space:nowrap;
    border-radius:5px;margin-bottom:.5rem;line-height: 2.5rem;padding:0 .5rem;
  }
  #content .news span{
    background-image:url(../assets/img/icon_zixun.png);
  }
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
  .gallery{
    opacity:0;
  }
</style>
