<template>
	<div>
		<input type="text" v-model="User.userAccount" />
		<br />
		<input type="password" v-model="User.userPassword" />
		<button @click="login()">登录</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			User: {
				userAccount: '',
				userPassword: ''
			}
		}
	},
	mounted:function(){
		this.getUser();
	},
	
	methods: {
		getUser() {
			this.$axios
				.post('http://localhost:8081/api/user/getUser', {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					console.log(res)
				})
				.catch(err => {
					console.log(err.data)
				})
		},
		login() {
			// this.User = this.$qs.stringify(this.User);
			// console.log(this.User);
			this.$axios
				.post('http://localhost:8081/api/user/login', this.User, {
					emulateJSON: true,
					withCredentials: true
				})
				.then(res => {
					console.log(res)
				})
				.catch(err => {
					console.log(err.data)
				})
		}
	}
}
</script>

<style lang="scss" scoped>
</style>