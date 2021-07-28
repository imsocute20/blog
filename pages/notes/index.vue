<template>
  <div>
    <h3>学习笔记</h3>
    <!-- 用nuxt-link传参数 -->
    <nuxt-link to="/notes/aaa?a=1&b=2">笔记01</nuxt-link>
    <nuxt-link :to="{name:'notes-id',params:{id:2},query:{a:11,b:222}}">笔记03</nuxt-link>
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