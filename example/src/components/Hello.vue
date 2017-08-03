<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2></h2>
    <ul class="second">
      <li><a href="#" >vue-router</a></li>
      <li><a href="#" >vuex</a></li>
      <li><a href="#" >vue-loader</a></li>
      <li><a href="#" >awesome-vue</a></li>
    </ul>
    <h2> 请求接口获取的 数据输出 </h2>
    <ul class="datalist">
      <li v-for="item in listDate" :key="item">{{item.title}} </li>
    </ul>

    <h2> 请求MOCK接口获取的 数据输出 </h2>
    <ul class="datalist">
      <li v-for="item in mockDate" :key="item">'{{item.email}}' </li>
    </ul>


    <h2>bus控制状态</h2>
    <button @click="triggerBus">  bus控制状态 false</button>
    <button @click="triggerBus2"> bus控制状态 true</button>
    <hellobus> </hellobus>

    <h2>Vuex控制状态</h2>
    <hellovuex></hellovuex>
  </div>
</template>

<script>
  import fetch from '../utils/fetch';
  import hellobus from './HelloBus';
  import hellovuex from './HelloVuex';
  import bus from '../store/bus';


  export default {
    name: 'hello',
    data() {
      return {
        msg: 'PX2REM，router，vuex',
        listDate: '',
        mockDate: '',
      };
    },
    components: {
      hellobus,
      hellovuex,
    },
    //  数据请求
    created() {
      fetch.fetchGet('/api/news').then((re) => {
        console.log(re);
        this.listDate = re.data;
      });
    },
    methods: {
      triggerBus(e) {
        console.log(e);
        bus.$emit('busbus', 1);
      },
      triggerBus2(e) {
        console.log(e);
        bus.$emit('busbus2', 2);
      },
    },
    computed: {
    },
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  // @import ''
  .hello{
    font-size: 32px;
  }
  .second{
    width: 100%;
    height: 100px;
    line-height: 100px;
    background-color: #ededed;
  }

  .datalist{
    overflow: visible;
    font-size: 30px;
    text-align: left;
    li {
      margin-top: 20px;
    }
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  button{
    font-size: 40px;
    color: burlywood;
    background-color: #ededed;
    padding:5px 10px;
  }

  a {
    color: #42b983;
  }
</style>
