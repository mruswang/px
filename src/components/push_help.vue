<template>
  <div class="push-imfo">
    <group gutter='0'>
      <group gutter='0' class="text">
        <x-textarea :max="300" ref="contenttext" :height="height" placeholder="请填写内容"></x-textarea>
      </group>
      <upload-img ref="contentimg"></upload-img>
      <checklist :options="commonList" v-model="radioValue" :max="1" @on-change="change"></checklist>
      <x-input title='悬赏金额' placeholder="请输入悬赏金额" required type="tel" :show-clear="true" placeholder-align="left"></x-input>
    </group>
    <footer>
      <section class="footer-button">
        <div class="save" bstatus="1">取消</div>
        <div class="push" bstatus="10" @click="push">发布</div>
      </section>
    </footer>
  </div>
</template>

<script>
  import { XTextarea, XInput, Group, XButton, Cell, PopupPicker, Picker, XSwitch, Checklist } from 'vux'
  import UploadImg from 'base/uploadimg'
  import { hasClass } from 'common/js/dom'
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
        commonList: [ '线上', '线下' ],
        radioValue: [''],
        items: 1,
        imglist: [],
        interest: [],
        inname: []
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
      }, 500)
    },
    methods: {
      change (value, label) {
        console.log('change:', value, label)
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
  .weui-cells.weui-cells_checkbox {
      margin-top: 0;
      display: flex;
  }
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
