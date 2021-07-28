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
      let res1 = await $axios({url:'http://localhost:3001/list'});
      console.log('读取的跨域资源',res1.data.user1);
  }
}
</script>

<style>
</style>