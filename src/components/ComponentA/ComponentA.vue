<template>
	<div class="component-a">
		<p>foo value: {{ props.foo }}</p>
		<p>typeof foo: {{ typeof props.foo }}</p>

		<!-- <ComponentB /> -->
	</div>
</template>

<script lang="ts" setup>
// import { defineAsyncComponent } from "vue";

// import ComponentB from '../ComponentB/ComponentB.vue';
// const ComponentB = defineAsyncComponent(() =>
// 	import("../ComponentB/ComponentB.vue")
// );

interface Props {
  foo?: number;
  baz?: string;
}

const props = withDefaults(defineProps<Props>(), {
	foo: 1,
	baz: '',
});
</script>

<style lang="scss">
@import "../../assets/scss/component-a";
</style>
