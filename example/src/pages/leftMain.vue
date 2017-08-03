<template>
  <div>
    <main-link></main-link>
    <main-list></main-list>
  </div>

</template>
<script>
import mainLink from '../components/mainLink.vue'
import mainList from '../components/mainList.vue'

export default {
  name:'leftMain',
  components:{
    'main-link':mainLink,
    'main-list':mainList,
  }
}
</script>
<style>

</style>
