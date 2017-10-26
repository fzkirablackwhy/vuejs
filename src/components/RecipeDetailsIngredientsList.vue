<template>
<div id='ingredientsList'>
	<div class="ingredients-list">
		<div v-for="ingredient in ingredients" class="ingredients-list__item">
			<img :src="ingredient.image" alt="">
			<p>{{ ingredient.name }}</p>
		</div>
	</div>
</div>
</template>
<script>
export default {
	name: 'RecipeDetailsIngredientsList',
	props: {
		ingredients: {
			required: true,
			type: Array
		}
	}
}
</script>

<style lang="sass" scoped>
.ingredients-list
    display: flex

    &__item
        align-self: center

        img
            max-width: 100px
            max-height: 69px
            vertical-align: middle
            top: 0
            bottom: 0
            left: 0
            right: 0
            margin: auto
</style>
