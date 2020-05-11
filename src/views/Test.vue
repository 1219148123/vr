<template>
    <v-region @values="regionChange" class="form-control"></v-region>
</template>
<script>
export default {
	data() {
		return {
			layer: {},
			element: {},
			addr:'',
			provice:'',
			city:'',
			country:''
		}
	},
	mounted() {
		var _this = this
	},
	methods: {
		regionChange(data) {
			var _this = this
			console.log(data)
			_this.provice = data.province.value;
			_this.city = data.city.value;
			_this.country = data.area.value;
			console.log(_this.provice + _this.city+ _this.country)
		},
		
	}
}
</script>
<style scoped>
</style>