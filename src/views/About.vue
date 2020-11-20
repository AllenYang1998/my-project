<template>
  <div class="about">
    <h1>This is an about page</h1>
	<dv-digital-flop :config="config" style="width:100px;height:50px;" />
	<dv-capsule-chart :config="config" style="width:300px;height:200px" />
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      config: {}
    }
  },
  mounted() {
	this.$http.post('http://127.0.0.1:8000/lp/hy/').then(response => {
		this.config = response['data']['data']
		console.log(response['data']['data'])
		// this.config['digitalFlopStyle']={fontSize: 10}
		// this.config['radius']= '60%'
		// this.config['activeRadius']= '70%'
	})   
  },
}	
</script>

<style>
</style>
