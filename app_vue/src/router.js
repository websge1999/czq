import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/Index'
import Details from './views/Details'
import Products from './views/Products'
import Login from './views/Login'
import NotFound from './views/NotFound'
import Register from './views/Register'
import Ranking from './views/Ranking'
//ES6

Vue.use(Router)

export default new Router({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home, children:[
        { path:"", component: Index },
        { path:"details", component: Details },       //商品详情
        { path:"products", component: Products },     //商品列表
        { path:"Ranking", component: Ranking },      //书籍排行
    ],             //Footer
  },
    { path: '/login', component: Login },           //登录
    { path: '/Register', component:Register },      //注册
    { path: '/*', component:NotFound },
  ]
})
