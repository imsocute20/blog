<template>
  <div>
    <h3>文章</h3>
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
      listData:[]
    }
  },
  created() {
  },
}
</script>

<style>
</style>