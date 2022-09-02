import { Component, h } from '@stencil/core';
export class MyComponent {
  async componentDidLoad() {
    console.log("PARENT LOADED");
    return Promise.resolve();
  }
  render() {
    return h("my-child-component", null);
  }
  static get is() { return "my-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["my-component.css"]
  }; }
}
