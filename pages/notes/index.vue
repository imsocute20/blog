import http from '~/http/';
<template>
  <div>
    <h3>学习笔记</h3>
    <el-button size="small" @click="onAdd">添加</el-button>
    <el-divider></el-divider>
    <h3>显示文章列表</h3>
    <el-card class="box-card">
      <div v-for="(item,index) in listData" :key="index" class="text item">
          <el-button type="text" size="medium" @click="onClick">{{ item.notes.title }}</el-button>
          <el-input type="textarea"  v-model="item.notes.handbook" maxlength="30" show-word-limit disabled></el-input>
          <el-divider></el-divider>
      </div>
    </el-card>
    <!-- 用nuxt-link传参数 写好非数字不可传参和跳转 -->
    <!-- <nuxt-link to="/notes/aaa?a=1&b=2">笔记01</nuxt-link>
    <nuxt-link :to="{name:'notes-id',params:{id:2},query:{a:11,b:222}}">笔记03</nuxt-link>
    <nuxt-link :to="{name:'notes-id',params:{id:445},query:{a:1123,b:888}}">凑个数 </nuxt-link> -->
    <nuxt/>
    </div>
</template>

<script>
export default {
    data() {
    return {
      id: 1,
      listData: []
    };
  },
  created() {
    this.$http.get('https://chuwen-blog-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?print=pretty').then(function(data){
     let lists = data.body
     for(let key  in lists){
       this.listData.push(lists[key])
      }
    })
  },
  methods: {
    onAdd() {
      // this.isVisible = true;
      this.$router.push({
        name:'notes-id',
        params:{
          id: this.$data.id
        }
      })
    },
    onClick() {
      console.log("查看文章");
      this.$router.push({
        name:'noteList',
        params:{
          id: this.$data.id
        }
      })
    }
  }
}
</script>

<style>
.box-card{
  margin-bottom: 100px;
}
</style>