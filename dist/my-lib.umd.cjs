(function(e,n){typeof exports=="object"&&typeof module<"u"?n(require("vue")):typeof define=="function"&&define.amd?define(["vue"],n):(e=typeof globalThis<"u"?globalThis:e||self,n(e.Vue))})(this,function(e){"use strict";const n={class:"component-a"},l=e.createElementVNode("p",{class:"component-a-p"},"component A color gray",-1),r=e.defineComponent({__name:"ComponentA",setup(o){const t=e.defineAsyncComponent(()=>Promise.resolve().then(()=>m));return(c,p)=>(e.openBlock(),e.createElementBlock("div",n,[l,e.createVNode(e.unref(t))]))}}),_=`.component-a .component-a-p{color:#c1bbbb}
`,s=(o,t)=>{const c=o.__vccOpts||o;for(const[p,B]of t)c[p]=B;return c},i=s(r,[["styles",[_]]]),d=e.defineCustomElement(i);customElements.define("component-c",d);const f=e.defineAsyncComponent(()=>Promise.resolve().then(()=>m)),a=e.defineCustomElement(f);customElements.define("component-d",a);const u=`.component-b .component-b-p{color:#4993f1}
`,C={},b={class:"component-b"},h=[e.createElementVNode("p",{class:"component-b-p"},"component B color blue",-1)];function y(o,t){return e.openBlock(),e.createElementBlock("div",b,h)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:s(C,[["render",y],["styles",[u]]])},Symbol.toStringTag,{value:"Module"}))});
