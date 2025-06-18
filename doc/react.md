# Integrating into a React project

Note that the Fiasco design system is currently on **Tailwind v3**.


1. `bun add -d tailwindcss@3 postcss autoprefixer`
2. Add a `postcss.config.cjs` file in the root directory of the project. The contents of the file should include:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

3. Add a `tailwind.config.ts` file in the root directory of the project. Add the paths of your template files, and include
the design system components:

```ts
import type { Config } from "tailwindcss";
import preset from "@vaguevoid/design-system/preset";

const config: Config = {
  content: [
      "./index.html",
      "./src/**/*.{tsx,ts}",
      "./node_modules/@vaguevoid/design-system/src/component/*.ts",
  ],
  theme: {
      extend: {},
  },
  plugins: [],
  presets: [preset],
};

export default config;
```

4. Add a `tailwind.css` file to `src` (or wherever your content lives).

```css
@import "@vaguevoid/design-system/base.css";
@import "@vaguevoid/design-system/components.css";
@import "@vaguevoid/design-system/utilities.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Import `tailwind.css` in your `main.tsx` file. At this point you have access to the design system classes
and custom elements, but using custom elements will cause type errors.

6. To fix the type errors, add a file `customElements.ts` in `src`.

```ts
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
```

7. Import this file into `main.tsx`. Type errors should now be resolved.
