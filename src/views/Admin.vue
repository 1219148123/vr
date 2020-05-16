<template>
	<el-container style="height: 1080px; border: 1px solid #eee">
		<left></left>
		<router-view />
	</el-container>
</template>

<script>
import Left from './Left'
export default {
	name: 'ManagerIndex',
	components: { Left },
	data() {
		return {
			tableData: Array(20).fill(item)
		}
	}
}
</script>

<style scoped>
.el-header {
	background-color: #b3c0d1;
	color: #333;
	line-height: 60px;
}
.el-aside {
	color: #333;
}
</style>