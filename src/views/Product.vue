<template>
	<div>
		<h1>Title</h1>
		Back to products
		<hr>
		<div class="alert alert-success">
			price
		</div>
	</div>
</template>

<script>
	export default {
		created(){
			console.log(this.$route);
		}
	}
</script>