<template>
  <div class="details">
      <h1>
          详情页
      </h1>
  </div>
</template>

<script>
export default {
  // 参数校验
   validate({params,query}){
    return /^\d+$/.test(params.id);
   }
}
</script>

<style>

</style>