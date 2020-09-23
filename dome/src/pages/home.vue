<template>
	
	<div class="home pd-top">
		
		<banner class="banner" :data="banner" collectionName="detail"></banner>
	
	    <uc-input class="uc-i" v-model="ipt" placeholder="搜索"></uc-input>
		
		<div class="list">
			<uc-cell v-for="(item,index) of list" :key="item._id" :data="item" :index="index" collectionName="home"><span>12325346</span></uc-cell>
			
		</div>
		
	</div>
	
</template>

<script>
	
	import Banner from '../components/banner/banner.vue'
	import UcCell from '../components/uc-cell/uc-cell.vue'
	import UcInput from '../components/uc-input/index.vue'
	export default{
		name:'home',
		props:{},
		data(){
			return{
				ipt:'',
				banner:[
					// {_id:1,image:'/images/img_1.jpg',title:'xxx1',sub_title:'xxxx2'},
					// {_id:2,image:'/images/img_2.jpg',title:'xxx2',sub_title:'xxxx2'},
					// {_id:3,image:'/images/img_3.jpg',title:'xxx3',sub_title:'xxxx2'},
					// {_id:4,image:'/images/img_1.jpg',title:'xxx4',sub_title:'xxxx2'},
				],
				list:[
				// 	{_id:1,title:'xx1',des:'oo'},
				// 	{_id:2,title:'xx2',des:'oo'},
				// 	{_id:3,title:'xx3',des:'oo'},
				// 	{_id:4,title:'xx4',des:'oo'},
				// 	{_id:5,title:'xx4',des:'oo'},
				// 	{_id:6,title:'xx4',des:'oo'},
				// 	{_id:7,title:'xx4',des:'oo'},
				// 	{_id:8,title:'xx4',des:'oo'},
				// 	{_id:9,title:'xx4',des:'oo'},
				
				]
			}
		},
	components:{Banner,UcCell,UcInput},
	mounted(){
		this.$axios({
			url:'/api/home',
			params:{_limit:20,_page:1}
		}).then(res=>{
			this.list = res.data.data
			// console.log('res',res)
		})
		
		this.$axios({
			url:'/api/banner',
			params:{_limit:4,_page:1}
		}).then(res=>{
			this.banner = res.data.data
			// console.log('res',res)
		})
		
	},
	updated(){},
	methods:{},
	}
</script>

<style >
	.home{
		/* padding: 0.8rem 0; */
		}
	.list{
		padding: 0 0.34rem;
	}
	/* .min-img{width: 100%; height: 2.5rem;} */
	.banner{}
	.uc-i{ border: 1px solid #3D5886; width: 90%;margin: 0.4rem auto;height: 0.6rem;border-radius: 0.2rem;}
	
</style>
 
