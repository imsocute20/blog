<template>
  <div>
    <h1>注册</h1>
    <!-- 读取跨域数据 -->
    <h2></h2>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}){
      let res = await $axios({url:'http://localhost:3001/list'});
      console.log('读取的跨域资源',res.data.user1);
      return{
        id:res.data.user1.id,
        name:res.data.user1.name
      }
  }
}
</script>

<style>
</style>