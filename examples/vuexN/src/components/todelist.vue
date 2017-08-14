<template>
  <section>
    <mt-header fixed title="todoList"></mt-header>
    <div style="margin-top: 50px;">
      <mt-button @click="checkDay()" size="small" type="default">Yesterday</mt-button>
      <mt-button size="small" type="primary">Today</mt-button>
      <mt-button size="small" type="danger">Tormarrow</mt-button>
    </div>
    <router-view></router-view>
  </section>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui';
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
export default {
  data() {
    return {

    }
  },
  components: {
  },
  methods: {
    checkDay(e){
      this.$router.push('/list')        
    }
  }
}
</script>
<style lang="css">

</style>
