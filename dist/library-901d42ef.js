import { defineComponent as p, defineAsyncComponent as t, openBlock as r, createElementBlock as _, createVNode as l, unref as a, createElementVNode as i, defineCustomElement as c } from "vue";
const C = { class: "component-a" }, d = /* @__PURE__ */ i("p", { class: "component-a-p" }, "component A color gray", -1), f = /* @__PURE__ */ p({
  __name: "ComponentA",
  setup(o) {
    const n = t(
      () => import("./ComponentB-5a18830e.js")
    );
    return (e, m) => (r(), _("div", C, [
      d,
      l(a(n))
    ]));
  }
}), u = `.component-a .component-a-p{color:#c1bbbb}
`, E = (o, n) => {
  const e = o.__vccOpts || o;
  for (const [m, s] of n)
    e[m] = s;
  return e;
}, y = /* @__PURE__ */ E(f, [["styles", [u]]]), A = c(y);
customElements.define("component-x", A);
const B = t(
  () => import("./ComponentB-5a18830e.js")
), b = c(B);
customElements.define("component-y", b);
const x = t(
  () => import("./ComponentC-8faaae17.js")
), h = c(x);
customElements.define("component-z", h);
export {
  E as _
};
