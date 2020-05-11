<template>
	<div>
		<el-table :data="CommentList" style="width: 100%;margin: 10px" v-if="CommentList.length > 0">
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
	</div>
</template>

<script>
export default {
	name: 'CommentMng',
	data() {
		return {
			CommentList: {}
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
					console.log(res)
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
			console.log(row)
		}
	}
}
</script>

<style lang="scss" scoped>
</style>