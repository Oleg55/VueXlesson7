<template>
	<div v-if="hasProduct">
				<h1>{{ product.title }}</h1>
				Back to products
				<hr>
						<div>ОСтаток на складе: {{  }}</div>
						<div>ID товара: {{ 	}}</div>
				<div class="alert alert-success">
					{{ product.price }}
				</div>
	</div>
		<app-e404 v-else title="Product not found"></app-e404>
</template>

<script>
	import { mapGetters } from 'vuex';

	import AppE404 from '@/components/E404';

	export default {
		components: {
			AppE404
		},
		  data() {
			return {
				productID: Number
			}
		},
		computed: {
			...mapGetters('products', { productProxy: 'item' }),
			id(){
				return this.$route.params.id;
			},
			product() {
				return this.productProxy(this.id)
			},
			hasProduct(){
				return this.product !== undefined;
			}
		},
		created(){
				console.log(this.$route);
		}
	}
</script>