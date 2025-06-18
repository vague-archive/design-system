import type { HTMLAttributes } from "react"

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "card": HTMLAttributes<HTMLElement>;
      "card-body": HTMLAttributes<HTMLElement>;
      "card-buttons": HTMLAttributes<HTMLElement>;
      "card-header": HTMLAttributes<HTMLElement>;
      "card-header-rhs": HTMLAttributes<HTMLElement>;
      "card-icon": HTMLAttributes<HTMLElement>;
      "card-ribbon": HTMLAttributes<HTMLElement>;
      "card-title": HTMLAttributes<HTMLElement>;
      "d1": HTMLAttributes<HTMLElement>;
      "d2": HTMLAttributes<HTMLElement>;
      "d3": HTMLAttributes<HTMLElement>;
      "d4": HTMLAttributes<HTMLElement>;
      "fiasco-logo": HTMLAttributes<HTMLElement>;
      "field": HTMLAttributes<HTMLElement>;
      "field-error": HTMLAttributes<HTMLElement>;
      "field-help": HTMLAttributes<HTMLElement>;
      "field-icon-left": HTMLAttributes<HTMLElement>;
      "field-icon-right": HTMLAttributes<HTMLElement>;
      "field-input": HTMLAttributes<HTMLElement>;
      "form-buttons": HTMLAttributes<HTMLElement>;
      "fx-modal": HTMLAttributes<HTMLElement>;
      "fx-toggle": HTMLAttributes<HTMLElement>;
      "hs": HTMLAttributes<HTMLElement>;
      "ht": HTMLAttributes<HTMLElement>;
      "icon": HTMLAttributes<HTMLElement>;
      "modal-blocker": HTMLAttributes<HTMLElement>;
      "modal-card": HTMLAttributes<HTMLElement>;
      "modal-close-button": HTMLAttributes<HTMLElement>;
      "modal-inner-container": HTMLAttributes<HTMLElement>;
      "modal-outer-container": HTMLAttributes<HTMLElement>;
      "modal-toolbar": HTMLAttributes<HTMLElement>;
      "pl": HTMLAttributes<HTMLElement>;
      "ps": HTMLAttributes<HTMLElement>;
      "pt": HTMLAttributes<HTMLElement>;
      "tabs": HTMLAttributes<HTMLElement>;
      "toggle-thumb": HTMLAttributes<HTMLElement>;
      "toggle-track": HTMLAttributes<HTMLElement>;
      "void-logo": HTMLAttributes<HTMLElement>;
    }
  }
}
