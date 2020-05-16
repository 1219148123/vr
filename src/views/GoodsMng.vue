<template>
	<div>
		<el-table :data="GoodsList.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width: 100%;margin: 10px" v-if="GoodsList.length > 0">
			<el-table-column prop="goodId" label="商品编号" width="80"></el-table-column>
			<el-table-column prop="storeId" label="所属店铺编号" width="80"></el-table-column>
			<el-table-column prop="goodName" label="商品名称" width="120"></el-table-column>
			<el-table-column prop="price" label="价格" width="80"></el-table-column>
			<el-table-column prop="num" label="库存" width="80"></el-table-column>
			<el-table-column prop="updateTime" label="更新时间" width="100"></el-table-column>
			<el-table-column prop="category" label="分类编号" width="80"></el-table-column>
			<el-table-column prop="priority" label="权重" width="80"></el-table-column>
			<el-table-column prop="description" label="商品描述" width="100" :show-overflow-tooltip="true"></el-table-column>
			<el-table-column
				prop="imgAddr"
				label="描述图片"
				align="center"
				width="150px"
				padding="0px"
				:show-overflow-tooltip="true"
			>
				<template scope="scope">
					<img
						v-for="item in scope.row.imgAddr.split(',')"
						:src="item"
						:key="item"
						alt style="width: 36px;height:36px"
					/>
				</template>
			</el-table-column>
			<el-table-column prop="stateCode" label="状态" width="60">
				<template slot-scope="scope">
					<p v-if="GoodsList[scope.$index].goodStatus==1">在售</p>
					<p v-if="GoodsList[scope.$index].goodStatus==0">已下架</p>
				</template>
			</el-table-column>
			<el-table-column label="操作" width="180">
				<template slot-scope="scope">
					<!-- <el-button size="mini" @click="editDiscuss(scope.row)">编辑</el-button> -->
					<el-button
						v-if="GoodsList[scope.$index].goodStatus==1"
						size="mini"
						type="danger"
						@click="handleDelete(scope.row.goodId)"
					>下架</el-button>
					<el-button v-if="GoodsList[scope.$index].goodStatus==0" size="mini" type="success" disabled>已下架</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			@current-change="handleCurrentChange"
			:current-page="currentPage"
			:page-size="pagesize"
			:total="GoodsList.length"
		></el-pagination>
	</div>
</template>

<script>
export default {
	name: 'DiscussMng',
	data() {
		return {
			GoodsList: {},
			total: 0,
			pagesize: 5,
			currentPage: 1
		}
	},
	mounted: function() {
		var _this = this
		_this.getGoodsList()
	},
	methods: {
		toContact() {
			this.$router.push({
				path: '/contact'
			})
		},
		getGoodsList() {
			var _this = this
			_this.$axios
				.post('/api/admin/goodList', {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					console.log(res.data[0].imgAddr.split(','))
					_this.GoodsList = res.data
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		handleDelete(id) {
			console.log(id)
			var _this = this
			let formData = new FormData()
			formData.append('goodId', id)
			_this
				.$axios({
					url: '/api/admin/deleteGood', //****: 你的ip地址
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
					_this.getGoodsList()
				}) // 发送请求
		},
		editDiscuss(row) {
			console.log(row)
		},
		handleCurrentChange: function(currentPage) {
			this.currentPage = currentPage
		}
	}
}
</script>

<style lang="scss" scoped>
</style>