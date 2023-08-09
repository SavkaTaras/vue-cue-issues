import { defineComponent as p, defineAsyncComponent as c, openBlock as r, createElementBlock as _, createVNode as a, unref as l, createElementVNode as i, defineCustomElement as s } from "vue";
const d = { class: "component-a" }, f = /* @__PURE__ */ i("p", { class: "component-a-p" }, "component A color gray", -1), C = /* @__PURE__ */ p({
  __name: "ComponentA",
  setup(o) {
    const e = c(
      () => import("./ComponentB-eb110c94.js")
    );
    return (n, t) => (r(), _("div", d, [
      f,
      a(l(e))
    ]));
  }
}), u = `.component-a .component-a-p{color:#c1bbbb}
`, E = (o, e) => {
  const n = o.__vccOpts || o;
  for (const [t, m] of e)
    n[t] = m;
  return n;
}, y = /* @__PURE__ */ E(C, [["styles", [u]]]), A = s(y);
customElements.define("component-c", A);
const B = c(
  () => import("./ComponentB-eb110c94.js")
), b = s(B);
customElements.define("component-d", b);
export {
  E as _
};
