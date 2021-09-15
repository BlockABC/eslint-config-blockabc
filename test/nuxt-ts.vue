<style lang="scss">
.nuxt-ts.vue {

}
</style>

<template>
  <button />
</template>

<script>

export default {
  name: 'Nuxt',
  components: {},
  asyncData () {
    console.log(this);

    if (1 === 2) {
      console.log(1)
    }
    else {
      console.log(2)
    }
  }
}
</script>
