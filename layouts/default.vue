<template>
<!-- 布局-->
<div class="blog-box">
  <div class="blog-header">
    <Nav></Nav>
  </div>
  <nuxt/>
  <div class="blog-footer">
    <p>
      @五条悟结婚了
      <a href="#" target="_blank">别想了点不开</a>
      (2018-2022) @和小虎
    </p>
    <nuxt-link to="/about"><span>关于我们|</span></nuxt-link>
    <nuxt-link to="/notes"><span>学习笔记|</span></nuxt-link>
    <nuxt-link to="/friends"><span>友情链接</span></nuxt-link>
  </div>
</div>
</template>
<script>
import Nav from "@/components/nav.vue";
export default {
  components:{ Nav }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.body{
  background-color: #f2f2f2;
}
.blog-box{
  /* width: 1140px; */
  width: 100%;
  margin: 0 auto;
}
.blog-header{
  margin-top: 10px;
  color: #737F90; 
}
.blog-footer{
  text-align: center;
  padding-bottom: 30px;
  color: #737F90;
}
.float-left{
  float: left;
  padding: auto;
  color: #737F90;
}
.float-right{
  float:right;
  color: #737F90;
}
</style>