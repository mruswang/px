<template>
  <div id="head">
    <header>
        <div>
            <popup-picker :title="title4" :data="list3" :columns="3" v-model="value4" show-name></popup-picker>
            <div>
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
  import { cityt } from 'common/js/city'

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
      },

      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
      }
    },
    data () {
      return {
        title4: '地址',
        list3: [],
        value4: [],
        showPopupPicker: false,
        formatDemoValue: ['01', '12'],
        format: function (value, name) {
          return `${value[0]}:${value[1]}`
        }
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
