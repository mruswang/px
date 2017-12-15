<template>
  <div>
    <scroller>
      <zixun></zixun>
    </scroller>
    <add :url="url"></add>
  </div>
</template>

<script>
  import scroller from 'base/scroller'
  import zixun from 'base/zixun'
  import add from 'base/add'
  export default{
    data () {
      return {
        url: 'push_imformation'
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
