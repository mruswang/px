<template>
  <div id="head">
    <header>
        <div>
            <span id="site">...</span>
            <div>
                <a href="">
                    请输入想搜索的内容
                </a>
            </div>
        </div>
    </header>
  </div>
</template>

<style type="text/css" scoped>
    #head{
    background: url('../assets/img/pic_index_bk.png') no-repeat center center;
    background-size: 100% 100%;
  }
  /*header样式*/
  header > div{
    display: flex;align-items: center;
    padding:.5rem .75rem;
  }
  header > div div{
    height:1.5rem;flex: 1;background:rgba(255,255,255,.8);
    border-radius: 3px;
  }
  header > div a{
    display:block;width:calc(100% - 1.5rem);height: 100%;padding-left:1.5rem;
    background:url('../assets/img/icon_find.png') no-repeat .5rem center;
    background-size:.7rem .7rem;font-size:.65rem;color:#BDBDBD;
    line-height:1.5rem;
  }
  header span{
    color:#fff;margin-right:.5rem;font-size:.7rem;
  }
</style>