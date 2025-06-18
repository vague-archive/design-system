import { assert, is, to, applyTemplate } from "./common"

const template = document.createElement('template')
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
`

export class FxModal extends HTMLElement {
  static get observedAttributes() {
    return [
      "show",
    ]
  }

  show() {
    this.setAttribute("show", "show")
    this.dispatchEvent(new Event("show"))
  }

  close() {
    this.removeAttribute("show")
    this.dispatchEvent(new Event("close"))
  }

  get isVisible() {
    return this.hasAttribute("show")
  }

  get closeButton() {
    const button = this.querySelector("modal-close-button") as HTMLButtonElement
    assert.present(button)
    return button
  }

  get closable() {
    return to.bool(this.getAttribute("closable") ?? true)
  }

  constructor() {
    super()
  }

  connectedCallback() {
    applyTemplate(this, template)
    this.closeButton.addEventListener("click", this)
    this.closeButton.classList.toggle("hidden", !this.closable)
    this.querySelector("modal-inner-container")!.addEventListener("click", this)
    document.addEventListener("keyup", this)
  }

  disconnectedCallback() {
    document.removeEventListener("keyup", this)
  }

  handleEvent(e: Event) {
    if (this.isVisible && this.closable) {
      if (is.keyUp(e, "Escape")) {
        this.close()
      } else if (is.clickedOn(e, "modal-close-button")) {
        this.close()
      } else if (is.clickedOn(e, "modal-inner-container", "exclusive")) {
        this.close()
      }
    }
  }

  attributeChangedCallback(name: string, _oldValue: string, _newValue: string) {
    switch(name) {
      case "show":
        window.document.body.classList.toggle("modal", this.isVisible) // enable body.modal custom css to prevent body scrolling
        break
    }
  }
}
