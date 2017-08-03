<template>
  <div id="app">
    <header-page></header-page>
    <middle-page></middle-page>
    <footer-page></footer-page>
  </div>
</template>

<script>
  import headerPage from './pages/headerPage';
  import footerPage from './pages/footerPage';
  import middlePage from './pages/middlePage';

  export default {
    name: 'app',
    components: {
      'header-page': headerPage,
      'footer-page': footerPage,
      'middle-page': middlePage,
    },
  };
</script>

<style>
  @import "./assets/css/app.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
