<template>
<section id="recipes-list">

	<div class="columns is-gapless is-multiline is-mobile">
		<recipes-list-item slot="recipe" :key="recipe.id" v-for="recipe in recipes" :recipe="recipe">
		</recipes-list-item>
	</div>
</section>
</template>

<script>
import RecipesListItem from './RecipesListItem'
export default {
	name: 'RecipesList',
	components: {
		RecipesListItem
	},
	props: {
		recipes: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			recipe: []
		}
	}
}
</script>

<style lang="sass" scoped>
  .columns
      display: flex
      justify-content: center
</style>
