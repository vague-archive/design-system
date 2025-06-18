//=================================================================================================
// Template Helpers
//=================================================================================================

function applyTemplate(content: HTMLElement, template: HTMLTemplateElement) {

  const result = template.content.cloneNode(true) as HTMLElement

  const namedSlots = result.querySelectorAll<HTMLSlotElement>("slot[name]")
  for (const slot of namedSlots) {
    const slotContent = content.querySelector(`[slot=${slot.name}]`)
    if (slotContent) {
      slot.replaceChildren(slotContent)
    }
  }

  const defaultSlot = result.querySelector<HTMLSlotElement>("slot:not([name])")
  if (defaultSlot) {
    while (content.firstChild) {
      defaultSlot.appendChild(content.firstChild)
    }
  }

  return content.replaceChildren(result)
}

//=================================================================================================
// Type Assertion Helpers
//=================================================================================================

function $assert(condition: boolean, message?: string): asserts condition is true {
  if (!condition) {
    throw new Error(message ?? "condition is not true")
  }
}

function assertPresent(value: unknown, message?: string): asserts value is NonNullable<unknown> {
  $assert(value !== null && value !== undefined, message ?? "value is not present")
}

const assert: {
  true: typeof $assert,
  present: typeof assertPresent
} = {
  true: $assert,
  present: assertPresent,
}

//=================================================================================================
// Type Narrowing Helpers
//=================================================================================================

function isPresent(value: unknown): value is NonNullable<unknown> {
  return value !== null && value !== undefined
}

function isString(value: unknown): value is string {
  return typeof value === "string"
}

function isKeyboardEvent(e: Event): e is KeyboardEvent {
  return e instanceof KeyboardEvent
}

function isPointerEvent(e: Event): e is PointerEvent {
  return e instanceof PointerEvent
}

function isHTMLElement(value: unknown): value is HTMLElement {
  return value instanceof HTMLElement
}

function isClickedOn(e: Event, selector: string, exclusive?: "exclusive") {
  return isPointerEvent(e) &&
    e.type === "click" &&
    isHTMLElement(e.currentTarget) &&
    e.currentTarget.matches(selector) &&
    (exclusive === undefined || e.currentTarget === e.target)
}

function isKeyUp(e: Event, code: string): e is KeyboardEvent {
  return isKeyboardEvent(e) &&
    e.type === "keyup" &&
    e.code === code
}

const is: {
  present: typeof isPresent
  string: typeof isString
  keyboardEvent: typeof isKeyboardEvent
  pointerEvent: typeof isPointerEvent
  htmlElement: typeof isHTMLElement
  clickedOn: typeof isClickedOn
  keyUp: typeof isKeyUp
} = {
  present: isPresent,
  string: isString,
  keyboardEvent: isKeyboardEvent,
  pointerEvent: isPointerEvent,
  htmlElement: isHTMLElement,
  clickedOn: isClickedOn,
  keyUp: isKeyUp,
}

//=================================================================================================
// TYPE CONVERSION HELPERS
//=================================================================================================

function toBool<T>(value: T, truthy: string[] = []): boolean {
  if (is.string(value)) {
    return ["true", "t", "yes", "on", "1", ...truthy].includes(value.toLowerCase())
  } else {
    return !!value
  }
}

const to = {
  bool: toBool,
}

//=================================================================================================
// EXPORTS
//=================================================================================================

export {
  assert,
  is,
  to,
  applyTemplate,
}

//-------------------------------------------------------------------------------------------------
