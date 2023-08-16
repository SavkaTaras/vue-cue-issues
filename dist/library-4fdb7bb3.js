import { defineComponent as m, openBlock as l, createElementBlock as r, createElementVNode as t, toDisplayString as s, defineAsyncComponent as _, createVNode as u, unref as i, defineCustomElement as p } from "vue";
const d = { class: "component-a" }, C = /* @__PURE__ */ m({
  __name: "ComponentA",
  props: {
    foo: { default: 1 },
    valOne: { default: 2.5 },
    valTwo: { default: 0.5 }
  },
  setup(n) {
    const o = n;
    return (e, c) => (l(), r("div", d, [
      t("p", null, "foo value: " + s(o.foo), 1),
      t("p", null, "typeof foo: " + s(typeof o.foo), 1),
      t("p", null, "Sum: " + s(o.valOne + o.valTwo), 1)
    ]));
  }
}), y = `.component-a .component-a-p{color:#c1bbbb}
`, a = (n, o) => {
  const e = n.__vccOpts || n;
  for (const [c, f] of o)
    e[c] = f;
  return e;
}, b = /* @__PURE__ */ a(C, [["styles", [y]]]), v = { class: "component-b" }, E = /* @__PURE__ */ t("p", { class: "component-b-p" }, "component B color blue", -1), B = /* @__PURE__ */ m({
  __name: "ComponentB",
  setup(n) {
    const o = _(
      () => import("./ComponentC-e94aa00a.js")
    );
    return (e, c) => (l(), r("div", v, [
      E,
      u(i(o))
    ]));
  }
}), h = `.component-b .component-b-p{color:#4993f1}
`, x = /* @__PURE__ */ a(B, [["styles", [h]]]), A = p(b);
customElements.define("component-x", A);
const k = p(x);
customElements.define("component-y", k);
const O = _(
  () => import("./ComponentC-e94aa00a.js")
), $ = p(O);
customElements.define("component-z", $);
export {
  a as _
};
