<template>
  <section>
      <h1> 计时器 </h1>
      <add></add>
      <span> -------------</span>
      <min></min>

      <p>
        <h3> inital counter number </h3>
        <span> {{ initNum }} </span>
      </p>

      <p>
        <h3> checked by getters number </h3>
        <span> {{ initU }} </span>
      </p>

  </section>
</template>

<script>
import add from './add-c.vue';
import min from './min-c.vue';
// import store from '../store/index';


export default {
  data() {
    return {

    }
  },
  computed: {
    initNum() {
      return this.$store.state.count;
    },
    initU() {
      return this.$store.getters.addU;
    }
  },
  created () {
    console.log(this.$store.state.count);
  },
  components: {
    add,
    min
  },
  methods: {
  }
}
</script>
<style lang="css">
  span {
    font-size: 18px;
    color: black;
  }
</style>
