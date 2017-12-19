<template>
  <div>
  	<section class="content">
		<p class="ctitle">{{imglist.title}}</p>
		<div class="info">
		    <div class="infocon">
		    	<img :src="imglist.attribute.thumb" />
		    	<div>
			    	<p><span class="mingcheng">{{imglist.community_name}}</span><span class="fbzmc">{{imglist.attribute.name}}</span></p>
			    	<p><span class="isyu">{{imglist.is_yc === '1'? '原创' : '转载'}}</span><span class="ctime">{{imglist.created_at}}</span></p>
		    	</div>
		    </div>
		    <div class="btnBox" v-show="this.$route.params.mid !== mid">
		    	<a href="javascript:;" @click="guanzhu(imglist)" v-if="imglist.is_floow === '否'" class="btn guanzhu">关注</a>
		    	<a href="javascript:;" @click="quxaioguanzhu(imglist)" v-else="imglist.is_floow === '是'" class="btn guanzhu active">已关注</a>
		    	<a href="javascript:;" @click="shoucang(imglist)" v-if="imglist.is_collect === '否'" class="btn shoucang">收藏</a>
		    	<a href="javascript:;" @click="quxaioshoucang(imglist)" v-else="imglist.is_collect === '是'" class="btn shoucang active">已收藏</a>
		    </div>
		    <div class="delinformation"  v-show="this.$route.params.mid === mid">
		    	<span>删除</span>
		    </div>
		</div>

		<div id="informations" v-html="imglist.content">
			<!-- 图文描述 内容区-->
		</div>


		<div class="imgtxt">
			<!--<img src="" />-->
			<!--<p>——转载自谁谁谁</p>-->
			<!--<p class="xingqus"><a href="">#兴趣1</a><a href="">#兴趣2</a><a href="">#兴趣3</a></p>-->
			<div class="zanBox" v-show="imglist.is_zs==='1'">

				<!-- 赞赏从个人中心进来隐藏 -->
				<a href="javascript:;" onclick="goZans();" class="zsh">赞赏</a>
				<p><span class="shang"></span>{{imglist.zan}}人赞赏</p>
			</div>
			<div class="itBtm">

				<div><span class="catname">分类:{{imglist.cat_name}}</span><span class="read">阅读:{{imglist.view}}</span><span class="zshnum">赞:{{imglist.zan}}</span></div>
				<a href="javascript:;" data-type="0" onclick="tipOff(this);" class="jubao">举报</a>
			</div>
		</div>
	</section>

	<section class="comment" >
		<div class="title">
			<p>
				<span></span>
				<span>资讯评论</span>
			</p>
			<a href="javascript:;" class="chco" v-show="comment.length>0">查看全部条评论></a>
		</div>


		<ul class="comment-ul" v-show="comment.length>0">
			<li v-for="(item,index) in comment">
				<img :src="item.photo" />
				<div class="liCon">
					<p><span>{{item.nickname}}</span><span class="zan">{{item.zan}}</span></p>
					<a href="./all_reply.html" class="txt">{{item.content}}</a>
					<div class="smone" v-show="item.repply.length>0">
						<span>{{item.repply[0].nickname}}</span><a href="javascript:;">共{{item.repply.length}}条回复></a>
					</div>
					<p class="timeBox"><span>{{item.created_at}}</span><span class="huifu">回复</span></p>
				</div>
			</li>
		</ul>
	</section>
	<a href="javascript:;" class="downMore" v-show="comment.length>0">查看全部条评论</a>
	<a href="javascript:;" class="downMore" v-show="comment.length=='0'">暂无评论</a>
	<section class="share">
	  <img src="../assets/img/share_.png" alt="">
	  <p>请点击右上角</p>
	</section>


	<!-- 评论 -->
	<footer id="footerP">
		<div class="inputBox">
			<input id="pinglun" type="text" name="" placeholder="写评论" />
		</div>

		<div class="btnBox">
			<dl>
				<dt><img src="../assets/img/icon_zixunxiangqing_pinglun.png" /></dt>
				<dd class="plNum"></dd>
			</dl>
			<dl id="zan" data-is="0">
				<dt><img src="../assets/img/icon_zixunxiangqing_zan.png" /></dt>
				<dd>赞</dd>
			</dl>
			<dl id="share">
				<dt><img src="../assets/img/icon_zixunxiangqing_share.png" /></dt>
				<dd>分享</dd>
			</dl>
		</div>
		<div class="fabiao" onclick="pinglun();">
			<span>发表</span>
		</div>
	</footer>

	<!-- 回复 -->
	<footer id="footerH">
		<div class="inputBox">
			<input id="huifuInput" type="text" name="" placeholder="回复:" />
		</div>

		<div onclick="huifu();" class="fabiao subHuifu">
			<span>回复</span>
		</div>
	</footer>

	<footer id="footerMy">
		<button class="my_del">删除</button>
		<button class="my_txt">编辑</button>
		<button class="my_sub">发布</button>
	</footer>
  </div>
