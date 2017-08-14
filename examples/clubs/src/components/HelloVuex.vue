<template>
  <div id="app">
    <p> 通过vuex修改状态{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>
<script>
  import store from '../store/store';

  export default {
    // el: '#app',
    computed: {
      count() {
        return store.state.count;
      },
    },
    methods: {
      increment() {
        store.commit('increment');
      },
      decrement() {
        store.commit('decrement');
      },
    },
  };

</script>

<style scoped lang="less">
  button{
    font-size: 38px;
    color: black;
    margin-right: 40px;
    background-color: #ededed;
    padding:5px 10px;
  }
</style>

