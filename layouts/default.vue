<template>
<!-- 
  俺是布局作用
 -->
<div class="blog-box">
  <div class="blog-header">
    <div class="logo-box float-left">
      五条悟不小心成了我老婆的博客
    </div>
    <div class="nav-box float-right">
      <!-- 页面跳转 -->
      <nuxt-link to="/index">首页</nuxt-link>
      <nuxt-link to="/notes">学习笔记</nuxt-link>
      <nuxt-link to="/about">关于</nuxt-link>
      <nuxt-link to="/friends">点击就收获一个老婆</nuxt-link>
    </div>
  </div>
  <nuxt/>
  <div class="blog-footer">
    <p>
      @五条悟结婚了
      <a href="#" target="_blank">别想了点不开</a>
      (2018-2022) @问就是和小虎
    </p>
    <span><nuxt-link to="/about">关于我们|</nuxt-link></span>
    <span><nuxt-link to="/notes">学习笔记|</nuxt-link></span>
    <span><nuxt-link to="/friends">友情链接</nuxt-link> </span>
  </div>
</div>
</template>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.body{
  background-color: #f2f2f2;
}
.blog-box{
  width: 1140px;
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