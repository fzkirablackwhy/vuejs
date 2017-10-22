<template>
<section id="recipe-details" class="section">
	<div>
		<app-loader v-if="isLoading"></app-loader>
		<div class="recipe-detail__item">
			<p>I'm recipe!!! {{ recipeId }}</p>
			<img :src="recipeDetails.image" :alt="recipeDetails.title">
			<span class="icon">
				<i class="fa fa-heart-o fa-2x">{{ recipeDetails.aggregateLikes }}</i>
			</span>
		</div>

	</div>
</section>
</template>

<script>
import { HTTP } from '../utils/http-common'
import AppLoader from './Main/AppLoader'

export default {
	components: {
		AppLoader
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
	width: 300px
	height: 300px
	overflow: hidden
	img

</style>
