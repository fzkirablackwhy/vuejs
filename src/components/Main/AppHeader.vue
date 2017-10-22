<template>
<div id="app-header" class="container">
	<nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<a class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
			<button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
		</div>
		<div class="navbar-menu">
			<div class="navbar-start">
				<router-link to="/home" class="navbar-item">Home</router-link>
				<router-link to="/about" class="navbar-item">About</router-link>
			</div>
		</div>
	</nav>
</div>
</template>


<script>
export default {
	name: 'AppHeader'
}
</script>

<style lang="sass" scoped>
</style>
