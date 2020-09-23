<template>
	<div class="uc-search">
		<div @click="toDetial">
			<h2>{{data.detail.auth}}</h2>
			<p>{{data.title}}</p>
			<img class="photo" :src="data.uphoto" />
			<a class="search__anchor" v-if="isAdd" href="javascript: ;" @click.stop="$emit('add-item',$even)">+</a>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'uc-search',
		props:{
			data:{
				type:Object,
				required:true
			},
			collectionName:{
				type:String,
				default:null
			},
			index:{
				type:Number,
				type:null
			},
			isAdd:{//是否有添加
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				
			}
		},
	components:{},
	mounted(){},
	updated(){},
	methods:{
		toDetial(){
			if(this.collectionName){
			  this.$router.push(`/detail/${this.data._id}?collectionName=${this.collectionName}`)
			}
		}
	},
	}
</script>

<style scoped>
 .uc-search{position: relative;}
  .uc-search:active {background: #5578B3;}
  .uc-search div { color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #5578B3;overflow: hidden;}
  .uc-search div h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
  .uc-search div p{margin-top:0.15rem;overflow:hidden;font-size: 16px;;}
  .photo{width: 60px;height: 60px; border-radius: 50px; position: absolute;right: 0.3rem;bottom: 0.2rem;}
  .search__anchor{position:absolute;right:0.3rem;top:0.4rem;}
  .times{float: right;color:#5578B3; font-size: 16px;}
</style>

 
