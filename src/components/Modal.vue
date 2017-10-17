<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
    Yo
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
</div>
</template>

<script>
  export default {
    data () {
      return {
        showModal: false
      }
    }
  }
</script>
