<template>
	<div class="component-a">
		<p class="component-a-p">component A color gray</p>

		<ComponentB />
	</div>
</template>

<script lang="ts" setup>
import ComponentB from '../ComponentB/ComponentB.vue';
</script>

<style lang="scss">
@import "../../assets/scss/component-a";
</style>
