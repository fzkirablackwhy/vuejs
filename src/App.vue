<template>

  <div id="app" class="section">
    <app-header>
      <router-link v-bind:to="'/home'" class="navbar-item">Home</router-link>
      <router-link v-bind:to="'/about'" class="navbar-item">About</router-link>
    </app-header>
    <router-view></router-view>

    <modal v-if="showModal" @close="showModal = false"  :items="setItems()">

    </modal>
    <button @click="getData" type="button" name="button">dasd</button>

    <app-footer></app-footer>
  </div>
</template>

<script>
import axios from 'axios'

import Modal from './components/Modal'
import appHeader from './components/Main/Header'
import appFooter from './components/Main/Footer'
import 'bulma/bulma.sass'
export default {
  name: 'app',
  components: { Modal, appHeader, appFooter },
  methods: {
    setItems () {
      let data = [
        { description: 'Go to the store', completed: true },
        { description: 'Go to the bed', completed: true },
        { description: 'Go to the work', completed: false },
        { description: 'Go to the bar', completed: false }
      ]
      return data
    },
    getData () {
      const config = axios.create({
        baseURL: 'https://community-food2fork.p.mashape.com',
        headers: {'X-Mashape-Key': '7HmvH4YXqHmshzivn3wC2cg1S2gHp1BjS9sjsnPp0xdrXJmC4v'}
        // https://community-food2fork.p.mashape.com/get?key=b5725bcff02fc9371f33951f31c10c19&rId=37859
      })
      config.defaults.headers.common['X-Mashape-Authorization'] = 'b5725bcff02fc9371f33951f31c10c19 '
      config.defaults.headers.common['X-Mashape-Key'] = '7HmvH4YXqHmshzivn3wC2cg1S2gHp1BjS9sjsnPp0xdrXJmC4v'
      axios.get('https://community-food2fork.p.mashape.com/search?key=b5725bcff02fc9371f33951f31c10c19&q=shredded+chicken', config)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
  },
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style lang="sass">

</style>
