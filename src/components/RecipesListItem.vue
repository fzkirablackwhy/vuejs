<template>
<li class="recipe-item" @click="">
	<div class="recipe-item__wrapper">
		<img :src="imageSrc" :alt="recipe.title">
		<div class='caption'>
			<div class='blur'></div>
			<div class="caption-text">
				<div class="caption-text__title">
					<p>{{ recipe.title }}</p>
				</div>

				<div class="caption-text__time">
					<span class="icon">
						<i class="fa fa-clock-o fa-5"></i>
					</span>
					<span>{{ calculateHours }} {{ calculateMinutes }}</span>
				</div>
				<div class="caption-text__link">
					<router-link :to="recipeLink">Learn more</router-link>
				</div>
			</div>
		</div>
	</div>
</li>
</template>

<script>
export default {
	name: 'RecipesListItem',
	props: {
		recipe: {
			type: Object,
			required: true
		},
	},
	methods: {
		addToFavorites() {
			this.$emit('addToFavorite', this.recipe)
		}
	},
	computed: {
		imageSrc() {
			return `https://spoonacular.com/recipeImages/${this.recipe.id}-636x393.jpg`
		},
		calculateHours() {
			let hours = Math.trunc(this.recipe.readyInMinutes / 60)
			return hours != 0 ? `${hours}h` : ''
		},
		calculateMinutes() {
			let minutes = this.recipe.readyInMinutes % 60
			return minutes != 0 ? `${minutes}min` : ''
		},
		recipeLink() {
			return `recipe/${this.recipe.id}`
		}
		// isFavorite() {
		// 	return this.recipe.isFavorite || false
		// }
		// filteredTodos() {
		// 	filters[this.visibility](this.todos);
		// }
	},
}
</script>

<style lang="sass" scoped>
$item-detskop__height: 290px
$item-detskop__width: 480px
.recipe-item
	height: $item-detskop__height
	width: $item-detskop__width
	&__wrapper
		position: relative
		overflow: hidden
		border: 1px solid
		display: flex

		.caption-text
			z-index: 10
			color: #fff
			position: absolute
			width: $item-detskop__width
			height: $item-detskop__height
			text-align: center
			top: 0
			left: 0
			font-size: 22px
			display: flex
			flex-direction: column
			justify-content: center


			&__title
				padding: 10px
			&__link
				align-self: center
				position: absolute
				bottom: 205px
				padding: 10px
				color: #fff
				border: 1px solid #fff
				border-radius: 25%
				transition: all 0.45s ease-in-out
				a
					color: #fff

		.blur
			background-color: rgba(14, 4, 4, 0.65)
			width: $item-detskop__width
			height: $item-detskop__height
			z-index: 5
			cursor: pointer

		img
			transition: all .4s ease-in-out
			align-self: center
			position: absolute

		.caption
			opacity: 0
			transition: all 0.45s ease-in-out


		&:hover
			.caption
				opacity: 1
				z-index: 5
				&-text__link
					transform: translateY(190px)
					&:hover
						border: 2px dashed rgb(173, 221, 112)


			img
				transform: scale(1.15, 1.15)

</style>
