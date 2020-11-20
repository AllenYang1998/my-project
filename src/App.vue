<template>
	<div id="app">
		<datav />
		<!-- 全屏容器 -->
		<!--
		<dv-full-screen-container>
			<top-header />
			<div id="nav">
				<router-link to="/">Home</router-link> |
				<router-link to="/about">About</router-link> |
				<router-link to="/load">Load</router-link>
			</div>
			<router-view />
		</dv-full-screen-container>
		-->
	</div>
</template>

<script>
import datav from './components/datav/index.vue'

export default {
  name: 'App',
  components: {
    datav
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
