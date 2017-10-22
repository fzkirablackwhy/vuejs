<template>
<section id="home" class="section">
	<div class="field has-addons">
		<div class="control">
			<input class="input" type="text" placeholder="Find a repository" v-model="query" @keyup.enter="searchRecipesByIngredients(query)">
			<p :title="query">{{ query }}</p>
			{{ isLoading }}
		</div>
		<div class="control">
			<a class="button is-info" @click="searchRecipesByIngredients(query)">
          Search
        </a>
		</div>
	</div>
	<recipes-list :recipes="recipes" />
</section>
</template>

<script>
import RecipesList from './RecipesList'
import RecipesListItem from './RecipesListItem'

import {
	HTTP
} from '../utils/http-common'

export default {
	name: 'Home',
	components: {
		RecipesList,
		RecipesListItem
	},
	methods: {
		searchRecipesByIngredients(query) {
			this.isLoading = true;
			HTTP.get(`${query}'`)
				.then(res => res.data.results)
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

</style>


<!-- <template>
  <div id="demo" class="container">
    <button v-on:click="show = !show">
      Reset
    </button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <router-link v-bind:to="'/about'">About</router-link>
  </div>
</template>

<script>
export default {
	name: 'hello',
	methods: {
		reverseMessage() {
			this.message = this.message.split('').reverse().join('')
		},
		click: function() {
			alert('Oh god')
		},
		visibillity: function() {
			return Math.random() > 0.5
		}
	},

	data() {
		return {
			show: true
		}
	}
}
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity .5s;
	color: red;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active до версии 2.1.8 */

	{
	opacity: 0
}
</style> -->
