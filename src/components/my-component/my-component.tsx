import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  async componentDidLoad(): Promise<void> {
    console.log("PARENT LOADED");
    return Promise.resolve();
  }

  render() {
    return <my-child-component></my-child-component>;
  }
}
