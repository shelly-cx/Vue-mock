<template>
  <div id="app">
    <h3>cell组件测试</h3>
	
	<uc-cell :data="{_id:3,title:'xx',des:'oo'}" :index="0" collectionName="detail"></uc-cell>
	<uc-cell :data="{_id:3,title:'xx',des:'oo'}"></uc-cell>
	<uc-cell :data="{_id:3,title:'xx',des:'oo'}" isAdd @add-item="show"></uc-cell>
	<uc-cell :data="{_id:3,title:'xx',des:'oo'}" collectionName="detail" isAdd @add-item="show"></uc-cell>
 
</div>
</template>


<script>
	import UcCell from '../components/uc-cell/uc-cell.vue'

export default {
  name: 'App',
  data(){
	  return{
		  ipt:'bmw',
		  ipt2:'k5',
	  }
  },
  components: {
	  UcCell
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
