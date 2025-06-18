const template = document.createElement('template')
template.innerHTML = `
  <toggle-track>
    <toggle-thumb></toggle-thumb>
  </toggle-track>
  <input type="hidden">`

export class FxToggle extends HTMLElement {
  static get observedAttributes() {
    return [
      "on",
    ]
  }

  #hidden: HTMLInputElement

  get on() {
    return this.hasAttribute("on")
  }

  set on(newState: boolean) {
    if (newState !== this.on) {
      if (newState) {
        this.setAttribute("on", "")
      } else {
        this.removeAttribute("on")
      }
      this.dispatchEvent(new CustomEvent("change", { detail: { on: this.on } }))
    }
  }

  toggle() {
    this.on = !this.on
  }

  constructor() {
    super()
    this.appendChild(template.content.cloneNode(true))
    this.#hidden = this.querySelector("input") as HTMLInputElement
    this.#hidden.name = this.getAttribute("name") ?? "toggle"
  }

  connectedCallback() {
    this.addEventListener("click", this.toggle)
  }

  disconnectedCallback() {
    this.removeEventListener("click", this.toggle)
  }

  attributeChangedCallback(name: string, _old: string, _new: string | undefined) {
    switch(name) {
      case "on":
        this.#hidden.value = this.on ? "1" : "0"
        break
    }
  }
}
