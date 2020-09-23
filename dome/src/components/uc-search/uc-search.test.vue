<template>
  <div id="app">
    <h3>search组件测试</h3>
	
	<uc-search :data="{_id:3,title:'xx',des:'oo'}" collectionName="detail"></uc-search>
	<uc-search :data="{_id:3,title:'xx',des:'oo'}"></uc-search>
	<uc-search :data="{_id:3,title:'xx',des:'oo'}" isAdd @add-item="show"></uc-search>
	<uc-search :data="{_id:3,title:'xx',des:'oo'}" collectionName="detail" isAdd @add-item="show"></uc-search>
 
</div>
</template>


<script>
	import UcSearch from '../components/uc-search/uc-search.vue'

export default {
  name: 'App',
  data(){
	  return{
		  ipt:'bmw',
		  ipt2:'k5',
	  }
  },
  components: {
	  UcSearch
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
