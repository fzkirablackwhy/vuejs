<template>
<div class="about">
  <!-- <ul>
    <li v-for="name in names" v-text="name"></li>
  </ul>
  <input type="text" v-model="newName" v-on:keyup.enter="addName(newName)">
  <p v-bind:title="newName">{{ newName }}</p>
  <button v-bind:disabled="{ 'disabled': false}" @click="addName">>Add name</button>
  {{ disabled }}
  <button @click="removeName()">>Remove name</button> -->
  <h1>Tasks for a day!</h1>
  <transition name="fade">
    <ul class="list" v-if="isVisible">
      <li v-for="task in tasks" v-text="task.description" v-bind:class="[task.completed ? 'activeClass' : 'inactiveClass',]"></li>
    </ul>
  </transition>

  <button @click="showMore">Show more tasks</button>
  <button @click="hideTasks">Hide incompleted tasks</button>

  <button @click="isVisible = false"> Hide me!!!</button>
  <button @click="isVisible = true"> Show! me!!!</button>


</div>
</template>

<script>
export default {

  methods: {
    showMore () {
      const chosenValue = Math.random() < 0.5
      this.tasks.push({description: 'What?!', completed: chosenValue})
    },
    hideTasks () {
      this.tasks = this.tasks.filter((task) => task.completed)
    }
  },
  data () {
    return {
      tasks: [
        { description: 'Go to the store', completed: true },
        { description: 'Go to the bed', completed: true },
        { description: 'Go to the work', completed: false },
        { description: 'Go to the bar', completed: false }
      ],
      isVisible: true
    }
  },
  computed: {
    classObject () {
      console.log(this.tasks)
    }
  }
}
</script>

<style scoped>
  /* animations ---*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }


  .list {
    display: flex;
    text-align: left;
    justify-content: center;
    flex-wrap: wrap;
    list-style: none;
  }
  .list li {
    border: 1px solid #000;
    box-shadow: 0px 0px 5px 1px #054f5c;
    background: rgb(250, 250, 250);
    font-family:  Fantasque Sans Mono;
    align-self: center;
    padding: 5px 15px;
  }
  .activeClass {

     color: #085c39;
  }
  .inactiveClass {
    color: #b50e54;
  }
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
