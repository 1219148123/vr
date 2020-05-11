<template>
	<div>
		<el-table :data="StoreList" style="width: 100%;margin: 10px" v-if="StoreList.length > 0">
			<el-table-column prop="storeId" label="店铺编号" width="80"></el-table-column>
			<el-table-column prop="ownerId" label="店主编号" width="80"></el-table-column>
			<el-table-column prop="storeName" label="店铺名字" width="120"></el-table-column>
			<el-table-column prop="storeDesc" label="店铺描述" width="180" :show-overflow-tooltip="true"></el-table-column>
			<el-table-column prop="storeCate" label="类别编号" width="80"></el-table-column>
			<el-table-column prop="createTime" label="创建时间" width="100"></el-table-column>
			<el-table-column
				prop="storePhoto"
				label="店铺图片"
				align="center"
				width="150px"
				padding="0px"
				:show-overflow-tooltip="true"
			>
				<template slot-scope="scope">
					<img :src="scope.row.storePhoto" alt style="width: 36px;height:36px" />
				</template>
			</el-table-column>
			<el-table-column prop="stateCode" label="状态" width="100">
				<template slot-scope="scope">
					<p v-if="StoreList[scope.$index].stateCode==1001">无效</p>
					<p v-if="StoreList[scope.$index].stateCode==1000">有效</p>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="180">
				<template slot-scope="scope">
					<!-- <el-button size="mini" @click="editDiscuss(scope.row)">编辑</el-button> -->
					<el-button v-if="StoreList[scope.$index].stateCode==1000" size="mini" type="danger" @click="handleDelete(scope.row.storeId)">注销</el-button>
					<el-button v-if="StoreList[scope.$index].stateCode==1001" size="mini" type="success" @click="handleActive(scope.row.storeId)">激活</el-button>
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
			StoreList: {}
		}
	},
	mounted: function() {
		var _this = this
		_this.getStoreList()
	},
	methods: {
		getStoreList() {
			var _this = this
			_this.$axios
				.post('/api/admin/storeList', {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					console.log(res)
					_this.StoreList = res.data
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
					url: '/api/admin/deleteStore', //****: 你的ip地址
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
					_this.getStoreList()
				}) // 发送请求
        },
        handleActive(id) {
			console.log(id)
			var _this = this
			let formData = new FormData()
			formData.append('id', id)
			_this
				.$axios({
					url: '/api/admin/validStore', //****: 你的ip地址
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
					_this.getStoreList()
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