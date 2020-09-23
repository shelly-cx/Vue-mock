<template>
	<div class="follow">
		
		<!-- <h3>follow</h3> -->
		<div class="list">
			<uc-cell v-for="(item,index) of list" :key="item.id" :data="item" :index="index" collectionName="follow"></uc-cell>
		</div>
	
	</div>
</template>

<script>
	
	import UcCell from '../components/uc-cell/uc-cell.vue'
	export default{
		name:'follow',
		props:{},
		data(){
			return{
				
				list:[
					// {_id:1,title:'xx1',des:'oo'},
					// {_id:2,title:'xx2',des:'oo'},
					// {_id:3,title:'xx3',des:'oo'},
					// {_id:4,title:'xx4',des:'oo'}
				]
			}
		},
	components:{UcCell},
	mounted(){
		this.$axios({
		  url:'/api/home',
		  params:{_limit:20,_page:1}
		}).then(
		  res => this.list = res.data.data
		)
		
	},
	updated(){},
	methods:{},
	}
</script>

<style>
	.follow{padding: 0 0.34rem;margin-top: 0.7rem;padding-bottom: 53px;}
	/* .list{
		padding: 0 0.34rem;
	} */
	
</style>
 
