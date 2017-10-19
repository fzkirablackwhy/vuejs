import

<template>
  <div id="home">
    
    <p>Hey!</p>
  </div>

</template>
<script>
export default {
  name: 'home',
  data: () => ({

  })
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
    reverseMessage () {
      this.message = this.message.split('').reverse().join('')
    },
    click: function () {
      alert('Oh god')
    },
    visibillity: function () {
      return Math.random() > 0.5
    }
  },

  data () {
    return {
      show: true
    }
  }
}
</script>

Add "scoped" attribute to limit CSS to this component only
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    color: red;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0
  }
</style> -->
