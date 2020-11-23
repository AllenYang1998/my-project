<template>
	<div class="top-middle-cmp">
		<div class="chart-name">
			<!-- 总有功功率月趋势 -->
			{{title}}
			<dv-decoration-3 style="width:200px;height:20px;" />
		</div>
		<dv-charts :option="option" />
	</div>
</template>

<script>
	export default {
		name: 'TopMiddleCmp',
		data() {
			return {
				title: '总有功功率月趋势',
				option: {}
			}
		},
		created() {
			this.axios({
				url: this.server_url + '/lp/trend/',
				method: 'post',
				
				data: {},
			}).then(res => {
				this.option = res.data.data
				this.option['xAxis']['boundaryGap'] = false
				this.option['xAxis']['axisLine'] = {
							style: {
								stroke: '#999'
							}
						}
				this.option['xAxis']['axisLabel'] = {
							style: {
								stroke: '#999'
							}
						}
				this.option['xAxis']['axisTick'] = {
							show: false
						}
				this.option['legend'] = {
						data: ['月总有功功率'],
						textStyle: {
							fill: '#fff'
						}
					}
				this.option['yAxis'] = {
						data: 'value',
						splitLine: {
							show: false
						},
						axisLine: {
							style: {
								stroke: '#999'
							}
						},
						axisLabel: {
							style: {
								fill: '#999'
							},
							formatter({
								value
							}) {
								return value
							}
						},
						axisTick: {
							show: false
						},
						// min: 95,
						// max: 100,
						// interval: 1
					},
				window.console.log(this.option)
				this.option['series'][0]['type'] = 'line'
				this.option['series'][0]['name'] = '月总有功功率'
				this.option['series'][0]['smooth'] = true
				this.option['series'][0]['lineArea'] = {
							show: true,
							gradient: ['rgba(55, 162, 218, 0.6)', 'rgba(55, 162, 218, 0)']
						}
				this.option['series'][0]['type'] = 'line'
				this.option['series'][0]['linePoint'] = {
							radius: 4,
							style: {
								fill: '#00db95'
							}
						}
			}).catch(err => {
				window.console.log(err + '总有功功率月趋势获取失败');
			});
		}
	}
</script>

<style lang="less">
	.top-middle-cmp {
		position: relative;
		padding: 0 50px;
		box-sizing: border-box;

		.chart-name {
			position: absolute;
			right: 70px;
			text-align: right;
			font-size: 20px;
			top: 10px;
		}
	}
</style>
