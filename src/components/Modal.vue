<template>
<div class="modal is-active">
	<div class="modal-background"></div>
	<div class="modal-content">
		<ul class="list">
			<li v-for="item in items">
				{{ item.description}}
				<button class="primary button is-primary" href="">{{ item.completed }}</button>
			</li>
		</ul>
	</div>
	<slot props="ff"></slot>
	<button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
</div>
</template>

<script>
export default {
	props: [
		'showModal',
		'items'
	]
}
</script>
