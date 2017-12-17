<template>
  <div>
    <ul class="uploader-img">
      <!--<li><img src="../assets/img/2@2x.png" alt=""><span></span></li>-->
      <!--<li><img src="../assets/img/2@2x.png" alt=""><span></span></li>-->
      <!-- <li><img src="../assets/img/2@2x.png" alt=""><span></span></li>
      <li><img src="../assets/img/2@2x.png" alt=""><span></span></li>
      <li><img src="../assets/img/2@2x.png" alt=""><span></span></li>
      <li><img src="../assets/img/2@2x.png" alt=""><span></span></li>
      <li><img src="../assets/img/2@2x.png" alt=""><span></span></li> -->
      <li class="uploader-box" :class="`box${name}`" @click="chose(`box${name}`)"></li>
    </ul>
  </div>
</template>

<script>
  import { XTextarea, Group, XInput } from 'vux'
  export default {
    data () {
      return {
        height: 200,
        i: 0
      }
    },
    props: {
      name: '',
      default: String
    },
    components: {
      XTextarea,
      Group,
      XInput
    },
    methods: {
      onEvent (event) {
        console.log('on', event)
      },
      chose (index) {
        console.log(index)
        this.$wechat.chooseImage({
          count: 9, // 默认9
          sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function (res) {
            let localIds = res.localIds
            this.uploadimgtowe(localIds, index)
          }
        })
      },
      uploadimgtowe (localIds, index) {
        let length = localIds.length
        this.upload(localIds, length)
      },
      upload (localIds, length) {
        if (localIds[this.i].indexOf('wxlocalresource') !== -1) {
          localIds[this.i] = localIds[this.i].replace('wxlocalresource', 'wxLocalResource')
        }
        this.$wechat.uploadImage({
          localId: localIds[this.i].toString(),
          success: function (res) {
            alert(res)
            // serverIdf+=res.serverId+'|';
//            var _html = '<li><img src='+localIds[i]+' alt='+res.serverId+'><span></span></li>'
//            $('.box'+index).parent().prepend(_html)
            this.i++
            if (this.i < length) {
              this.upload()
            }
          },
          fail: function (res) {
          }
        })
      }

    }
  }
</script>

<style scoped>
  .uploader-box{
    width: 77px;
    height: 77px;
    border: 1px solid #D9D9D9;
    position: relative;
  }
  .uploader-box:before {
    width: 2px;
    height: 39.5px;
  }
  .uploader-box:after {
    width: 39.5px;
    height: 2px;
  }
  .uploader-box:before, .uploader-box:after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #D9D9D9;
  }
  .uploader-img:after{
    content: ' ';
    display: block;
    clear: both;
    visibility:hidden;
    line-height: 0;
    height:0;
  }
  .uploader-img{
    background-color: #fff;
    padding: 10px 15px 0;
  }
  .uploader-img li{
    list-style: none;
    float: left;
    position: relative;
  }
  .uploader-img img{
    width: 77px;
    height: 77px;
    margin-right: 5px;
  }
  .uploader-img li span{
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
</style>
