<template>
<section id="recipe-details" class="section">
	<app-loader v-if="isLoading"></app-loader>
	<div class="recipe-detail__item">
		<h3 class="title">{{ recipeDetails.title }}</h3>
		<img :src="recipeDetails.image" :alt="recipeDetails.title">
		<span class="icon">
				<i class="fa fa-heart-o fa-2x"></i>
				{{ recipeDetails.aggregateLikes }}
		</span>

		<h5 class="title">Ingredients</h5>
		<recipe-details-ingredients-list :ingredients="recipeDetails.extendedIngredients"></recipe-details-ingredients-list>
	</div>
</section>
</template>

<script>
import { HTTP } from '../utils/http-common'
import AppLoader from './Main/AppLoader'
import RecipeDetailsIngredientsList from './RecipeDetailsIngredientsList'

export default {
	components: {
		AppLoader,
		RecipeDetailsIngredientsList
	},
	props: {
		recipeId: {
			required: true,
			type: String,
			default: '1'
		}
	},
	data() {
		return {
			isLoading: false,
			recipeDetails: {}
		}
	},
	methods: {
		getRecipeDetails(id) {
			this.isLoading = true
			HTTP.get(`${id}/information`)
				.then(res => res.data)
				.then(details => {
					this.recipeDetails = details
					this.isLoading = false
				})
		}
	},
	created() {
		this.getRecipeDetails(this.recipeId)
	}
}
</script>

<style lang="sass" scoped>
.recipe-detail__item
	display: flex
	justify-content: center
	flex-direction: column
	align-items: center

	.title
		font-weight: 100

</style>
