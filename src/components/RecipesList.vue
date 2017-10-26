<template>
<section id="recipes-list">
  <transition-group name="recipes-list" class="columns is-gapless is-multiline is-mobile" tag="ul">
    <recipes-list-item v-for="recipe in recipes" :recipe="recipe" :key="recipe.id">
    </recipes-list-item>
  </transition-group>
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
  methods: {
    deleteTodo(index) {
      this.recipes.splice(index, 1);
    },
    addToFavorite(recipe) {
      recipe.isFavorite = !recipe.isFavorite
      if (recipe.isFavorite) {
        this.favorites.add(recipe)
      } else {
        this.favorites.delete(recipe)
      }

    }
  },
  data() {
    return {
      favorites: new Set()
    }
  },
  computed: {
    isFavorite(recipe) {
      return this.favorites.has(recipe)
    }
  },
}
</script>

<style lang="sass" scoped>
.recipes-list
	display: flex
	justify-content: center

.recipes-list-move,
.recipes-list-leave-active,
.recipes-list-enter-active
	transition: 500ms cubic-bezier(.87,-.41,.19,1.44)
.recipes-list-enter,
.recipes-list-leave-active
	transform: translate(100%, 0)
	opacity: 0


</style>
