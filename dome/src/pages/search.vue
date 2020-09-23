 <template>
	<div class="search">
		<div class="listss">
			<uc-search v-for="(item,index) of list" :key="item._id" :data="item"  collectionName="home">
				<span></span>
				<!-- <div class="photo"><img :src="data.uphoto"/></div> -->
				</uc-search>
			
		</div>
	
		
	</div>
</template>

<script>
	import UcSearch from '../components/uc-search/uc-search.vue'
	export default{
		name:'search',
		props:{},
		data(){
			return{
				list:[
					// {_id:1,title:'xx1',des:'oo'},
					// {_id:2,title:'xx2',des:'oo'},
					// {_id:3,title:'xx3',des:'oo'},
					// {_id:4,title:'xx4',des:'oo'},
					// {_id:5,title:'xx4',des:'oo'},
					// {_id:6,title:'xx4',des:'oo'},
					// {_id:7,title:'xx4',des:'oo'},
					// {_id:8,title:'xx4',des:'oo'},
					// {_id:9,title:'xx4',des:'oo'},
				
				]
			}
		},
	components:{UcSearch},
	mounted(){
		this.$axios({
			url:'/api/home',
			params:{_limit:13,_page:1}
		}).then(res=>{
			this.list = res.data.data
			// console.log('res',res)
		})
	},
	updated(){},
	methods:{},
	}
</script>

<style>
	.listss{margin:0.8rem 0.34rem 0  0.34rem;}
	.search{margin-top: 0.8rem;padding-bottom: 53px;margin: 0.4rem auto;}
</style>
 
