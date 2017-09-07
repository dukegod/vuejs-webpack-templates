<template>
  <button @click="reduce"> 减少 </button>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  components: {
  },
  methods: {
    reduce () {
      console.log(this);
      this.$store.commit('REDUCE');
    }
  }
}
</script>
<style lang="css">

</style>
