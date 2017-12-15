<template>
  <div class="push-imfo">
    <section class="content">
      <group>
        <x-input placeholder="请输入资讯标题" required :show-clear="true" placeholder-align="left"></x-input>
      </group>
      <div v-for="(item,index) in items" :index="index+1">
        <group class="text">
          <x-textarea :max="500" :height="height" placeholder="请填写内容"></x-textarea>
        </group>
        <upload-img :ref="`contentimg${index+1}`"></upload-img>
      </div>
    </section>
    <section class="addel" @click="add">
      <img src="../assets/img/icon_add@2x.png" alt="">
    </section>
    <section class="coverimg">
      <p class="tetx">封面图</p>
      <upload-img></upload-img>
    </section>
    <section class="other-set">
      <p>其他设置</p>
      <group>
        <popup-picker title="所属兴趣" inline-desc="只能选择一个,未选择仅在个人主页展示" v-model="formatDemoValue" :data="[['01','02','03']]" :display-format="format"></popup-picker>
      </group>
      <group>
        <popup-picker title="所属城市" :inline-desc="`[${formatDemoValue}]`" v-model="formatDemoValue" :data="[['01','02','03']]" :display-format="format"></popup-picker>
      </group>
      <group>
        <popup-picker title="所属社区" :inline-desc="`[${formatDemoValue}]`" v-model="formatDemoValue" :data="[['01','02','03']]" :display-format="format"></popup-picker>
      </group>
      <group>
        <x-switch title="开启赞赏" inline-desc="开启后可接收他人的赞赏" v-model="switch6"></x-switch>
      </group>
      <checklist  :options="commonList" v-model="radioValue" :max="1" @on-change="change"></checklist>
      <group v-show="radioValue =='转载文章'">
        <x-input placeholder="请输入转载出处" required :show-clear="true" placeholder-align="left"></x-input>
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
  export default{
    data () {
      return {
        height: 200,
        formatDemoValue: ['01'],
        format: function (value, name) {
          return `${value[0]}`
        },
        switch6: false,
        commonList: [ '原创文章', '转载文章' ],
        radioValue: ['原创文章'],
        items:1
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
    methods: {
      change (value, label) {
        console.log('change:', value, label)
      },
      add () {
        console.log(this.items)
        this.items ++
      },
      push () {
        console.log(this.$refs.contentimg1[0].$vnode.elm.children[0].children)
      }
    }
  }
</script>

<style scoped>
  .push-imfo{
    background-color: #f8f8f8;
  }
  .title{
    padding:.5rem .75rem 0;
    background-color: #fff;
  }
  .title input{
    width: 100%;
    border:none;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  .title input::placeholder{
    font-size: 0.8rem;
    color: #999;
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
