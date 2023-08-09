import { openBlock as t, createElementBlock as c, createElementVNode as s, defineComponent as a, createVNode as d, defineCustomElement as m } from "vue";
const i = `.component-b .component-b-p{color:#4993f1}
`, _ = (o, n) => {
  const e = o.__vccOpts || o;
  for (const [r, l] of n)
    e[r] = l;
  return e;
}, f = {}, u = { class: "component-b" }, b = /* @__PURE__ */ s("p", { class: "component-b-p" }, "component B color blue", -1), h = [
  b
];
function C(o, n) {
  return t(), c("div", u, h);
}
const p = /* @__PURE__ */ _(f, [["render", C], ["styles", [i]]]), E = { class: "component-a" }, y = /* @__PURE__ */ s("p", { class: "component-a-p" }, "component A color gray", -1), B = /* @__PURE__ */ a({
  __name: "ComponentA",
  setup(o) {
    return (n, e) => (t(), c("div", E, [
      y,
      d(p)
    ]));
  }
}), v = `.component-a .component-a-p{color:#c1bbbb}
`, A = /* @__PURE__ */ _(B, [["styles", [v]]]), $ = m(A);
customElements.define("component-c", $);
const k = m(p);
customElements.define("component-d", k);
