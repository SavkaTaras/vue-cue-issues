<template>
  Vue component X:
  <ComponentA :foo="12345" :valOne="5.5" :valTwo="0.5" />
  <br />
  <br />

  Failing custom element-x:
  <component-x foo="12345" val-one="5.5" val-two="0.5" />
  <br />
  <br />

	If no value is provided for valOne and valTwo, defaults add correctly:
	<component-x foo="12345" />
  <br />
  <br />
</template>

<script setup lang="ts">
import ComponentA from './components/ComponentA/ComponentA.vue';
</script>

<style lang="scss"></style>
