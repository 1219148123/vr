<template>
	<div>
		<el-table
			:data="DiscussList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
			style="width: 100%;margin: 10px"
			v-if="DiscussList.length > 0"
		>
			<el-table-column prop="id" label="编号" width="160"></el-table-column>
			<el-table-column prop="title" label="标题" width="120"></el-table-column>
			<el-table-column prop="tag" label="标签" width="180"></el-table-column>
			<el-table-column prop="description" label="内容" width="100" :show-overflow-tooltip="true"></el-table-column>
			<el-table-column prop="gmtCreate" label="创建时间" width="180"></el-table-column>
			<el-table-column prop="gmtModified" label="修改时间" width="100"></el-table-column>
			<el-table-column prop="stateCode" label="状态" width="100">
				<template slot-scope="scope">
					<p v-if="DiscussList[scope.$index].stateCode==1001">无效</p>
					<p v-if="DiscussList[scope.$index].stateCode==1000">有效</p>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="180">
				<template slot-scope="scope">
					<!-- <el-button size="mini" @click="editDiscuss(scope.row)">编辑</el-button> -->
					<el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-size="pagesize"
			:total="DiscussList.length"
		></el-pagination>
	</div>
</template>

<script>
export default {
	name: 'DiscussMng',
	data() {
		return {
			DiscussList: {},
			total: 0,
			pagesize: 5,
			currentPage: 1
		}
	},
	mounted: function() {
		var _this = this
		_this.getDiscussList()
	},
	methods: {
		getDiscussList() {
			var _this = this
			_this.$axios
				.post('/api/admin/discussList', {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					_this.DiscussList = res.data
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		handleDelete(id) {
			console.log(id)
			var _this = this
			let formData = new FormData()
			formData.append('id', id)
			_this
				.$axios({
					url: '/api/admin/deleteDiscuss', //****: 你的ip地址
					data: formData,
					method: 'delete',
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				})
				.then(res => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					})
					_this.getDiscussList()
				}) // 发送请求
		},
		editDiscuss(row) {
		},
		handleCurrentChange: function(currentPage) {
			this.currentPage = currentPage
		}
	}
}
</script>

<style lang="scss" scoped>
</style>