</template>

<script>
export default{
  data () {
    return {
      imglist: [],
      uptime: '',
      mid: '',
      comment: []
    }
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      let storage = window.localStorage
      this.mid = storage.getItem('uid')
      this.$http.get('http://peicentapi.demo.sclonsee.com/v1/news/detail', {params: { id: this.$route.params.id, member_id: this.mid }}).then(response => {
        this.imglist = response.data.data
        console.log(response.data.data)
      }, response => {
        alert(response)
      })
      this.$http.get('http://peicentapi.demo.sclonsee.com/v1/news/comment', {params: { id: this.$route.params.id, member_id: this.mid, page: 1 }}).then(response => {
        this.comment = response.data.data
        console.log(response.data.data)
      }, response => {
        alert(response)
      })
    }
  }
}
</script>

<style scoped>
.content{
	padding:.5rem;background: #fff;margin-bottom:.5rem;
}
.content > p:first-child{
	color: #333;font-size:.95rem;font-weight: 600;margin-bottom:1rem;
}
.content .info{
	display: flex;align-items: center;justify-content: space-between;
}

.content .info img{
	height:2rem;width: 2rem;border-radius:50%;margin-right:.5rem;
}
.content .infocon{
	display: flex;
}
.content .infocon > div > p{
	font-size:.6rem;
}
.content .infocon .mingcheng{
	color:#2AAFF1;padding-right:.3rem;border-right:1px solid #ccc;
	margin-right:.3rem;
}
.content .infocon .fbzmc{
	color:#FE6459;
}
.content .infocon > div > p:last-child{
	color: #828282;margin-top:.1rem;font-size: .5rem;
}
.content .infocon > div .isyu{
	display: inline-block;
	border: 1px solid #828282;
	border-radius:5px;padding:.05rem .2rem;margin-right:.3rem;
}

.delinformation{
	border:1px solid #eee;
  padding: 5px 15px;
  border-radius: 5px;
  background-color: #FE6459;
  color: #fff;
}

.content .btn{
	color:#FE6459;font-size:.6rem;text-align: center;
	display: inline-block;border:1px solid #FE6459;
	border-radius:4px;padding:.3rem 0;
	margin-left:.25rem;width:2.5rem;
}
.content .btn.active{
	background: #FE6459;color: #fff;
}
.content .imgtxt{
	margin-top:1rem;
}
.content .imgtxt img{
	display: block;
	max-width: 100%;margin:0 auto;margin-bottom:.5rem;
}
/*.imgtxt > p{
	font-size:.6rem;color:#999;text-align: right;margin-bottom:.25rem;
}*/
.imgtxt .xingqus a{
	font-size:.75rem;color:#2AAFF1;
}
.imgtxt .zanBox{
	padding:1.5rem 0;text-align:center;
}
.imgtxt .zanBox .zsh{
	background-color:#FE6459;font-size:.75rem;border:0;
	margin-bottom:.3rem;padding:5px 10px;display: inline-block;
  border-radius: 5px;color: #fff;
}
.weui-btn:after{
	border:0;
}
.imgtxt .zanBox > p{
	font-size: .6rem;color:#828282;
}
.imgtxt .zanBox > p span{
	color:#FE6459;
}

.imgtxt > .itBtm{
	display: flex;justify-content: space-between;font-size:.6rem;color:#828282;
}
.imgtxt > .itBtm > a{
	color: #828282;
}
.imgtxt > .itBtm span{
	margin-right:1rem;
}

