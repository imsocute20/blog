<template>
<div class="nav-box">
    <div class="nav-header">
        <el-menu
         :default-active="activeIndex"  mode="horizontal" @select="handleSelect"
         >
         <el-menu-item>
           五条悟不小心成了我老婆的博客
        </el-menu-item>
        <el-menu-item  v-for="(item,index) of navs" :key="index" :index="index+''">
          {{item.title}}
        </el-menu-item>
        </el-menu>
    </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
     activeIndex:"-1",
     navs:[
       {path:'/home',title:'首页'},
       {path:'/notes',title:'学习笔记'}, 
       {path:'/about',title:'关于'},
       {path:'/frends',title:'点击就收获一个老婆'}
       ]
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        this.$router.push(this.navs[key].path);
        console.log(key, keyPath);
      }
  }
}
</script>
<style scoped>
.nav-header{
  margin-top: 10px;
  color: #737F90;
}
</style>