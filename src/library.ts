import { defineCustomElement, defineAsyncComponent } from "vue";

import ComponentA from "./components/ComponentA/ComponentA.vue";
const ComponentAElement = defineCustomElement(ComponentA);
customElements.define("component-x", ComponentAElement);

import ComponentB from "./components/ComponentB/ComponentB.vue";
// const ComponentB = defineAsyncComponent(() =>
// 	import("./components/ComponentB/ComponentB.vue")
// );
const ComponentBElement = defineCustomElement(ComponentB);
customElements.define("component-y", ComponentBElement);

const ComponentC = defineAsyncComponent(() =>
	import("./components/ComponentC/ComponentC.vue")
);
const ComponentCElement = defineCustomElement(ComponentC);
customElements.define("component-z", ComponentCElement);
