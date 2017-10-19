<template>
  <div id="recipes-list">
    <ul>
      <li v-for="recipe in recipes" :key="recipe.key">{{ recipe.title }} - {{ recipe.author }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recipesList',
  props: [
    'recipes',
    'items'
  ]
}
</script>
