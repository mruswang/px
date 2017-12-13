<template>
  <div id="head">
    <header>
        <div>
            <div style="margin: 0 15px 0 0;">
              <x-button @click.native="showPopupPicker = true" >{{ address }}</x-button>
            </div>
            <group style="display: none">
              <popup-picker :show.sync="showPopupPicker" :show-cell="false" title="TEST" :columns="3" :data="list3" @on-change="onChange" ></popup-picker>
            </group>
            <div class="search">
                <a href="">
                    请输入想搜索的内容
                </a>
            </div>
        </div>

    </header>
  </div>
</template>
<script>
  import { PopupPicker, Group, Cell, Picker, XButton, Divider, XSwitch } from 'vux'

  export default {
    components: {
      PopupPicker,
      Group,
      Picker,
      XButton,
      Divider,
      Cell,
      XSwitch
    },
    methods: {
      onChange (val) {
        console.log('val change', val)
        this.address = val[3]
      }
    },
    data () {
      return {
        title4: '地址',
        list3: [{
          name: '中国',
          value: 'china',
          parent: 0
        }, {
          name: '美国',
          value: 'mei',
          parent: 0
        }, {
          name: '中国1',
          value: 'china1',
          parent: 'china'
        }, {
          name: '中国11',
          value: 'china11',
          parent: 'china1'
        }, {
          name: '中国111',
          value: 'china111',
          parent: 'china11'
        }, {
          name: '美国1',
          value: 'mei1',
          parent: 'mei'
        }, {
          name: '美国11',
          value: 'mei11',
          parent: 'mei1'
        }, {
          name: '美国111',
          value: 'mei111',
          parent: 'mei11'
        }],
        address: '...',
        showPopupPicker: false
      }
    }
  }
</script>


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
  .search{
    height:1.5rem;flex: 1;background:rgba(255,255,255,.8);
    border-radius: 3px;
  }
  .search a{
    display:block;width:calc(100% - 1.5rem);height: 100%;padding-left:1.5rem;
    background:url('../assets/img/icon_find.png') no-repeat .5rem center;
    background-size:.7rem .7rem;font-size:.65rem;color:#BDBDBD;
    line-height:1.5rem;
  }
    .weui-btn{
      padding-left: 5px;
      line-height: 20px;
    }
</style>
