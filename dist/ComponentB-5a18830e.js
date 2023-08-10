import { defineComponent as e, defineAsyncComponent as n, openBlock as t, createElementBlock as c, createVNode as p, unref as s, createElementVNode as m } from "vue";
import { _ as r } from "./library-901d42ef.js";
const _ = { class: "component-b" }, l = /* @__PURE__ */ m("p", { class: "component-b-p" }, "component B color blue", -1), a = /* @__PURE__ */ e({
  __name: "ComponentB",
  setup(i) {
    const o = n(
      () => import("./ComponentC-8faaae17.js")
    );
    return (d, u) => (t(), c("div", _, [
      l,
      p(s(o))
    ]));
  }
}), f = `.component-b .component-b-p{color:#4993f1}
`, B = /* @__PURE__ */ r(a, [["styles", [f]]]);
export {
  B as default
};
