<template>
	<div>
		<ul class="layui-nav" lay-filter>
			<li class="layui-nav-item">
				<a href>最新活动</a>
			</li>
			<li class="layui-nav-item layui-this">
				<a href>产品</a>
			</li>
			<li class="layui-nav-item">
				<a href>大数据</a>
			</li>
			<li class="layui-nav-item">
				<a href="javascript:;">解决方案</a>
				<dl class="layui-nav-child">
					<!-- 二级菜单 -->
					<dd>
						<a href>移动模块</a>
					</dd>
					<dd>
						<a href>后台模版</a>
					</dd>
					<dd>
						<a href>电商平台</a>
					</dd>
				</dl>
			</li>
			<li class="return" @click="returnRoom">归还</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			layer: {},
			element: {}
		}
	},
	mounted() {
		var _this = this;
		layui.use('layer', function() {
			 _this.layer = layui.layer

		_this.layer.msg('hello')
		})
	},
	methods: {
		returnRoom() {
			let that = this
			var _this = this
			_this.layer.msg("12312321");
			this.$layer.confirm(
				'确定归还该琴房吗?',
				{
					btn: ['确定', '取消'] //按钮
				},
				function() {
					//点击确定访问后台
					that.$layer.closeAll()
				},
				function() {
					//点击取消则中断操作
					that.$layer.closeAll()
					that.$layer.msg('已取消')
				}
			)
		}
	}
}
</script>
<style scoped>
</style>