// src/component/common.ts
function applyTemplate(content, template3) {
  const result = template3.content.cloneNode(true);
  const namedSlots = result.querySelectorAll("slot[name]");
  for (const slot of namedSlots) {
    const slotContent = content.querySelector(`[slot=${slot.name}]`);
    if (slotContent) {
      slot.replaceChildren(slotContent);
    }
  }
  const defaultSlot = result.querySelector("slot:not([name])");
  if (defaultSlot) {
    while (content.firstChild) {
      defaultSlot.appendChild(content.firstChild);
    }
  }
  return content.replaceChildren(result);
}
function $assert(condition, message) {
  if (!condition) {
    throw new Error(message ?? "condition is not true");
  }
}
function assertPresent(value, message) {
  $assert(value !== null && value !== void 0, message ?? "value is not present");
}
var assert = {
  true: $assert,
  present: assertPresent
};
function isPresent(value) {
  return value !== null && value !== void 0;
}
function isString(value) {
  return typeof value === "string";
}
function isKeyboardEvent(e) {
  return e instanceof KeyboardEvent;
}
function isPointerEvent(e) {
  return e instanceof PointerEvent;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement;
}
function isClickedOn(e, selector, exclusive) {
  return isPointerEvent(e) && e.type === "click" && isHTMLElement(e.currentTarget) && e.currentTarget.matches(selector) && (exclusive === void 0 || e.currentTarget === e.target);
}
function isKeyUp(e, code) {
  return isKeyboardEvent(e) && e.type === "keyup" && e.code === code;
}
var is = {
  present: isPresent,
  string: isString,
  keyboardEvent: isKeyboardEvent,
  pointerEvent: isPointerEvent,
  htmlElement: isHTMLElement,
  clickedOn: isClickedOn,
  keyUp: isKeyUp
};
function toBool(value, truthy = []) {
  if (is.string(value)) {
    return ["true", "t", "yes", "on", "1", ...truthy].includes(value.toLowerCase());
  } else {
    return !!value;
  }
}
var to = {
  bool: toBool
};

// src/component/modal.ts
var template = document.createElement("template");
template.innerHTML = `
<modal-blocker></modal-blocker>
<modal-outer-container>
  <modal-inner-container>
    <modal-card>
      <modal-toolbar>
        <modal-close-button>
          <i class="iconoir-xmark"></i>
          </svg>
        </modal-close-button>
      </modal-toolbar>
      <slot></slot>
    </modal-card>
  </modal-inner-container>
</modal-outer-container>
`;
var FxModal = class extends HTMLElement {
  static get observedAttributes() {
    return [
      "show"
    ];
  }
  show() {
    this.setAttribute("show", "show");
    this.dispatchEvent(new Event("show"));
  }
  close() {
    this.removeAttribute("show");
    this.dispatchEvent(new Event("close"));
  }
  get isVisible() {
    return this.hasAttribute("show");
  }
  get closeButton() {
    const button = this.querySelector("modal-close-button");
    assert.present(button);
    return button;
  }
  get closable() {
    return to.bool(this.getAttribute("closable") ?? true);
  }
  constructor() {
    super();
  }
  connectedCallback() {
    applyTemplate(this, template);
    this.closeButton.addEventListener("click", this);
    this.closeButton.classList.toggle("hidden", !this.closable);
    this.querySelector("modal-inner-container").addEventListener("click", this);
    document.addEventListener("keyup", this);
  }
  disconnectedCallback() {
    document.removeEventListener("keyup", this);
  }
  handleEvent(e) {
    if (this.isVisible && this.closable) {
      if (is.keyUp(e, "Escape")) {
        this.close();
      } else if (is.clickedOn(e, "modal-close-button")) {
        this.close();
      } else if (is.clickedOn(e, "modal-inner-container", "exclusive")) {
        this.close();
      }
    }
  }
  attributeChangedCallback(name, _oldValue, _newValue) {
    switch (name) {
      case "show":
        window.document.body.classList.toggle("modal", this.isVisible);
        break;
    }
  }
};

// src/component/toggle.ts
var template2 = document.createElement("template");
template2.innerHTML = `
  <toggle-track>
    <toggle-thumb></toggle-thumb>
  </toggle-track>
  <input type="hidden">`;
var FxToggle = class extends HTMLElement {
  static get observedAttributes() {
    return [
      "on"
    ];
  }
  #hidden;
  get on() {
    return this.hasAttribute("on");
  }
  set on(newState) {
    if (newState !== this.on) {
      if (newState) {
        this.setAttribute("on", "");
      } else {
        this.removeAttribute("on");
      }
      this.dispatchEvent(new CustomEvent("change", { detail: { on: this.on } }));
    }
  }
  toggle() {
    this.on = !this.on;
  }
  constructor() {
    super();
    this.appendChild(template2.content.cloneNode(true));
    this.#hidden = this.querySelector("input");
    this.#hidden.name = this.getAttribute("name") ?? "toggle";
  }
  connectedCallback() {
    this.addEventListener("click", this.toggle);
  }
  disconnectedCallback() {
    this.removeEventListener("click", this.toggle);
  }
  attributeChangedCallback(name, _old, _new) {
    switch (name) {
      case "on":
        this.#hidden.value = this.on ? "1" : "0";
        break;
    }
  }
};

// src/components.ts
window.customElements.define("fx-modal", FxModal);
window.customElements.define("fx-toggle", FxToggle);