/*内容区*/
#informations{
 	margin-top: 20px;
}
#informations p{
	color: #333;font-size: .75rem;margin:.2rem 0;
}
#informations img{
	width: 100%;margin:.3rem 0;
}
/*状物评论的时候*/
.comment-ul li{
	/*text-align: center;*/
}
/*评论区*/
.comment{
	padding-top: 0;border-bottom:1px solid #e0e0e0;
	background: #fff;
}
.comment .title{
	border-bottom:1px solid #e0e0e0;padding:.5rem .5rem;
	display: flex;justify-content: space-between;align-items: center;
}
.title > p{
	display: flex;align-items: center;
}
.title > p > span:first-child{
	display: inline-block;width:2px;height:.85rem;
	background:#FE6459;margin-right:.5rem;
}
.title > p > span:last-child{
	font-size: .8rem;color: #333;
}
.title a{
	font-size: .6rem;color:#828282;
}
.comment ul li{
	display: flex;
	padding:.5rem;
}
.comment ul li > img{
	height:2rem;width:2rem;border-radius:50%;
	margin-top:.25rem;margin-right:.5rem;
}
.comment ul li .liCon{
	flex: 1;
}
.comment ul li .liCon > p:first-child{
	display: flex;justify-content: space-between;
	padding:.5rem 0;
}
.liCon > p:first-child > span:first-child{
	font-size:.75rem;color:#828282;
}
.liCon > p:first-child > span:last-child{
	display: inline-block;
	padding-left:.9rem;color:#828282;font-size: .6rem;
	background: url(../assets/img/icon_pinglun_zan_gray.png) no-repeat left center;
	background-size:.7rem .65rem;line-height:1.2rem;
}
.liCon > .txt{
	font-size:.75rem;color: #333;
}
.liCon .smone{
	padding:.5rem 0;font-size:.75rem;color:#666;margin-top:.5rem;
	background:#f8f8f8;border-radius:5px;padding-left:.5rem;
}
.liCon .smone > a{
	color:#2AAFF1;
}
.liCon .timeBox{
	color: #828282;font-size:.5rem;margin-top:.5rem;
	display: flex;justify-content: space-between;
}
.liCon .timeBox > span:last-child{
	font-size:.6rem;margin-left:.55rem;
}
.downMore{
	display: block;
	width: 100%;padding:.5rem 0;text-align: center;
	border-radius:5px;border:0;outline: none;
	background:#fff;font-size:.75rem;
	color: #828282;margin-bottom:3rem;
}



footer{
	display: flex;align-items: center;
	position: fixed;bottom: 0;left: 0;border-top:1px solid #ccc;
    background: -webkit-linear-gradient(left, #FF9D5E , #FE6459);
    background: -o-linear-gradient(right, #FF9D5E, #FE6459);
    background: -moz-linear-gradient(right, #FF9D5E, #FE6459);
    background: linear-gradient(to right, #FF9D5E , #FE6459);
	height:2.5rem;width:calc(100% - 1rem);padding:0 .5rem;
}
footer .inputBox{
	background:#fff;border-radius:5px;padding-left:.5rem;
	flex: 1;
}
footer input{
	height:1.5rem;outline: none;resize:none;font-size:.6rem;
	line-height:1.5rem;border:0;padding-left:1rem;
	background:url(../assets/img/icon_pen.png) no-repeat left center;
	background-size:.65rem .65rem;color:#666;width: calc(100% - 1.5rem);
}
:-moz-placeholder {
    color: #ccc;
}

::-moz-placeholder {
    color: #ccc;
}

input:-ms-input-placeholder{
    color: #ccc;
}

input::-webkit-input-placeholder{
    color: #ccc;
}
footer .btnBox{
	width:30%;
	display: flex;justify-content: space-between;
}
.btnBox dl{
	width: 30%;
}
footer .btnBox img{
	height:.85rem;width:.85rem;
}
.btnBox dt{
	text-align: center;
}
.btnBox dd{
	text-align: center;font-size:.5rem;color: #fff;
}
.fabiao{
	font-size:.7rem;color:#fff;margin-left:.5rem;display: none;
}
#footerH{
	background:#fff;display: none;
}
#footerH > .inputBox{
	background:#f8f8f8;
}
#footerH > .fabiao{
	color:#FE6459;display: block;
}


/*个人看到的footer*/
#footerMy{
	display: flex;justify-content: space-between;
	padding:0;width: 100%;display: none;
}
#footerMy button{
	outline: none;background:#FE6459;width: 100%;border:0;
	height:100%;color:#fff;font-size:.75rem;
	border-right:1px solid #fff;
}
#footerMy button:last-child{
	border: 0;
}
.share{
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 15;
  text-align: right;
  display: none;
}
.share p{
  color: #fff;
  padding-right: 15px;
}

.allpsuh{
}
.zhe{
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: none;
}
.allpsuh-content{
    display: none;
    position: fixed;
    left: 0;
    bottom: 34px;
    z-index: 15;
    background-color: #fff;
    width: 100%;
    display: none;
    align-items: center;
    justify-content: center;
    padding-top: 1.5rem;
    padding-bottom: 1rem;
}
.allpsuh-content dl{
    flex:1;
    text-align: center;
    display: block;
}
.allpsuh-content dl img{
    width: 2.5rem;height: 2.5rem;
}
.allpsuh-content dl dd{
    color: #555;font-size:.7rem;
}
.allpush-del{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index: 15;
    padding-bottom: 15px;
    display: none;
}
.allpush-del img{
    display: block;
    margin: auto;
    width: 1rem;
    height: 1rem;
}
</style>
