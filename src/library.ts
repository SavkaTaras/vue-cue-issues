import { defineCustomElement } from "vue";

import ComponentA from "./components/ComponentA/ComponentA.vue";
const ComponentAElement = defineCustomElement(ComponentA);
customElements.define("component-c", ComponentAElement);

import ComponentB from "./components/ComponentB/ComponentB.vue";
const ComponentBElement = defineCustomElement(ComponentB);
customElements.define("component-d", ComponentBElement);
