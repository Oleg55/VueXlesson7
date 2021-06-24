<template>
	<div>
		<h1>Cart</h1>
		<hr>
		<p>products</p>
		<router-link :to="{ name: 'checkout' }" class="btn btn-success">Order now</router-link>
	</div>
</template>

<script>
	export default {

	}
</script>