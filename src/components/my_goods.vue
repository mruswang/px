<template>
  <div>
    <scroller>
      <goods></goods>
    </scroller>
    <add></add>
  </div>
</template>

<script>
  import scroller from 'base/scroller'
  import goods from 'base/goods'
  import add from 'base/add'
  export default{
    components: {
      scroller, goods, add
    }
  }
</script>

<style scoped>
</style>
