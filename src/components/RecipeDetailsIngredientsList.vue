<template>
<div id='ingredientsList'>
	<div class="ingredients-list">
		<div v-for="ingredient in ingredients" class="ingredients-list__item">
			<div class="item__ammount">{{ ingredient.amount }} {{ ingredient.unitShort }}</div>
			<div class="item__wrapper">
				<img :src="ingredient.image" alt="">
			</div>

			<div class="item__title">{{ ingredient.name }}</div>
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
			type: Array,
			default: () => []
		}
	}
}
</script>

<style lang="sass" scoped>
.ingredients-list
	display: flex
	flex-wrap: wrap
	width: 80%
	margin: auto
	&__item
		align-self: center
		width: 100px
		height: 100px
		position: relative
		margin-right: 5px
		margin-top: 24px

		img
			max-width: 100px
			max-height: 69px
			top: 0
			bottom: 0
			left: 0
			right: 0
			margin: auto

.item

	&__wrapper
		width: 110px
		height: 105px
		vertical-align: middle
		text-align: center
		line-height: 100px
		background-color: #fff
		position: relative

	&__title
		text-align: center
		bottom: -15px
		height: 26px
		line-height: 14px


</style>
