<template>
  <div>
    <h1>获取跨域数据</h1>
    <!-- 读取跨域数据 -->
    <h2>
      {{this.id}}:{{this.name}}-{{this.age}}
    </h2>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}){
      let res = await $axios({
        url:'http://localhost:3001/list'});
      console.log('读取的跨域资源',res.data.user1);
      return{
        id:res.data.user1.id,
        name:res.data.user1.name,
        age:res.data.user1.age
      }
  }
}
</script>

<style>
</style>