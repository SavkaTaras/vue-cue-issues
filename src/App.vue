<template>
  Vue component X:
  <ComponentA />
  <br />
  <br />

  Custom element x:
  <component-x />
  <br />
  <br />

	Custom element x 2nd import:
  <component-x />
  <br />
  <br />

  Custom element y:
  <component-y />
  <br />
  <br />

	Custom element z:
  <component-z />
  <br />
  <br />
</template>

<script setup lang="ts">
import ComponentA from './components/ComponentA/ComponentA.vue';
</script>

<style lang="scss"></style>
