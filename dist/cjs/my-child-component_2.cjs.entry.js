'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ded459cd.js');

const MyComponent$1 = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    const rootPath = index.getAssetPath(".");
    const result = await fetch(`${rootPath}t9n/strings.json`);
    this.strings = await result.json();
  }
  async componentDidLoad() {
    console.log("CHILD LOADED");
    return Promise.resolve();
  }
  render() {
    return index.h("div", null, "Hello ", this.strings.name);
  }
  static get assetsDirs() { return ["t9n"]; }
};

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async componentDidLoad() {
    console.log("PARENT LOADED");
    return Promise.resolve();
  }
  render() {
    return index.h("my-child-component", null);
  }
};
MyComponent.style = myComponentCss;

exports.my_child_component = MyComponent$1;
exports.my_component = MyComponent;
