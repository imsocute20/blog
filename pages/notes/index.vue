<template>
  <div>
    <h3>学习笔记/手动写生成md文件,其他的页面显示</h3>
      <el-button size="small" @click="onAdd">添加</el-button>
      <el-divider></el-divider>
      <p>nuxt写的显示不成功我就html写算啦</p>
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
      id: 2,
    };
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
    }
  }
}
</script>

<style>
</style>