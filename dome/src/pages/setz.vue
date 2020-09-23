<template>
	<div class="set">
		
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		  <van-swipe-item>1</van-swipe-item>
		  <van-swipe-item>2</van-swipe-item>
		  <van-swipe-item>3</van-swipe-item>
		  <van-swipe-item>4</van-swipe-item>
		</van-swipe>
		
		<div class="docList">
		  <ul>
		    <li class="gk-text">
		      <i></i>
		      <p>公开博文</p>
		      <b></b>
		      <span>0</span>
		    </li>
		    <li class="mm-text">
		      <i></i>
		      <p>秘密博文</p>
		      <b></b>
		      <span>0</span>
		    </li>
		    <li class="cg-text">
		      <i></i>
		      <p>草稿箱</p>
		      <b></b>
		      <span>0</span>
		    </li>
		    <li class="sc-text">
		      <i></i>
		      <p>收藏夹</p>
		      <b></b>
		      <span>0</span>
		    </li>
		    <li class="my_cz">
		      <i></i>
		      <p>设置</p>
		    </li>
		  </ul>
		</div>
		
		
	</div>
</template>

<script>
	export default{
		name:'set',
		props:{},
		data(){
			return{
				
			}
		},
	components:{},
	mounted(){
		this.$axios({
			url: '/api/user',
			
		}).then(res => {
			this.list = res.data.data
			// console.log('res',res)
		})
	},
	updated(){},
	methods:{},
	}
</script>

<style scoped>
	.set{}
	.docList{width:6.4rem; margin:0 auto; margin-top:0.32rem;}
	.docList ul li{ background:#fff;height:0.79rem; border-top:1px solid #7B9CD4; border-bottom:1px solid #7B9CD4;margin:0.5rem 0;}
	.docList ul li span{ float:right;margin-right:0.14rem; margin-top:0.26rem;}
	.docList ul li b{width:0.21rem;height:0.24rem; background:url(../assets/img/next_img.png) no-repeat 0 0; background-size:100%; float:right;margin-right:0.34rem; margin-top:0.28rem;}
	
	
	.docList ul .gk-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/gk_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
	.gk-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
	.docList ul .mm-text i{width:0.29rem;height:0.35rem; background:url(../assets/img/mm_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.32rem; margin-top:0.24rem;}
	.mm-text p{ float:left; font-size:0.25rem;margin-left:0.35rem; margin-top:0.25rem;}
	.docList ul .cg-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/cg_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
	.cg-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
	.docList ul .sc-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/sc_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
	.sc-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
	.docList ul .my_cz i{width:0.37rem;height:0.37rem; background:url(../assets/img/my_cz.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
	.my_cz p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
	
	 .my-swipe .van-swipe-item {
	    color: #fff;
	    font-size: 20px;
	    line-height: 150px;
	    text-align: center;
	    background-color: #39a9ed;

	}
</style>
 
