<template>

  <div id="app" class="section">
    <app-header>
      <router-link v-bind:to="'/home'" class="navbar-item">Home</router-link>
      <router-link v-bind:to="'/about'" class="navbar-item">About</router-link>
    </app-header>
    <router-view></router-view>
    <recipes-list :recipes="recipes"></recipes-list>
    <button @click="searchByProductsName('orange plum')" type="button" name="button">dasd</button>
    {{ isLoading }}
    <app-footer></app-footer>
  </div>
</template>

<script>
// import axios from 'axios'

import Modal from './components/Modal'
import appHeader from './components/Main/Header'
import appFooter from './components/Main/Footer'
import recipesList from './components/RecipesList'
import 'bulma/bulma.sass'

import { instance, mashapAuth } from './utils/api'

export default {
  name: 'app',
  components: { Modal, appHeader, appFooter, recipesList },
  methods: {
    searchByProductsName(query) {
      this.isLoading = true;
      instance.get(`/search?key=${mashapAuth}&q=${query}'`)
        .then(res => res.data)
        .then(data => {
          this.isLoading = false
          this.recipes = data.recipes
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
      recipes: []
    }
  },
  created() {
    // this.isLoading = true
    // apiRequests.searchByProductsName('sugar tea')

  }
}
</script>

<style lang="sass">

</style>
