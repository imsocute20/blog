<template>
  <div class="details">
    <div class="details-title">
      <el-row type="flex">
          <el-button type="text" icon="el-icon-back" size="medium" @click="onBack">文章管理</el-button>
          <el-input type="text" placeholder="请输入标题" v-model="notes.title" maxlength="10" show-word-limit>
          </el-input>
          <el-button type="primary" @click="isVisible = true">发布文章</el-button>
          <el-button>保存草稿</el-button>
      </el-row>
    </div>
    <div>
      <client-only>
        <mavon-editor class="mavonEditor" :ishljs="true" :toolbars="notes.markdownOption" v-model="notes.handbook"/>
      </client-only>
    </div>
      <el-dialog title="发布文章" :visible.sync="isVisible">
        <el-form v-if="isVisible" ref="form" :model="notes" label-width="80px" size="mini">
            <el-form-item label="标题">
              <el-input v-model="notes.title"></el-input>
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
           <el-form-item label="创作类型">
        <el-radio-group v-model="notes.resource" size="medium">
          <el-radio border label="原创"></el-radio>
          <el-radio border label="转载"></el-radio>
        </el-radio-group>
           </el-form-item>
           <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
           </el-form-item>
        </el-form>
        <el-divider></el-divider>
        <p>标题: {{ notes.title }}</p>
        <p>文章类型: {{ notes.value }}</p>
        <p>创作类型: {{ notes.resource }}</p>
      </el-dialog>
  </div>
</template>

<script>
export default {
  // 参数校验
   validate({params,query}){
    return /^\d+$/.test(params.id);
   },
   //
  data() {
    return {
    markdownOption:{
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        navigation: true, // 导航目录
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        subfield: true, // 单双栏模式
        preview: true, // 预览
    },
    isVisible: false,
    notes: {
      title: '',
      handbook:"# 这是标题",
      type: [{
        value: 'vue',
        label: 'vue'
      }, {
        value: 'javascript',
        label: 'javascript'
      }, {
        value: 'css',
        label: 'css'
      }, {
        value: 'ui-app',
        label: 'ui-app'
      }, {
        value: 'typescript',
        label: 'typescript'
      },{
        value: 'nodejs',
        label: 'nodejs'
      }],
      value: '',
      resource: '',
    },
    }
  },
  methods: {
    //返回刚刚的页面数据不用保存,可以添加弹出框
    onBack() {
      this.$router.back(-1);
    },
    onSubmit() {
      this.isVisible = true;
      this.$http.post('https://chuwen-blog-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
      {
        id: this.$route.params.id,
        notes: this.notes,
        markdownOption: this.markdownOption
      }).then(function(data){
        console.log(data);
        this.$router.push({
          name: 'notes-id-list'
        });
      })
    },
  }
}
</script>

<style>
.details-title{
  margin: 20px auto 20px;
}
.title-left{
  width: 50%;
}
.mavonEditor{
  width: 100%;
  height: 600px;
  margin-bottom: 10px;
}
.form{
  width: 500px;
}
</style>