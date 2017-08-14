<template>
  <div>
  <ul class="nav nav-pills">
    <li role="presentation" :class="{active:item.show}" @click="changeState(item.name)" v-for="item in mainL">
      <router-link :to="{query: { tab: item.url }}"> {{item.name}} </router-link>
    </li>
  </ul>
  </div>
</template>
<script>

  export default {
    name: 'mainLink',
    data(){
      return{
        mainL:[
          {
            name: '全部',
            url: 'all',
            show: true,
          },
          {
            name: '精华',
            url: 'good',
            show: false,
          },
          {
            name: 'weex',
            url: 'weex',
            show: false,
          },
          {
            name: '分享',
            url: 'share',
            show: false,
          },
          {
            name: '问答',
            url: 'ask',
            show: false,
          },
          {
            name: '招聘',
            url: 'job',
            show: false,
          },
        ],
        cacheD: '',
      };
    },
    computed() {
    },
    created() {
      this.cacheD = window.location.href.split('=')[1];
      this.changeState();
    },
    methods: {
      changeState(e){
        // this.cacheD = e;
        // console.log(this.cacheD)
        this.$data.mainL.map((k)=>{
          k.show = false;
          if (k.name ==  this.cacheD ){
            console.log(k.name)
            k.show = true;
          };
        });
      },
    },
  };

</script>
<style>

</style>
