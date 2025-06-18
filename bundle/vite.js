// src/lib.ts
var ELEMENTS = [
  "card",
  "card-body",
  "card-buttons",
  "card-header",
  "card-header-rhs",
  "card-icon",
  "card-ribbon",
  "card-title",
  "d1",
  "d2",
  "d3",
  "d4",
  "fiasco-logo",
  "field",
  "field-error",
  "field-help",
  "field-icon-left",
  "field-icon-right",
  "field-input",
  "form-buttons",
  "fx-modal",
  "fx-toggle",
  "hs",
  "ht",
  "icon",
  "modal-blocker",
  "modal-card",
  "modal-close-button",
  "modal-inner-container",
  "modal-outer-container",
  "modal-toolbar",
  "pl",
  "ps",
  "pt",
  "tabs",
  "toggle-thumb",
  "toggle-track",
  "void-logo"
];
function isCustomElement(tag) {
  return ELEMENTS.includes(tag);
}
export {
  isCustomElement
};
