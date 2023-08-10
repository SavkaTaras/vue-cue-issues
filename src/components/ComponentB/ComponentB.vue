<template>
	<div class="component-b">
		<p class="component-b-p">component B color blue</p>

		<ComponentC />
	</div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

// import ComponentB from '../ComponentB/ComponentB.vue';
const ComponentC = defineAsyncComponent(() =>
	import("../ComponentC/ComponentC.vue")
);
</script>

<style lang="scss">
@import "../../assets/scss/component-b";
</style>
