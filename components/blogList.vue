<template>
  <div class="list">
    <el-card class="box-card">
        <div v-for="o in list" :key="o" class="text item">
            <h3>{{ list.title }}</h3>
            <p>{{ list.handbook }}</p>
            <el-divider></el-divider>
        </div>
</el-card>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
        this.$httpaxios.get("https://jsonplaceholder.typicode.com/posts",params)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
    }
}
</script>

<style>
.list{
    width: 100%;
}
</style>