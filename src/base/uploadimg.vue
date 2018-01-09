<template>
  <div>
    <ul class="uploader-img">
      <li v-for="(item,index) in imglist"><img :src="item" alt=""><span @click="del(index)"></span></li>
      <!--<li><img src="../assets/img/2@2x.png" alt=""><span></span></li>-->
      <!-- <li><img src="../assets/img/2@2x.png" alt=""><span></span></li>
      <li><img src="../assets/img/2@2x.png" alt=""><span></span></li>
      <li><img src="../assets/img/2@2x.png" alt=""><span></span></li>
      <li><img src="../assets/img/2@2x.png" alt=""><span></span></li>
      <li><img src="../assets/img/2@2x.png" alt=""><span></span></li> -->
      <li class="uploader-box">
        <input type="file" name="file" ref="file" value=""  multiple @change="imgChange" />
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        imglist: []
      }
    },
    methods: {
      imgChange () {
        let file = this.$refs.file
        let fileList = file.files
        for (var i = 0; i < fileList.length; i++) {
          let imgUrl = window.URL.createObjectURL(fileList[i])
          this.imglist.push(imgUrl)
        }
      },
      del (index) {
        this.imglist.splice(index, 1)
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
  .uploader-box input{
    width: 77px;
    height: 77px;
    display: block;
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
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
    transform: rotate(0deg);
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
