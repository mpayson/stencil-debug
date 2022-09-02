import { proxyCustomElement, HTMLElement, getAssetPath, h } from '@stencil/core/internal/client';

const MyComponent = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  async componentWillLoad() {
    const rootPath = getAssetPath(".");
    const result = await fetch(`${rootPath}t9n/strings.json`);
    this.strings = await result.json();
  }
  async componentDidLoad() {
    console.log("CHILD LOADED");
    return Promise.resolve();
  }
  render() {
    return h("div", null, "Hello ", this.strings.name);
  }
  static get assetsDirs() { return ["t9n"]; }
}, [1, "my-child-component"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-child-component"];
  components.forEach(tagName => { switch (tagName) {
    case "my-child-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyComponent);
      }
      break;
  } });
}
defineCustomElement();

export { MyComponent as M, defineCustomElement as d };
