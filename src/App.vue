<template>
<div id="app">
	<app-header></app-header>
	<router-view></router-view>
	<app-footer></app-footer>


</div>
</template>

<script>
// import axios from 'axios'

import AppHeader from './components/Main/AppHeader'
import AppFooter from './components/Main/AppFooter'
import RecipesList from './components/RecipesList'
import RecipesListItem from './components/RecipesListItem'
import 'bulma/bulma.sass'

import {
	HTTP
} from './utils/http-common'

export default {
	name: 'app',
	components: {
		AppHeader,
		AppFooter,
		RecipesList,
		RecipesListItem
	},
	methods: {
		searchByProductsName(query) {
			console.log(query)
			this.isLoading = true;
			HTTP.get(`${query}'`)
				.then(res => res.data.recipes)
				.then(recipes => {
					console.log(recipes)
					this.isLoading = false
					this.recipes = recipes
				})
				.catch(error => {
					if (error.response) {
						console.log(error.response.data)
						console.log(error.response.status)
						console.log(error.response.headers)
					} else if (error.request) {
						console.log(error.request)
					} else {
						console.log('Error', error.message)
					}
					console.log(error.config)
				})
		},
	},
	data() {
		return {
			isLoading: false,
			recipes: [],
			query: ''
		}
	},
	created() {
		// this.isLoading = true
		// apiRequests.searchByProductsName('sugar tea')

	}
}
</script>

<style lang="sass" scoped>
@import "./assets/font-awesome/css/font-awesome.min.css"
</style>
