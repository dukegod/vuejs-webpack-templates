<template>
  <button @click="add"> 增加 </button>
</template>

<script>
// import store from '../store/index';

export default {
  data() {
    return {

    }
  },
  components: {
  },
  methods: {
    add () {
      console.log(this);
      this.$store.dispatch('increment');
      // console.log(store);
    }
  }
}
</script>
<style lang="css">
  button{
    line-height: 1.5;
    background-color: #ccc;
    color: red;
  }
</style>
