<template>
  <div>
  <ul class="list-group">
    <li class="list-group-item" @click="toArticle('article')" v-for="item in listDate">
      <div class="container">
        <div class="row">
          <div class="col-md-1"><img alt="listimage" :src="item.author.avatar_url"/></div>
          <div class="col-md-1"><span>{{ item.reply_count }}</span><span>/</span><span>{{item.visit_count}}</span></div>
          <div class="col-md-1">
            <span v-if="item.top">置顶</span>
          </div>
          <div class="col-md-3">{{item.title}}</div>
          <div class="col-md-1"><img alt="listimage" :src="item.author.avatar_url" /></div>
          <div class="col-md-1"><span>{{item.last_reply_at}}</span></div>
        </div>
      </div>
    </li>
  </ul>
    <pagination :pageNumber="page" @communicatePage="updatePage"></pagination>
  </div>
</template>
<script>
import  dataServer  from '../utils/dataServer';
import pagination from './pagination.vue';
export default {
  name: 'listPage',
  data(){
    return {
      listDate: '',
      d: this.$route.query.tab || 'all',
      page : 1,
    };
  },
  components:{
    'pagination': pagination,
  },
  watch: {
    $route(to, from) {
      this.d = this.$route.query.tab;
      this.loadDate();
      this.page = 1;
    },
    page(vul, oldvalue){
      this.loadDate();
    },
  },
  computed(){
    this.loadDate();
  },
  created(){
    this.loadDate()
  },
  methods: {
    loadDate(){
//      console.log('99999999', this.d, this.page);
      dataServer
        .fetchDate( '/api/v1/topics?tab=' + this.d + '&page='+ this.page+ '&limit=10')
        .then( (responseText)=>{
          this.listDate= responseText.data;
          }, (reason)=>{
            console.log(reason);
          },
        );
    },
    updatePage(e){
      console.log('--p--', e);
      this.page = e;
    },
    toArticle(e){
      console.log(e);
      console.log(this.$router.push('article'))
    }
  },
};

</script>
<style scoped>
  img{
    width: 18px;
    height: 18px;
    vertical-align: middle;
  }
</style>


