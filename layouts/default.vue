<template>
<!-- 俺是布局作用 -->
<div class="blog-box">
  <div class="blog-header">
    <div class="logo-box">
      五条悟不小心成了我老婆的博客
    </div>
    <div class="nav-box">
      <!-- 页面跳转 -->
      <nuxt-link to="/">首页</nuxt-link>
      <nuxt-link to="/notes">学习笔记</nuxt-link>
      <nuxt-link to="/login">友情链接</nuxt-link>
      <nuxt-link to="/registe">点击就收获一个老婆</nuxt-link>
    </div>
  </div>
  <nuxt/>
</div>
</template>
<style scoped>
.body{
  background-color: #f2f2f2;
}
.blog-box{
  width: 1140px;
  margin: 0 auto;
}
</style>