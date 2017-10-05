<template>
<div class="about">
  <ul>
    <li v-for="name in names" v-text="name"></li>
  </ul>
  <input type="text" v-model="newName" v-on:keyup.enter="addName(newName)">
  <p>{{ newName }}</p>
  <button @click="addName">>Add name</button>

  <button @click="removeName()">>Remove name</button>
</div>
</template>

<script>
export default {

  methods: {
    addName: function () {
      if (!this.newName) {
        alert('Please, fill the form!')
        return
      }
      this.names.push(this.newName)
      this.newName = ''
    },
    removeName: function () {
      return this.names.splice(0, 1, `Don't bother me!!!`)
    }
  },
  data () {
    return {
      newName: 'Enter new name',
      names: ['Ely', 'KiraBlack', 'Frodo']
    }
  }
}
</script>

<style scoped>
  /* Анимации появления и исчезновения могут иметь */
  /* различные продолжительности и динамику.      */
  .slide-fade-enter-active {
  transition: all .3s ease;
  }
  .slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
  }
</style>
