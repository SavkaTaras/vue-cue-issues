import { defineComponent as m, openBlock as l, createElementBlock as r, createElementVNode as c, toDisplayString as p, defineAsyncComponent as _, createVNode as i, unref as u, defineCustomElement as s } from "vue";
const d = { class: "component-a" }, C = /* @__PURE__ */ m({
  __name: "ComponentA",
  props: {
    foo: { default: 1 },
    baz: { default: "" }
  },
  setup(n) {
    const o = n;
    return (e, t) => (l(), r("div", d, [
      c("p", null, "foo value: " + p(o.foo), 1),
      c("p", null, "typeof foo: " + p(typeof o.foo), 1)
    ]));
  }
}), b = `.component-a .component-a-p{color:#c1bbbb}
`, a = (n, o) => {
  const e = n.__vccOpts || n;
  for (const [t, f] of o)
    e[t] = f;
  return e;
}, y = /* @__PURE__ */ a(C, [["styles", [b]]]), E = { class: "component-b" }, B = /* @__PURE__ */ c("p", { class: "component-b-p" }, "component B color blue", -1), h = /* @__PURE__ */ m({
  __name: "ComponentB",
  setup(n) {
    const o = _(
      () => import("./ComponentC-ce9e136e.js")
    );
    return (e, t) => (l(), r("div", E, [
      B,
      i(u(o))
    ]));
  }
}), v = `.component-b .component-b-p{color:#4993f1}
`, x = /* @__PURE__ */ a(h, [["styles", [v]]]), A = s(y);
customElements.define("component-x", A);
const k = s(x);
customElements.define("component-y", k);
const $ = _(
  () => import("./ComponentC-ce9e136e.js")
), g = s($);
customElements.define("component-z", g);
export {
  a as _
};
