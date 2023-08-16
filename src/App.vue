<template>
  Vue component X:
  <ComponentA :foo="12345" />
  <br />
  <br />

  Failing custom element-x:
  <component-x foo="12345" />
  <br />
  <br />
</template>

<script setup lang="ts">
import ComponentA from './components/ComponentA/ComponentA.vue';
</script>

<style lang="scss"></style>
