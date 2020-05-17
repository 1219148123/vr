<template>
<body id="poster">
	<el-form class="login-container" label-position="left" label-width="0px" >
		<h3 class="login_title">理消在线商城管理员登录</h3>
		<el-form-item>
			<el-input type="text" v-model="Login.adminAccount" auto-complete="off" placeholder="账号"></el-input>
		</el-form-item>
		<el-form-item>
			<el-input type="password" v-model="Login.adminPassword" auto-complete="off" placeholder="密码"></el-input>
		</el-form-item>
		<el-form :inline="true" class="demo-form-inline">
			<el-form-item>
				<el-button
					type="primary"
					style="width: 230px;background: #505458;border: none"
					v-on:click="login"
				>登录</el-button>
			</el-form-item>
		</el-form>
	</el-form>
</body>
</template>

<script>
export default {
	name: 'Login',
	data() {
		return {
			Login: {
				adminAccount: '',
				adminPassword: ''
			},
		}
	},
	mounted: function() {
		var _this = this
		layui.use('layer', function() {
			_this.layer = layui.layer
		})
	},
	methods: {
		login() {
			var _this = this
			if (
				_this.Login.adminAccount == '' ||
				_this.Login.adminAccount == ' ' ||
				_this.Login.adminPassword == '' ||
				_this.Login.adminPassword == ' '
			) {
				this.$message({
					message: '账号密码不能为空',
					type: 'warning'
				})
				return
			}
			_this.$axios
				.post('/api/admin/login', _this.Login, {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					if (res.data == 1) {
						this.$message({
							message: '登录成功',
							type: 'success'
						})
						this.$router.push({
							path: '/admin/storeMng',
							query: { admin: _this.Login.adminAccount }
						})
					} else if (res.data == 0) {
						this.$message({
							message: '账号不存在',
							type: 'warning'
						})
					} else {
						this.$message({
							message: '密码错误',
							type: 'warning'
						})
					}
					_this.Login = {}
					_this.loading = false
				})
				.catch(err => {
					console.log(err.data)
				})
		}
	}
}
</script>

<style lang="scss" scoped>
.login-container {
	border-radius: 15px;
	background-clip: padding-box;
	margin: 160px auto;
	width: 350px;
	padding: 35px 35px 15px 35px;
	background: #fff;
	border: 1px solid #eaeaea;
	box-shadow: 0 0 25px #cac6c6;
}
.login_title {
	margin: 0px auto 40px auto;
	text-align: center;
	color: #505458;
}
#poster {
	background: url('../images/banner2.jpg') no-repeat;
	background-position: center;
	height: 100%;
	width: 100%;
	background-size: cover;
	position: fixed;
}
body {
	margin: 0px;
}
</style>