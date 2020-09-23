<template>
  <div id="app">
    <h3>测试输入法</h3>
	
	<UcInput/>
	<uc-input v-model="ipt"></uc-input>
	<uc-input v-model="ipt" placeholder></uc-input>
	<input v-model="ipt2" type="password" label="密 码"></input>
	
  </div>
</template>


<script>
	import UcInput from '../components/uc-input'

export default {
  name: 'App',
  data(){
	  return{
		  ipt:'bmw',
		  ipt2:'k5',
	  }
  },
  components: {
	  UcInput
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
