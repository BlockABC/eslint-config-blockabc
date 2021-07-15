<template>
  <button @click="onClick"></button>
</template>
<script>
export default {
  methods: {
    onClick () {
      window.alert('clicked');
    }
  }
}
</script>
