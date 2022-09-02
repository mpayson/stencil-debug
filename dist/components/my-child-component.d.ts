import type { Components, JSX } from "../types/components";

interface MyChildComponent extends Components.MyChildComponent, HTMLElement {}
export const MyChildComponent: {
  prototype: MyChildComponent;
  new (): MyChildComponent;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
