<template>
  <div>
  <h2> {{title}} </h2>
  <pre>
    {{ Data }}
  </pre>
  </div>
    
</template>
<script>  
  export default {
    name: 'articleTest',
    data() {
      return {
        title: 'article',
        Data: '',
      };
    },
    props: [''],
    created() {
      // console.log(Mock);
      // this.loadDate();
      this.$http.get('/api/news').then((res) => {
        let arr  = JSON.parse(res.data.data)
        this.Data = arr.categorys
      })
    },
    methods: {

    },
  };
</script>
<style scoped>

</style>
