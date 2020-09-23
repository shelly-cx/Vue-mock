<template>
	<div class="foot-btn" >
	<!-- <ul>
		  <router-link class="home" to="/home" tag="li" active-class="active"><a href="javascript:;"></a></router-link>
		  <router-link class="write" to="/shop" tag="li" active-class="active"><a href="javascript:;"></a></router-link>
		  <router-link class="my" to="/user" tag="li" active-class="active"><a href="javascript:;"></a></router-link>
		
	  </ul> -->
	  <van-tabbar v-model="active">
	    <van-tabbar-item name="home" icon="home-o" to="/home">首页</van-tabbar-item>
	    <van-tabbar-item name="search" icon="search" to="/search">查看</van-tabbar-item>
	    <van-tabbar-item name="friends" icon="friends-o" to="/user">我的</van-tabbar-item>
	    <van-tabbar-item name="setting" icon="setting-o" to="/setz">设置</van-tabbar-item>
	  </van-tabbar>
	 
	</div>
</template>

<script>
	export default{
		name:'Footer',
		props:{},
		data(){
			return{
				  active: 'home',
			}
		},
	components:{},
	mounted(){},
	updated(){},
	methods:{
		
	},
	}
</script>

<style>
	.foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
	.foot-btn ul{width:4.08rem; margin:0 auto;}
	.foot-btn ul li{ float:left;}
	.foot-btn ul li a{ display:block; width:100%;height:100%;}
	.foot-btn ul .home{width:0.44rem;height:0.63rem; background: url(../assets/img/home.png); background-size:100%; margin-top:0.2rem;}
	.foot-btn ul .write{width:0.82rem;height:0.81rem; background: url(../assets/img/write.png);  background-size:100%; margin-left:1.18rem;}
	.foot-btn ul .my{width:0.39rem;height:0.63rem; background: url(../assets/img/my.png); background-size:100%; margin-left:1.18rem; margin-top:0.17rem;}
</style>
 
