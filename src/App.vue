<template>

  <div id="app" class="section">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.min.css">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #000000;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #242020;
  width: 80%;
  margin-top: 60px;
  margin: auto;
  font-size: 20px;
  box-shadow: 0px 3px 20px 4px rgb(21, 35, 219);
   animation: example 5s ease-out 5s infinite;
}

@keyframes example {
    0 {
      box-shadow: 0px 5px 10px rgb(21, 35, 219);
    }
    20% {
      box-shadow: 4px 10px 10px rgb(171, 0, 103);

    }
}
</style>
