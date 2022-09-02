import { r as registerInstance, g as getAssetPath, h } from './index-e9b87372.js';

const MyComponent$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  async componentDidLoad() {
    console.log("PARENT LOADED");
    return Promise.resolve();
  }
  render() {
    return h("my-child-component", null);
  }
};
MyComponent.style = myComponentCss;

export { MyComponent$1 as my_child_component, MyComponent as my_component };
