<template>
  <div>
    <section class="push" @click="add">
      <a href="javascript:;"><img src="../assets/img/icon_tjia_2x_sel.png" alt=""></a>
    </section>
  </div>
</template>

<script>
  export default{
    props: {
      url: '',
      default: String
    },
    methods: {
      add () {
        this.$router.push({ path: `/${this.url}` })
      }
    }
  }
</script>

<style scoped>
  .push{
    position: fixed;
    right: 10px;
    bottom: 80px;z-index: 4
  }
  .push a{
    display: block;
  }
  .push img{
    width: 2.2rem;
    height: 2.2rem;
  }
</style>
