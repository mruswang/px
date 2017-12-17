<template>
  <div class="push-imfo">
    <group gutter='0'>
      <x-input placeholder="请输入资讯标题" required :show-clear="true" placeholder-align="left"></x-input>
    </group>
    <div v-for="(item,index) in items" :index="index+1">
      <group gutter='0' class="text">
        <x-textarea :max="300" ref="contenttext" :height="height" placeholder="请填写内容"></x-textarea>
      </group>
      <upload-img ref="contentimg" :name="index+1" ></upload-img>
    </div>
    <section class="addel" @click="add">
      <img src="../assets/img/icon_add@2x.png" alt="">
    </section>
    <section class="coverimg">
      <p class="tetx">封面图</p>
      <upload-img name="fen"></upload-img>
    </section>
    <section class="other-set">
      <p>其他设置</p>
      <group gutter='0'>
        <popup-picker title="所属兴趣" inline-desc="只能选择一个,未选择仅在个人主页展示" v-model="inname" :data="interest" :columns="1" show-name></popup-picker>
        <popup-picker title="所属城市" v-model="city" :data="chdudata" :columns="4" show-name ></popup-picker>
        <popup-picker title="所属社区" :inline-desc="`[${formatDemoValue}]`" v-model="formatDemoValue" :data="[['01','02','03']]" :display-format="format"></popup-picker>
        <x-switch title="开启赞赏" inline-desc="开启后可接收他人的赞赏" v-model="switch6"></x-switch>
        <checklist  :options="commonList" v-model="radioValue" :max="1" @on-change="change"></checklist>
        <x-input v-show="radioValue == '转载文章'" placeholder="请输入转载出处" required :show-clear="true" placeholder-align="left"></x-input>
      </group>
    </section>

    <footer>
      <section class="footer-button">
        <div class="save" bstatus="1">保存</div>
        <div class="push" bstatus="10" @click="push">发布</div>
      </section>
    </footer>
  </div>
</template>

<script>
  import { XTextarea, XInput, Group, XButton, Cell, PopupPicker, Picker, XSwitch, Checklist } from 'vux'
  import UploadImg from 'base/uploadimg'
  import { hasClass } from 'common/js/dom'
  import { cityt } from 'common/js/chd'
  export default{
    data () {
      return {
        height: 200,
        formatDemoValue: ['01'],
        formatValue: ['01'],
        format: function (value) {
          return `${value}`
        },
        switch6: false,
        commonList: [ '原创文章', '转载文章' ],
        radioValue: ['原创文章'],
        items: 1,
        imglist: [],
        interest: [],
        inname: [],
        chdudata: [],
        city: []
      }
    },
    components: {
      XTextarea,
      UploadImg,
      XInput,
      XButton,
      Group,
      Cell,
      PopupPicker,
      Picker,
      XSwitch,
      Checklist
    },
    created () {
    },
    mounted () {
      setTimeout(() => {
        this.gutinterest()
        this.getchengdudata()
        this.getinit()
      }, 500)
    },
    methods: {
      change (value, label) {
        console.log('change:', value, label)
      },
      getinit () {
        let _url = 'http://peicentapi.demo.sclonsee.com/v1/index/wx-config'
        // 获取配置的config
        let _url_ = window.location.href
        this.$http.get(_url, {params: {url: _url_}}).then(response => {
          let config = response.data.data
          this.$wechat.config(config)
        }, response => {
          alert(response)
        })
      },
      getchengdudata () {
        this.chdudata = cityt
      },
      gutinterest () {
        this.$http.get('http://peicentapi.demo.sclonsee.com/v1/news/news-interest').then(response => {
          let hotinterest = response.data.data
          hotinterest.map((item, index) => {
            this.interest.push({
              name: item.name,
              value: item.id,
              parent: 0
            })
          })
          console.log(this.interest)
        }, response => {
          alert(response)
        })
      },
      add () {
        console.log(this.items)
        this.items ++
      },
      push () {
        for (let i = 0; i < this.items; i++) {
          let imglist = this.$refs.contentimg[i].$vnode.elm.children[0].children
          let textlist = this.$refs.contenttext[i]._data.currentValue
          let imgerl = []
          for (let a = 0; a < imglist.length; a++) {
            if (!hasClass(imglist[a], 'uploader-box')) {
              imgerl.push(imglist[a].children[0].src)
            }
          }
          let obj = {
            id: i + 1,
            imgrul: imgerl,
            text: textlist
          }
          this.imglist.push(obj)
        }
        console.log(this.inname)
      }
    }
  }
</script>

<style scoped>
  .push-imfo{
    background-color: #f8f8f8;
  }
  .weui-cells.vux-no-group-title:before{
    border-top: none !important;
  }
  /*增加*/
  .addel{
    text-align: center;
    margin-top: 10px;
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .addel img{
    width:1.45rem;
    height: 1.45rem;
  }
  .coverimg>p{
    padding:10px 15px;
    font-size: 0.6rem;
    color: #999;
  }
  .other-set{
    background-color: #fff;
    margin-bottom: 90px;
  }
  .other-set>p{
    padding:10px 15px;
    font-size: 0.6rem;
    color: #999;
    background-color: #f8f8f8;
  }
  .weui-cell__bd{
    color: #333;
    font-size: 0.75rem;
  }
  .weui-cell__bd span{
    font-size: 0.5rem;
    color: #666;
  }
  .weui-cell__ft span{
    font-size: 0.7rem;
    color: #333;
  }
  .weui-switch{
    height: 25px;
  }
  .weui-switch:after{
    height: 23px;
  }
  .weui-cell_access .weui-cell__ft:after{
    width: 10px;
    height: 10px;
  }
  .weui-switch:checked{
    border-color: #FE6459;
    background-color: #FE6459;
  }
  .content-type{
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: #fff;
    /*margin-bottom: 60px;*/
  }
  .content-type-item{
    display: flex;
    align-items: center;
  }
  .content-type-item:first-child{
    margin-right: 50px;
  }
  .content-type-item p{
    font-size: 0.75rem;
    color: #333;
  }
  .content-type-icon{
    margin-right: 10px;
  }
  .content-type-icon span{
    border:1px solid #999;
    width: 16px;
    height: 16px;
    display: block;
    border-radius: 5px;
  }
  .active{
    background-image: url('../assets/img/icon_gx_2x.png');
    background-repeat: no-repeat;
    background-color: #FB6048;
    border:1px solid #FB6048 !important;
  }
  footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 15
  }
  .footer-button{
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color: #fff;
  }
  .save{
    flex: 1;
    background-color: #CCCCCC;
    color: #fff;
    margin-right: 10px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
  }
  .push{
    flex: 2;
    background-color: #FE6459;
    color: #fff;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
  }
</style>
