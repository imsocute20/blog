export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog',
    htmlAttrs: {
      lang: 'en'
    },
  // 当ssr设置为false的时候，自定义 Nuxt 加载图标
  // ssr: false,
  router:{
    middleware:'auth',
    // 扩展路由
    // 设置默认的路由地址为pages/index.vue而不是./
    extendRoutes(routes,resolve){
      console.log(routes);
      routes.push({
        name: 'home',
        path: '/index',
        component: resolve(__dirname,'pages/index.vue')
      })
    }
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name:"referrer", content: "no-referrer" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    { src: "mavon-editor/dist/css/index.css" }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/element-ui.js",
    { src: "~plugins/vue-markdown.js", ssr: false },
    '~plugins/vue-resource',
 ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/proxy'
  ],
  //跨域
   axios: {
     proxy: true,
     credentials:true,
   },
   proxy: {
     "/api": {
       changeOrigin: true,
       target: 'http://localhost:3001',//代理转发的地址
      //  pathRewrite: {
      //   '^/api': '/'
      // }
     }
   },
  //  定义系统默认loading效果,或者指定一个loading组件
  loading:{
    
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vender: [
      'vue-resource',
      'element-ui'
    ],
  }
}
