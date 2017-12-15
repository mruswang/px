<template>
  <div>
    <section class="content">
      <div class="text">
        <textarea id="tuiCon" rows="3" cols="20" placeholder="请输入您要推广的内容，后台收到后会有专人与您联系~"></textarea>
      </div>
    </section>

    <section class="other-set">
      <div class="other-set-item">
        <p>联系电话</p>
        <div class="other-set-item-text">
          <input id="phone" type="number" placeholder="请输入联系电话">
        </div>
      </div>
    </section>
    <footer>
      <section class="footer-button">
        <div class="push">提交</div>
      </section>
    </footer>
  </div>
</template>

<script>
</script>

<style scoped>
  .content{
    border-bottom: 1px solid #eee;
  }
  .text{
    border-top: 1px solid #ddd;
    padding:.5rem .75rem;background: #fff;
  }
  .text > textarea{
    outline: none;resize: none;width: 100%;
    height:10rem;border:0;font-size: .7rem;
  }
  .text > textarea::placeholder{
    font-size: 0.6rem;
    color: #999;
  }

  /*其他设置*/
  .other-set{
    background-color: #fff;
    margin-top: 10px;
    padding: 0 15px;
    margin-bottom: 50px;
  }
  .other-set-item{
    display: flex;
    align-items: center;
    background-color: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .other-set-item:first-child{
    border-bottom: 1px solid #eee;
  }
  .other-set-item>p{
    margin-right: 20px;
    font-size: 0.75rem;
    color: #333;
  }
  .other-set-item>div{
    flex: 1;
  }
  .other-set-item>p{
    flex: 0 0 60px;
    width: 60px;
  }
  .other-set-item-text input{
    width: 90%;
    border: none;
    padding-top: 10px;
    padding-bottom: 10px;
  }


  footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width:100%;
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
