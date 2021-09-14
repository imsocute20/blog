<template>
  <div>
    <h3>{{listData.title}}</h3>
    <el-card class="box-card">
      <client-only>
      <mavon-editor class="mavonEditor"  :toolbars="markdownOption" v-model="title"/>
      </client-only>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:'',
      markdownOption:{
        navigation: true, // 导航目录
    },
      listData:{}
    }
  },
  created() {
    this.getId(this.$route.params.id);
  },
  methods:{
    getId(id){
      this.$http.get('https://chuwen-blog-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json?orderBy="id"print=pretty'+id).then(
        function(data){
          this.listData = data.body;
          console.log(data);
        }
      )
    },
  }
}
</script>

<style>
</style>