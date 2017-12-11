<template>
  <div>
    <allhead></allhead>
    <lunbo :imglist='imglist'></lunbo>
    <div class="classify">
        <span><a href="./seat.html">社区订座</a></span><span><a href="./shops.html">乐享社区</a></span><span><a href="./activity.html">活动</a></span>
        <span class="down"><a href="./piazza.html">社区互助</a></span><span class="down"><a href="./organization.html">社区机构</a></span><span class="down"><a href="./guide.html">社区办事</a></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import allhead from 'base/head'
import lunbo from 'base/lunbo'
export default {
  data () {
    return {
      imglist: []
    }
  },
  created () {
    this.$http.get('http://peicentapi.demo.sclonsee.com/v1/index/ads', {position_id: 3, region_id:510107000, type: '', size: ''}).then(response => {
      //this.qiimg = response.data.data[0].thumb[0]

      this.imglist = response.data.data;
    }, response => {
      alert(response)
    })
  },
  components: {
    lunbo, allhead
  }
}
</script>
