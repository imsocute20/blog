<template>
  <div>
    <h3>学习笔记</h3>
    <el-button size="small" @click="onAdd">添加</el-button>
    <el-divider></el-divider>
    <h3>显示文章列表</h3>
    <el-card class="box-card">
      <div v-for="(note,index) in listData" :key="index" class="text item">
        <el-row type="flex" justify="space-between">
          <el-col :span="20">
            <el-button type="text" size="medium"><nuxt-link v-bind:to="'/notes/'+note.id">{{ note.title }}</nuxt-link></el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="text" size="medium" @click="editeNote"><i class="el-icon-edit"></i></el-button>
            <el-button type="text" size="medium" @click="deleteNoteVisible = true"><i class="el-icon-delete"></i></el-button> 
          </el-col>
        </el-row>
          <el-input type="textarea"  v-model="note.handbook" maxlength="30" show-word-limit disabled></el-input>
          <el-divider></el-divider>
      </div>
    </el-card>
    <el-dialog
      title="删除"
      :visible.sync="deleteNoteVisible"
      width="30%"
      center>
      <span>真的要删除宝贵的笔记吗?亲</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteNoteVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteNote">确 定</el-button>
      </span>
    </el-dialog>
    <nuxt/>
    </div>
</template>

<script>
export default {
    data() {
    return {
      listData: [],
      deleteNoteVisible: false
    };
  },
  created() {
    this.getNodeList();
  },
  methods: {
    getNodeList(){
        // 显示博客列表
    this.$http.get('https://chuwen-blog-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json?print=pretty').then(function(data){
      this.listData = data.body;
    //  for(let key  in lists){
    //    this.listData.push(lists[key])
    //    console.log(key)
    //    }
      }
     )
    },
    onAdd() {
      // this.isVisible = true;
      this.$router.push({
        name:'notes-add'
      })
    },
    //显示详情
    onClick() {
    },
    editeNote() {
      console.log("编辑");
      this.getId(this.id)
    },
    deleteNote(id) {
      console.log('删除');
      // this.deleteNoteVisible = true
      this.$http.delete('https://chuwen-blog-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json?print=pretty'+id)
      .then(function(data){
        this.$router.push(
          {
            path:'notes'
          })
          console.log(this.id);
          this.deleteNoteVisible = false
      })
    }
  }
}
</script>

<style>
.box-card{
  margin-bottom: 100px;
  width: 100%;
}
</style>