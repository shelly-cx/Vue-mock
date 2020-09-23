import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/home.vue'
import Follow from '../pages/follow.vue'
import Column from '../pages/column.vue'
import Detail from '../pages/detail.vue'
import User  from '../pages/user.vue'
import Login from '../pages/login.vue'
import reg from '../pages/reg.vue'
import Search from '../pages/search.vue'
import Setz from '../pages/setz.vue'
import NoPage from '../pages/no-page.vue'


let routes=[
	{path:'/home',component:Home},
	{path:'/follow',component:Follow},
	{path:'/column',component:Column},
	{path:'/detail/:_id',component:Detail,name:'detail'},
	{path:'/user',component:User},
	{path:'/login',component:Login},
	{path:'/Reg',component:reg},
	{path:'/Search',component:Search},
	{path:'/Setz',component:Setz},
	{path:'/',redirect:'/home'},
	{path:'*',component:NoPage},
];

let router = new VueRouter({
	routes,
});
export default router;