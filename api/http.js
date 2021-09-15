
const api ={
    getNodeList(){
        // 显示博客列表
      this.$http.get('https://chuwen-blog-default-rtdb.asia-southeast1.firebasedatabase.app/notes.json?print=pretty').then(function(data){
        this.listData = data.body;
        }
       )
    },
}
export default api;