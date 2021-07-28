<template>
    <div class="container">
    <h1 v-if="error.statusCode">{{ error.massage }}</h1>
    <h1 v-else> 应用发生错误异常 </h1>
    <!-- <nuxt-link to="/index">首页</nuxt-link> -->
    <!-- <button @click="$router.replace('/index')">首页</button> -->
    </div>
</template>

<script>
export default {
    //接受错误信息 error:{statuscode,message}
    props: ['error']
}
</script>

<style>
.container{
    margin-top: 100px;
}
</style>