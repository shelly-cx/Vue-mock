<template>
	<div class="uc-cell">
		<div @click="toDetial">
			<h2><span v-show="index != null">{{index+1}}.</span>{{data.title}}</h2>
			<p>{{data.des}}</p>
			<span class="times">{{data.time | date}}</span>
			<a class="cell__anchor" v-if="isAdd" href="javascript: ;" @click.stop="$emit('add-item',$even)">+</a>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'uc-cell',
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
 .uc-cell{position: relative;}
  .uc-cell:active {background: #ccc;}
  .uc-cell div { color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #5578B3;overflow: hidden;}
  .uc-cell div h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
  .uc-cell div p{margin-top:0.15rem;overflow:hidden;font-size: 16px;margin-bottom:0.15rem;}
  .cell__anchor{position:absolute;right:0.3rem;top:0.4rem;}
  .times{float: right;color:#5578B3; font-size: 16px;}
</style>

 
