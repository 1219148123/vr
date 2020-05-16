<template>
	<div>
		<el-table :data="CommentList.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%;margin: 10px" v-if="CommentList.length > 0">
			<el-table-column prop="id" label="编号" width="160"></el-table-column>
			<el-table-column prop="parentId" label="父类编号" width="120"></el-table-column>
			<el-table-column prop="content" label="内容" width="180"></el-table-column>
			<el-table-column prop="createTime" label="创建时间" width="180" :show-overflow-tooltip="true"></el-table-column>
			<el-table-column prop="stateCode" label="状态" width="200">
				<template slot-scope="scope">
					<p v-if="CommentList[scope.$index].type==1">帖子评论</p>
					<p v-if="CommentList[scope.$index].type==2">评论的回复</p>
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
			:total="CommentList.length"
		></el-pagination>
	</div>
</template>

<script>
export default {
	name: 'CommentMng',
	data() {
		return {
			CommentList: {},
			total: 0,
			pagesize: 5,
			currentPage: 1
		}
	},
	mounted: function() {
		var _this = this
		_this.getCommentList()
	},
	methods: {
		getCommentList() {
			var _this = this
			_this.$axios
				.post('/api/admin/commentList', {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					_this.CommentList = res.data
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
					url: '/api/admin/deleteComment', //****: 你的ip地址
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
					_this.getCommentList()
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