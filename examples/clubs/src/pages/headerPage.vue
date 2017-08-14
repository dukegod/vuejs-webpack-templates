<template>
  <div class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          <img alt="Vue" src="#">
        </a>
      </div>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search" >
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li v-for="(k, value) in topNav">
          <a @click='judgeUrl(k)'>{{value}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headerPage',
    data(){
      return {
        topNav :{
          '首页':'/',
          '未读消息':'/',
          '参考资料':'/',
          'API':'/api',
          '关于':'/about',
          '设置':'/setting',
          '退出':'/login',
        }
      }
    },
    methods: {
      judgeUrl (url) {
        let _self = this
        _self.$router.push(url)
      }
    }

  };
</script>

<style scoped lang="less">
  .navbar-right a{
    font-size: 36px;
  }
</style>
