
export default function({$axios,redirect,route,store}){
    //基本配置
    $axiosaxios.defaults.timeout=10000;
    //请求拦截
    $axios.onRequest(config => {
        console.log('请求拦截 ' + config.url);
        return config;
    })
    //
    onResponse(res => {
        // if(res.data.user1.id === 1 && route.fullPath !== '/index'){
        //     redirect('/index?path='+route.fullPath);
        // }
        return res;
    })
    //错误处理
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
          redirect('/400')
        }
    })

    
}