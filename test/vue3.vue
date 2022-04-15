<template>
  <button @click="onClick" />
</template>
<script>
export default {
  emits: ['click'],
  setup (props, context) {
    return {
      onClick () {
        console.log('clicked vue3')
        context.emit('click1')
      }
    }
  }
}</script>
