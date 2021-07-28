<template>
  <div>
    <h1>学习笔记</h1>
    <!-- 用nuxt-link传参数 -->
    <nuxt-link to="/notes/1?a=1&b=2">笔记01</nuxt-link>
    <nuxt-link to="/notes/2?a=11&b=22">笔记02</nuxt-link>
    <nuxt-link :to="{name:'notes-id',params:{id:3},query:{a:1111,b:222}}">笔记03</nuxt-link>
    <nuxt-link :to="{name:'notes-id',params:{id:445},query:{a:1123,b:888}}">凑个数 </nuxt-link>
    <nuxt/>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>