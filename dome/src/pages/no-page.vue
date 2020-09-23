<template>
	<div class="no-page">
	
		<router-link to="/home"><h3>未找到该文件</h3></router-link>
		<img src="../assets/img/hall-class-3.jpg"/>
		<img src="../assets/img/hall-class-2.jpg"/>
	</div>
</template>

<script>
	
	export default{
		name:'no-page',
		props:{},
		data(){
			return{
				
			}
		},
	components:{},
	mounted(){},
	updated(){},
	methods:{},
	}
</script>

<style>
	.no-page{padding-top: 0.8rem;}
	.no-page h3{font-size: 24px;text-align: center;color: brown;}
</style>
 
