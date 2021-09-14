<template>
  <div>
    <h3>{{note.title}}</h3>
    <el-card class="box-card">
      <client-only>
      <mavon-editor class="mavonEditor"  :toolbars="markdownOption" v-model="note.handbook"/>
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
      note: {}
    }
  },
  created() {
    this.getId(this.$route.params.id);
  },
  methods:{
    getId(id){
      this.$http.get('https://chuwen-blog-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json?').then(
        function(data){
          let listDate = data.body
          for(var key in listDate){
            if(data.body.id === this.$route.params.id){
              console.log(listData[key]);
              this.note.push(listData[key])
            }
          }
        }
      )
    },
  }
}
</script>

<style>
</style>