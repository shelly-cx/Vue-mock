<template>
  <div id="app">
    <h3>测试按钮</h3>
	<UcButton/>
	<ucButton/>
	<uc-button text="登录"/>
	<uc-button bg-color="pink"/>
	
	<uc-button>注册</uc-button>
	<uc-button @click="show">点击</uc-button>
	
  </div>
</template>


<script>
	import UcButton from '../components/uc-button/uc-button.vue'

export default {
  name: 'App',
  components: {
	  UcButton
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
