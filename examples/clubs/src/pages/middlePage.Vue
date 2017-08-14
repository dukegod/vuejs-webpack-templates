<template>
  <section class="container">
    <div class="row">
      <div class="col-md-8">
        <section class="row">
          <router-view></router-view>
        </section>
      </div>
      <div class="col-md-4">
        <right-side></right-side>
      </div>
    </div>
  </section>
</template>
<script>
import rightSide from './rightSide.vue'
export default {
  name: 'middlePage',
  components:{
    'right-side': rightSide,
  }
};
</script>
<style>
  .col-md-8,
  .col-md-4{
    height: 100%;
    background-color: #dddddd;
  }
  .col-md-8{
    min-width: 600px;
  }
</style>
