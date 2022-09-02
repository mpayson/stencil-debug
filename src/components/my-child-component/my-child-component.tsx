import { Component, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'my-child-component',
  shadow: true,
  assetsDirs: ["t9n"]
})
export class MyComponent {

  private strings: Record<string, string>;

  async componentWillLoad(): Promise<void> {
    const rootPath = getAssetPath(".");
    const result = await fetch(`${rootPath}t9n/strings.json`);
    this.strings = await result.json();
  }

  async componentDidLoad(): Promise<void> {
    console.log("CHILD LOADED");
    return Promise.resolve();
  }

  render() {
    return <div>Hello {this.strings.name}</div>;
  }
}
