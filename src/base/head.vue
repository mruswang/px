<template>
  <div id="head">
    <header>
        <div>
            <div style="margin: 0 15px 0 0;">
              <x-button @click.native="showPopupPicker = true" >{{ address }}</x-button>
            </div>
            <group style="display: none">
              <popup-picker ref="picker1" :show.sync="showPopupPicker" @on-hide="onhide" :show-cell="false" title="TEST" :columns="3" :data="chdudata" @on-change="onChange"></popup-picker>
            </group>
            <group style="display: none">
              <popup-picker ref="picker2" :show.sync="zshowPopupPicker" :show-cell="false" title="TEST" :columns="1" :data="children" @on-change="onChangea"></popup-picker>
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
  import { cityt } from 'common/js/chd'
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
    mounted () {
      setTimeout(() => {
        this.getchengdudata()
      }, 500)
    },
    methods: {
      onhide (val) {
        this.zaitype = val
        if (this.zaitype) {
          console.log(1)
          let cparentid = this.parentid
          console.log(cparentid)
          this.$http.get('http://peicentapi.demo.sclonsee.com/v1/index/area', {params: {parent_id: cparentid}}).then(response => {
            let childrendata = response.data.data
            console.log(childrendata)
            childrendata.map((item, index) => {
              this.children.push({
                name: item.label,
                value: item.value,
                parent: 0
              })
            })
            setTimeout(() => {
              this.zshowPopupPicker = true
            }, 500)
          }, response => {
            alert(response)
          })
        }
      },
      onChange (val) {
        console.log('val change', val)
        this.parentid = val[3]
        // let getNameValues = this.$refs.picker1.getNameValues().lastIndexOf(' ')
        // this.address = this.$refs.picker1.getNameValues().substr(getNameValues + 1)
      },
      onChangea (val) {
        console.log('val change', val)
        this.address = this.$refs.picker2.getNameValues()
      },
      getchengdudata () {
        this.chdudata = cityt
      }
    },
    data () {
      return {
        title4: '地址',
        chdudata: [],
        address: '...',
        showPopupPicker: false,
        zshowPopupPicker: false,
        zaitype: false,
        parentid: '',
        children: []
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
