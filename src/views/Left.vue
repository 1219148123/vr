<template>
	<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
		<el-menu :default-openeds="['1']" :default-active="active" router>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-setting"></i>商城管理
				</template>
				<el-menu-item-group>
					<template slot="title">论坛管理</template>
					<el-menu-item :index="'/admin/discussMng'">帖子信息</el-menu-item>
					<el-menu-item :index="'/admin/commentMng'">评论信息</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="用户管理">
					<el-menu-item :index="'/admin/userMng'">用户信息</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="店铺管理">
					<el-menu-item :index="'/admin/storeMng'">店铺信息</el-menu-item>
					<el-menu-item :index="'/admin/goodsMng'">商品信息</el-menu-item>
				</el-menu-item-group>
				
			</el-submenu>
		</el-menu>
	</el-aside>
</template>

<script>
export default {
	name: 'Left',
	data() {
		return {
			active: ''
		}
	},
	mounted: function() {
		this.active = this.$route.name
	}
}
</script>

<style lang="scss" scoped>
</style>