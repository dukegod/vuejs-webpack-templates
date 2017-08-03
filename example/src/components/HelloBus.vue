<template>
  <div class="pop">
    通过bus控制状态 {{isShow}}
  </div>
</template>
<script>
  import bus from '../store/bus';

  export default {
    data() {
      return {
        isShow: true,
      };
    },
    created() {
      bus.$on('busbus', (e) => {
        console.log(e);
        if (e === 1) {
          this.isShow = false;
        }
      });
      bus.$on('busbus2', (e) => {
        console.log(e);
        if (e === 2) {
          this.isShow = true;
        }
      });
    },
  };
</script>

<style scoped lang="less">
  .pop{
    background-color: #dddddd;
    text-align: center;
  }
</style>
