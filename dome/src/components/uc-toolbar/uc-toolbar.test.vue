<template>
  <div id="app">
    <h3>toolbar</h3>
	
	<uc-toolbar></uc-toolbar>

</div>
</template>


<script>
	import UcToolbar from '../components/uc-toolbar/uc-toolbar.vue'

export default {
  name: 'App',
  data(){
	  return{
		  ipt:'bmw',
		  ipt2:'k5',
	  }
  },
  components: {
	 UcToolbar
  },
  methods:{
	  show(eve){
		  console.log(eve)
	  }
  }
}
</script>

<style>

</style>
