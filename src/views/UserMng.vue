<template>
	<div>
		<el-table :data="UserList" style="width: 100%;margin: 10px" v-if="UserList.length > 0">
			<el-table-column prop="userId" label="编号" width="80"></el-table-column>
			<el-table-column prop="userName" label="姓名" width="120"></el-table-column>
			<el-table-column prop="sex" label="性别" width="80"></el-table-column>
			<el-table-column prop="userEmail" label="邮箱" width="200" ></el-table-column>
			<el-table-column prop="userPhone" label="电话" width="130"></el-table-column>
			<el-table-column prop="userPlanSpent" label="计划消费" width="100"></el-table-column>
			<el-table-column prop="userCurrentSpent" label="当前消费" width="100"></el-table-column>
			<el-table-column prop="userCreateTime" label="注册时间" width="200"></el-table-column>
			<el-table-column prop="openStore" label="是否开店" width="100">
				<template slot-scope="scope">
					<p v-if="UserList[scope.$index].openStore==1">是</p>
					<p v-if="UserList[scope.$index].openStore==0">否</p>
				</template>
			</el-table-column>
            <el-table-column prop="stateCode" label="是否注销" width="100">
				<template slot-scope="scope">
					<p v-if="UserList[scope.$index].stateCode==1001">是</p>
					<p v-if="UserList[scope.$index].stateCode==1000">否</p>
				</template>
			</el-table-column>
            <el-table-column label="操作" width="180">
				<template slot-scope="scope">
					<!-- <el-button size="mini" @click="editDiscuss(scope.row)">编辑</el-button> -->
					<el-button v-if="UserList[scope.$index].stateCode==1000" size="mini" type="danger" @click="handleDelete(scope.row.userId)">注销</el-button>
					<el-button v-if="UserList[scope.$index].stateCode==1001" size="mini" type="success" @click="handleActive(scope.row.userId)">激活</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	name: 'DiscussMng',
	data() {
		return {
			UserList: {}
		}
	},
	mounted: function() {
		var _this = this
		_this.getUserList()
	},
	methods: {
		getUserList() {
			var _this = this
			_this.$axios
				.post('/api/admin/userList', {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					console.log(res)
					_this.UserList = res.data
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		handleDelete(id) {
			console.log(id)
			var _this = this
			let formData = new FormData()
			formData.append('userId', id)
			_this
				.$axios({
					url: '/api/admin/userDelete', //****: 你的ip地址
					data: formData,
					method: 'delete',
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				})
				.then(res => {
					this.$message({
						type: 'success',
						message: '注销成功!'
					})
					_this.getUserList()
				}) // 发送请求
        },
        handleActive(id){
console.log(id)
			var _this = this
			let formData = new FormData()
			formData.append('userId', id)
			_this
				.$axios({
					url: '/api/admin/userActive', //****: 你的ip地址
					data: formData,
					method: 'post',
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				})
				.then(res => {
					this.$message({
						type: 'success',
						message: '激活成功!'
					})
					_this.getUserList()
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