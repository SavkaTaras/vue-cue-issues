(function(e,t){typeof exports=="object"&&typeof module<"u"?t(require("vue")):typeof define=="function"&&define.amd?define(["vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.Vue))})(this,function(e){"use strict";const t={class:"component-a"},p=e.defineComponent({__name:"ComponentA",props:{foo:{default:1},valOne:{default:2.5},valTwo:{default:.5}},setup(n){const o=n;return(c,l)=>(e.openBlock(),e.createElementBlock("div",t,[e.createElementVNode("p",null,"foo value: "+e.toDisplayString(o.foo),1),e.createElementVNode("p",null,"typeof foo: "+e.toDisplayString(typeof o.foo),1),e.createElementVNode("p",null,"Sum: "+e.toDisplayString(o.valOne+o.valTwo),1)]))}}),r=`.component-a .component-a-p{color:#c1bbbb}
`,s=(n,o)=>{const c=n.__vccOpts||n;for(const[l,k]of o)c[l]=k;return c},_=s(p,[["styles",[r]]]),i={class:"component-b"},f=e.createElementVNode("p",{class:"component-b-p"},"component B color blue",-1),d=s(e.defineComponent({__name:"ComponentB",setup(n){const o=e.defineAsyncComponent(()=>Promise.resolve().then(()=>m));return(c,l)=>(e.openBlock(),e.createElementBlock("div",i,[f,e.createVNode(e.unref(o))]))}}),[["styles",[`.component-b .component-b-p{color:#4993f1}
`]]]),a=e.defineCustomElement(_);customElements.define("component-x",a);const C=e.defineCustomElement(d);customElements.define("component-y",C);const y=e.defineAsyncComponent(()=>Promise.resolve().then(()=>m)),u=e.defineCustomElement(y);customElements.define("component-z",u);const E=`.component-c .component-c-p{color:#be0f0f}
`,h={},b={class:"component-c"},$=[e.createElementVNode("p",{class:"component-c-p"},"component C color red",-1)];function B(n,o){return e.openBlock(),e.createElementBlock("div",b,$)}const m=Object.freeze(Object.defineProperty({__proto__:null,default:s(h,[["render",B],["styles",[E]]])},Symbol.toStringTag,{value:"Module"}))});
