import { Component, h, getAssetPath } from '@stencil/core';
export class MyComponent {
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
    return h("div", null,
      "Hello ",
      this.strings.name);
  }
  static get is() { return "my-child-component"; }
  static get encapsulation() { return "shadow"; }
  static get assetsDirs() { return ["t9n"]; }
}
