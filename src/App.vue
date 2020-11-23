<template>
	<div id="app">
		<!-- 全屏容器 -->
		<dv-full-screen-container>
			<top-header />
			
			<!-- <div id="nav">
				<router-link to="/">首页</router-link> |
				<router-link to="/about">About</router-link> |
				<router-link to="/load">Load</router-link>
			</div> -->
			
			<dv-border-box-1 class="main-content">
				<router-view />
			</dv-border-box-1>

		</dv-full-screen-container>
	</div>
</template>

<script>
	import topHeader from '@/components/datav/topHeader.vue'

	export default {
		name: 'App',
		components: {
			topHeader
		},
		data() {
			return {}
		},
		methods: {}
	}
</script>

<style lang="less">
	#app {
		width: 100%;
		height: 100%;
		background-color: #030409;
		color: #fff;

		#dv-full-screen-container {
			background-image: url('./components/datav/img/bg.png');
			background-size: 100% 100%;
			box-shadow: 0 0 3px blue;
			display: flex;
			flex-direction: column;
		}

		.main-content {
			height: calc(~"100% - 80px");
		}
	}

	#nav {
		// padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: white;
	}

	#nav a.router-link-exact-active {
		color: white;
	}
</style>
