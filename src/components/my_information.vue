<template>
  <div>
    <scroller>
      <zixun :fromindex="fromindex"></zixun>
    </scroller>
    <add :url="url" ></add>
  </div>
</template>

<script>
  import scroller from 'base/scroller'
  import zixun from 'base/zixun'
  import add from 'base/add'
  export default{
    data () {
      return {
        url: 'push_imformation',
        fromindex: 'mine'
      }
    },
    components: {
      scroller, zixun, add
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>
