<template>
	<div class="nav">
		<ul>
			<router-link to="/home" tag="li" active-class="active"><a href="javascript:;">首页</a></router-link>
			<router-link to="/follow" tag="li" active-class="active"><a href="javascript:;">关注</a></router-link>
			<router-link to="/column" tag="li" active-class="active"><a href="javascript:;">栏目</a></router-link>
		
		</ul>
	
	</div>
</template>

<script>

	export default{
		name:'Header',
		props:{},
		data(){
			return{
				 
			}
		},
		components:{},
		  mounted(){},
		  updated(){},
		  methods:{}
		
	}
</script>

<style>
.nav{width:100%; position:fixed; top:0;left:0; z-index:2; background:#5578B3;}
.nav ul{width:4.38rem;height:0.8rem; margin:0 auto;}
.nav ul li{width:1.46rem;height:0.8rem; float:left;}
.nav ul li a{ display:block;width:1.46rem;height:0.8rem; line-height: 0.8rem; text-align:center; font-size:0.35rem; color:white;}
.nav ul li.active a{height:0.9rem; font-weight: bold;}

</style>
