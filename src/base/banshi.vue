<template>
  <div>
    <div class="dothing" :class="{'nobottom': fromindex === 'jigou'}">
      <a href="javascript:;" v-for="(item,index) in data">{{item.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    fromindex: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .dothing{
    padding:.5rem;background: #fff;margin-bottom: .5rem;margin-bottom: 60px;
  }
  .nobottom{
    margin-bottom: 0;
  }
  .dothing > a{
    color:#2AB0F1;font-size:.75rem;height:2.5rem;display: block;
    width: calc(100% - 1rem);border:1px solid #2AB0F1;overflow: hidden;text-overflow:ellipsis; white-space:nowrap;
    border-radius:5px;margin-bottom:.5rem;line-height: 2.5rem;padding:0 .5rem;
  }
</style>
