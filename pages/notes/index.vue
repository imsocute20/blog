<template>
  <div>
    <h3>学习笔记</h3>
      <el-button size="small" @click="onAdd">添加</el-button>
      <el-divider></el-divider>
    <div class="form">
      <el-form v-if="isVisible" ref="form" :model="notes" label-width="80px" size="mini">
      <el-form-item label="标题">
        <el-input v-model="notes.name"></el-input>
      </el-form-item>
      <el-form-item label="文章类型">
        <el-select v-model="notes.value" placeholder="请选择">
          <el-option
            v-for="item in notes.type"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="notes.resource" size="medium">
          <el-radio border label="线上品牌商赞助"></el-radio>
          <el-radio border label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    </div>
    <!-- 用nuxt-link传参数 -->
    <nuxt-link to="/notes/aaa?a=1&b=2">笔记01</nuxt-link>
    <nuxt-link :to="{name:'notes-id',params:{id:2},query:{a:11,b:222}}">笔记03</nuxt-link>
    <nuxt-link :to="{name:'notes-id',params:{id:445},query:{a:1123,b:888}}">凑个数 </nuxt-link>
    <nuxt/>
    </div>
</template>

<script>
export default {
    data() {
    return {
      isVisible: false,
      notes: {
        name: '',
        date1: '',
        date2: '',
        type: [{
          value: '选项1',
          label: 'vue'
        }, {
          value: '选项2',
          label: 'javascript'
        }, {
          value: '选项3',
          label: 'css'
        }, {
          value: '选项4',
          label: 'ui-app'
        }, {
          value: '选项5',
          label: 'typescript'
        },{
          value: '选项5',
          label: 'nodejs'
        }],
        value: '',
        delivery: false,
        resource: '',
        desc: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
      this.isVisible = false;
    },
    onAdd() {
      this.isVisible = true;
    }
  }
}
</script>

<style>
.form{
  width: 500px;
}
</style>