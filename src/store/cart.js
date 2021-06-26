export default {
	namespaced: true,
	state: {
		products: []
	},
	getters: {
		length: state => state.products.length,
		has: state => id => state.products.some(pr => pr.id === id),
		/* has(state){
			return function(id){
				return state.products.some(pr => pr.id === id);
			}
		} */
		productsDetailed(state,getters,rootState, rootGetters){
			return state.products.map(pr => {
				let info = rootGetters['products/item'](pr.id);
				return { ...pr, ...info };
			});
		},
		total: (state, getters) => getters.productsDetailed.reduce((t, pr) => t + pr.price * pr.cnt ,0)
	},
	mutations: {
		add(state, id){
			state.products.push({ id, cnt: 1 });
		},
		remove(state, id){
			state.products = state.products.filter(pr => pr.id !== id);
		},
		setCnt(state, {id , cnt}){
			let i = state.products.findIndex(pr => pr.id === id);
			state.products[i].cnt = Math.max(1, cnt);
		}
	},
	actions: {
		add(store, id){
			if(!store.getters.has(id)){
				store.commit('add', id);
			}
		},
		remove(store, id){
			if(store.getters.has(id)){
				store.commit('remove', id);
			}
		},
		setCnt(store, payload){
			if(store.getters.has(payload.id)){
				store.commit('setCnt', payload);
			}
		}
	}
}