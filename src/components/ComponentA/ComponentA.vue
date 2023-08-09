<template>
	<div class="component-a">
		<p class="component-a-p">component A color gray</p>

		<ComponentB />
	</div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";

// import ComponentB from '../ComponentB/ComponentB.vue';
const ComponentB = defineAsyncComponent(() =>
	import("../ComponentB/ComponentB.vue")
);
</script>

<style lang="scss">
@import "../../assets/scss/component-a";
</style>
