<template>
    <v-region @values="regionChange" class="form-control"></v-region>
</template>
<script>
export default {
	data() {
		return {
			layer: {},
			element: {}
		}
	},
	mounted() {
		var _this = this
	},
	methods: {
		regionChange(data) {
			console.log(data)
		},
		
	}
}
</script>
<style scoped>
</style>