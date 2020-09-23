<template>
  <div id="app">
	<loading v-show="$root.bLoading"/>
	<Header v-show="$root.bNav"/>
	<router-view/>    <!-- 展示区 -->
	<Footer v-show="$root.bFoot"/>
</div>
</template>


<script>
	import Header from './header.vue'
    import Footer from './footer.vue'
	import loading from '../components/loading.vue'
export default {
  name: 'App',
  data(){
	  return{
		  
	  }
  },
  watch:{
	  $route:{
		  handler(newVal){
			  let path = newVal.path;
			  if(/home|follow|column |search|no-page/.test(path)){
				  this.$root.bNav = true;
				  this.$root.bFoot = true;
			  }
			  if(/login|reg|detail|user/.test(path)){
				  this.$root.bNav = false;
				  this.$root.bFoot = false;
			  }
			  if(/user|setz/.test(path)){
			  	this.$root.bNav = false;
			  	this.$root.bFoot = true;
			  }
		  },
		  immediate:true
	  }
  },
  mounted(){

  },
  components: {
	Header,Footer,loading
  },
  methods:{
	 
  }
}
</script>

<style>

</style>
