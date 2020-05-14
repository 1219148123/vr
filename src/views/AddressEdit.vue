<template>
	<div>
		<el-button @click="addressFormVisible = true" type="info" style="width: 160px">新增</el-button>
		<el-dialog title="地址管理" :visible.sync="addressFormVisible">
			<el-form v-model="addressForm" style="text-align: left">
				<el-form-item label="省" :label-width="formLabelWidth">
					<el-input v-model="addressForm.province" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="市" :label-width="formLabelWidth">
					<el-input v-model="addressForm.city" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="县" :label-width="formLabelWidth">
					<el-input v-model="addressForm.county" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="具体地址" :label-width="formLabelWidth">
					<el-input v-model="addressForm.specAddr" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="收货人" :label-width="formLabelWidth">
					<el-input v-model="addressForm.consignee" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="收货电话" :label-width="formLabelWidth">
					<el-input v-model="addressForm.phone" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item style="height: 0">
					<el-input type="hidden" v-model="addressForm.id" autocomplete="off"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="clear()">取 消</el-button>
				<el-button type="primary" @click="onSureCommit()">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	name: 'AddressEdit',
	data() {
		return {
			formLabelWidth: '120px',
			addressFormVisible: false,
			addressForm: {
				city: '',
				consignee: '',
				county: '',
				id: 0,
				phone: '',
				province: '',
				specAddr: '',
				flag: 1
			}
		}
	},
	mounted: function() {},
	methods: {
		clear() {
			this.addressForm = {
				city: '',
				consignee: '',
				county: '',
				id: 0,
				phone: '',
				province: '',
				specAddr: '',
				flag: 1
			}
			this.addressFormVisible = false
		},
		getAddress() {
			var _this = this
			_this.$axios
				.get(
					'/api/address/addressMng?userId=' +
						this.$route.query.userId,
					{
						emulateJSON: true,
						withCredentials: true
					}
				)
				.then(res => {
					_this.address = res.data
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		onSureCommit() {
			var _this = this
			if (_this.addressForm.flag == -1) {
				_this.$axios
					.post('/api/address/address', _this.addressForm, {
						emulateJSON: true,
						withCredentials: true
					})
					.then(res => {
						_this.$message({
							type: 'success',
							message: '修改成功'
						})
					})
					.catch(err => {
						console.log(err.data)
					})
			} else if (_this.addressForm.flag == 1) {
				_this.$axios
					.post('/api/address/addAddress', _this.addressForm, {
						emulateJSON: true,
						withCredentials: true
					})
					.then(res => {
						_this.$message({
							type: 'success',
							message: '添加成功'
						})
					})
					.catch(err => {
						console.log(err.data)
					})
			}

            _this.clear()
            _this.$emit('click')
		}
	}
}
</script>

<style lang="scss" scoped>
</style>