<template>

	<div id="content">
		<div class="posit">
		<div id="c-head">
			<div id="header">
				<h2><img :src="$route.query.user.icon" alt="" /></h2>
				<div class="user-box">
					<a>{{$route.query.user.nikename}}</a>
					<a @click="logout">注销</a>
				</div>
				<ul class="clear">
					<li>
						<span>{{$route.query.user.follow}}</span>
						<p>关注</p>
					</li>
					<li>
						<span>{{$route.query.user.fans}}</span>
						<p class="end">粉丝</p>
					</li>
				</ul>
			</div>
		</div>
		<h2 class="sends">发布的文章</h2>
		<van-notice-bar scrollable text="近期发布的新文章..." />
		</div>
		<div class="list">
			<uc-cell v-for="(item,index) of list" :key="item._id" :data="item"  collectionName="home"><span></span></uc-cell>
		</div>
	</div>
	



</template>

<script>
	// import UcNav from '../components/uc-nav/assets/uc-nav.vue'
	import UcCell from '../components/uc-cell/uc-cell.vue'
	import axios from '../plugins/axios.js'
	export default {
		name: 'user',
		props: {},
		data() {
			return {
				// user:{},
				list: []
			}
		},
		beforeRouteEnter(to, from, next) {
			axios({
				url: '/api/user',

			}).then(
				// res=> res.data.err === 0 ? next(_this=>_this.user = res.data.data) : next('/login')
				res => {
					if (res.data.err === 0) {
						to.query.user = res.data.data
						next()
					} else {
						next('/login')
					}
				}
			)
		},

		components:{UcCell},
		mounted() {
			this.$axios({
				url: '/api/home',
				params: {
					_limit: 10,
					_page: 1
				}
			}).then(res => {
				this.list = res.data.data
				// console.log('res',res)
			})

		},
		updated() {},
		methods: {
			logout() {
				window.localStorage.removeItem('user')
				this.$router.push('/login')
			}
		},
	}
</script>

<style scoped>
	/* #content{} */
	#content #c-head {
		margin: 0 auto;	
		
	}

	#content #header {
		
		height: 2.84rem;
		background: #7B9CD4;
		padding-top: 0.4rem;
		overflow: hidden;
	}

	#header h2 {
		width: 1.02rem;
		height: 1.02rem;
		border-radius: 50%;
		margin: 0 auto;
	}

	#header h2 img {
		width: 100%;
	}

	#header .user-box {
		width: 1.14rem;
		font-size: 0.25rem;
		color: #fff;
		margin: 0 auto;
		margin-top: 0.2rem;
	}

	.user-box a {
		color: #fff;
	}

	#header ul {
		margin-top: 0.4rem;
	}

	#header ul li {
		width: 50%;
		height: 0.7rem;
		float: left;
		color: #fff;
	}

	#header ul li span {
		height: 0.37rem;
		line-height: 0.37rem;
		text-align: center;
		display: block;
		font-size: 0.25rem;
	}

	#header ul li p {
		text-align: center;
		font-size: 0.3rem;
		height: 0.32rem;
		line-height: 0.32rem;
		border-right: 1px solid #fff;
	}

	#header ul li p.end {
		border: 0;
	}

	.sends {
		height: 30px;
		color: #7B9CD4;
		text-align: center;
		
		line-height: 30px;
		background: white;
	}
	.posit{
		width: 100%;
		position: fixed;
		overflow: hidden;
		z-index: 5;
	}
	.list{
		padding-top: 4.5rem;
		padding-bottom: 0.8rem;
	}
</style>
