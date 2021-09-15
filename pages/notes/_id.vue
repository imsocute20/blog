import { getNodeList } from '@api/http.js';
<template>
  <div>
    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="20">
          <h2>{{ note.title }}</h2>
      </el-col>
      <el-col :span="4">
        <el-button type="info" icon="el-icon-edit"  @click="editeNote"></el-button>
        <el-button type="info" icon="el-icon-delete" @click="deleteNoteVisible = true"></el-button> 
      </el-col>
    </el-row>
    <div class="box">
      <client-only>
      <mavon-editor class="mavonEditor" :navigation="true" :subfield = "false" :ishljs = "true" :toolbars="markdownOption" :defaultOpen = "'preview'" :value="note.handbook"/>
      </client-only>
    </div>
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
  </div>
</template>

<script>
export default {
  data(){
    return{
      deleteNoteVisible: false,
      title:'',
      markdownOption:{
        navigation: true
    },
      note: {}
    }
  },
  created() {
    this.getId(this.$route.params.id);
  },
  methods:{
    getId(id){
      this.$http.get('https://chuwen-blog-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json?'+id).then(
        function(data){
          this.note = data.body
          for(var key in this.note){
            if(id == this.note[key].id){
               this.note=this.note[key];
              console.log(this.note[key]);
            }
          }
        }
      )
    },
    editeNote() {
      console.log("编辑");
      this.getId(this.id)
    },
    deleteNote(id) {
      console.log('删除');
      // this.deleteNoteVisible = true
      this.$http.delete('https://chuwen-blog-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json?'+id)
      .then(function(data){
        this.getId(this.$route.params.id);
        this.$route.push({
          path: "notes"
        })
      })
      this.deleteNoteVisible = false
    }
  }
}
</script>

<style>
.box{
  width: 100%;
  height: 700px;
}
.mavonEditor{
  width: 100%;
  height: 100%;    
}
</style>