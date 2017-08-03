<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li  @click = "getPage(parseInt(p-1))">
        <span aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </span>
      </li>
      <li v-if="p == 1" @click = "getPage(item)" > <span>{{p}}</span> </li>
      <li v-else @click = "getPage(item)" v-for="item in parseInt(p+1)" ref="item"> <span>{{item}}</span> </li>
      <li  @click = "getPage(parseInt(p + 1))">
        <span aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </span>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    name: 'pagination',
    props: ['pageNumber'],
    data(){
      return{
        p : '1',
      };
    },
    computed(){
        this.p = this.pageNumber
    },
    methods:{
      getPage(e){
        this.p = e;
        this.$emit('communicatePage', e);
      }
    }
  }
</script>
<style scoped>

</style>
