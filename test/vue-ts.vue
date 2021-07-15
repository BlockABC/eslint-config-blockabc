<template>
  <button @click="onClick"></button>
</template>
<script lang="ts">
interface Interface {
  attr1: string;
}
export default {
  methods: {
    onClick (): void {
      window.alert('clicked');
    }
  }
}
</script>
