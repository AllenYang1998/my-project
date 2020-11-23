<template>
	<div class="home">
		<div class="mc-top">
			<Top-Left-Cmp />
			<Top-Middle-Cmp />
			<Top-right-Cmp />
		</div>
		<div class="mc-bottom">
			<dv-border-box-6 class="bottom-left-container">
				<dv-decoration-4 class="mcb-decoration-1" style="width:5px;height:45%;" />
				<dv-decoration-4 class="mcb-decoration-2" style="width:5px;height:45%;" />
				<Bottom-Left-Chart-1 />
				<Bottom-Left-Chart-2 />
			</dv-border-box-6>

			<div class="bottom-right-container">
				<Bottom-Right-Table-1 />
				<Bottom-Right-Table-2 />
				<Bottom-Right-Table-3 />
				<Bottom-Right-Table-4 />
			</div>
		</div>
	</div>
</template>

<script>
	import TopLeftCmp from '../components/datav/TopLeftCmp.vue'
	import TopMiddleCmp from '../components/datav/TopMiddleCmp.vue'
	import TopRightCmp from '../components/datav/TopRightCmp.vue'
	import BottomLeftChart1 from '../components/datav/BottomLeftChart1.vue'
	import BottomLeftChart2 from '../components/datav/BottomLeftChart2.vue'
	import BottomRightTable1 from '../components/datav/BottomRightTable1.vue'
	import BottomRightTable2 from '../components/datav/BottomRightTable2.vue'
	import BottomRightTable3 from '../components/datav/BottomRightTable3.vue'
	import BottomRightTable4 from '../components/datav/BottomRightTable4.vue'
	export default {
		name: 'Home',
		components: {
			TopLeftCmp,
			TopMiddleCmp,
			TopRightCmp,
			BottomLeftChart1,
			BottomLeftChart2,
			BottomRightTable1,
			BottomRightTable2,
			BottomRightTable3,
			BottomRightTable4,
		}
	}
</script>

<style lang="less">
	.mc-top,
	.mc-bottom {
		box-sizing: border-box;
		padding: 15px;
		display: flex;
	}

	.mc-top {
		height: 30%;
	}

	.mc-bottom {
		height: 70%;
	}

	.top-left-cmp,
	.bottom-left-container {
		width: 32%;
	}

	.top-middle-cmp,
	.top-right-cmp {
		width: 34%;
	}

	.bottom-left-container {
		position: relative;

		.border-box-content {
			display: flex;
		}

		.mcb-decoration-1,
		.mcb-decoration-2 {
			position: absolute;
			left: 50%;
			margin-left: -2px;
		}

		.mcb-decoration-1 {
			top: 5%;
			transform: rotate(180deg);
		}

		.mcb-decoration-2 {
			top: 50%;
		}

		.bottom-left-chart-1,
		.bottom-left-chart-2 {
			width: 50%;
			height: 100%;
		}
	}

	.bottom-right-container {
		width: 68%;
		padding-left: 30px;
		box-sizing: border-box;
		display: flex;
	}
</style>
