<template>
  <div class="details">
    <div class="details-title">
        <!-- 添加页面post数据到数据 -->
      <el-row type="flex" v-if="addVisible">
          <el-button type="text" icon="el-icon-back" size="medium" @click="onBack">文章管理</el-button>
          <el-input type="text" placeholder="请输入标题" v-model="note.title" maxlength="10" show-word-limit>
          </el-input>
          <el-button type="primary" @click="isVisible = true">发布文章</el-button>
          <el-button>保存草稿</el-button>
      </el-row>
    </div>
    <div v-if="addVisible">
      <client-only>
        <mavon-editor class="mavonEditor" :ishljs="true" :toolbars="markdownOption" v-model="note.handbook"/>
      </client-only>
    </div>
      <el-dialog title="发布文章" :visible.sync="isVisible">
        <el-form v-if="isVisible" v-on:submit="note" label-width="80px" size="mini">
            <el-form-item label="标题">
              <el-input v-model="note.title"></el-input>
            </el-form-item>
            <el-form-item label="文章类型">
        <el-select v-model="note.value" placeholder="请选择">
          <el-option
            v-for="item in notes.type"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
            </el-form-item>
           <el-form-item label="创作类型">
        <el-radio-group v-model="note.resource" size="medium">
          <el-radio border label="原创"></el-radio>
          <el-radio border label="转载"></el-radio>
        </el-radio-group>
           </el-form-item>
           <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
           </el-form-item>
        </el-form>
      </el-dialog>
  </div>
</template>

<script>
export default {
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
    notes: {
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
    },
    note: {},
    addVisible: true,
    isVisible: false,
    }
  },
  methods: {
    //返回刚刚的页面数据不用保存,可以添加弹出框
    onBack() {
      this.$router.back(-1);
    },
    onSubmit() {
      this.isVisible = true;
      if(!this.note.title||!this.note.value||!this.note.resource||!this.note.handbook)
      {
        console.log("必填选项没有填写");
      }else{
        let newNote = {
            title: this.note.title,
            handbook: this.note.handbook,
            value: this.note.value,
            resource: this.note.resource
        }
        this.$http.post('https://chuwen-blog-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json',newNote).then(function(data){
        console.log(data);
        this.$router.push({
          name: 'notes'
        });
      })
      }
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