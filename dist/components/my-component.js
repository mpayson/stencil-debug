import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './my-child-component2.js';

const myComponentCss = ":host{display:block}";

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  async componentDidLoad() {
    console.log("PARENT LOADED");
    return Promise.resolve();
  }
  render() {
    return h("my-child-component", null);
  }
  static get style() { return myComponentCss; }
}, [1, "my-component"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-component", "my-child-component"];
  components.forEach(tagName => { switch (tagName) {
    case "my-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyComponent$1);
      }
      break;
    case "my-child-component":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}
defineCustomElement$1();

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
