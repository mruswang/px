<template>
  <div>
    <scroller>
      <store></store>
    </scroller>
    <add></add>
  </div>
</template>

<script>
  import scroller from 'base/scroller'
  import store from 'base/store'
  import add from 'base/add'
  export default{
    components: {
      scroller, store, add
    }
  }
</script>

<style scoped>
</style>
