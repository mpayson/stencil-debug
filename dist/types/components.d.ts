/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface MyChildComponent {
    }
    interface MyComponent {
    }
}
declare global {
    interface HTMLMyChildComponentElement extends Components.MyChildComponent, HTMLStencilElement {
    }
    var HTMLMyChildComponentElement: {
        prototype: HTMLMyChildComponentElement;
        new (): HTMLMyChildComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-child-component": HTMLMyChildComponentElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyChildComponent {
    }
    interface MyComponent {
    }
    interface IntrinsicElements {
        "my-child-component": MyChildComponent;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-child-component": LocalJSX.MyChildComponent & JSXBase.HTMLAttributes<HTMLMyChildComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
