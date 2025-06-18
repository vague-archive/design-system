# Fiasco Design System

![screenshot](screenshot.png?raw=true)

An implementation of the Fiasco design system that is framework agnostic and can be used
across all of our UX. It exports a base stylesheet, a (small) set of vanilla web components,
and a tailwind preset.

  * [See it in action](https://design-system.void.dev/)
  * [Compare vs Figma](https://www.figma.com/design/LOvFXrwBY9SK2jnEFV4RO9/%F0%9F%8F%B0-Hyrule-Design-System?node-id=248-646&t=CqSDSy8oI7tFEwmb-0)

## Installation

Install the package:

```bash
> bun install --dev @vaguevoid/design-system
```

> NOTE: it's our private registry, so you'll need an auth token in `bunfig.toml` file (a-la-SDK)


### Using Tailwind

To install the design system in an app that is already using Tailwind (recommended)...

1. Add our preset to your `tailwind.config.ts`

```typescript
  presets: [
    require("@vaguevoid/design-system/preset").default     // NOTE: .default is optional for node, but required for --bun
  ],
  content: [
    // ...
    "./node_modules/@vaguevoid/design-system/src/component/*.ts",
  ],
```

> SIDE NOTE: if your environment wont let you import the preset as a typescript file (looking at you Deno) then
you can require the transpiled `@vaguevoid/design-system/bundle/preset` instead

2. Import our styles into your `tailwind.css` (or equivalent)

```css
@import "@vaguevoid/design-system/base.css"
@import "@vaguevoid/design-system/components.css"
@import "@vaguevoid/design-system/utilities.css"

@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Import our components into your `main.ts` (or equivalent)

```typescript
import "@vaguevoid/design-system/components"
```

### [ALTERNATIVE] Use prebuild bundles

To install the design system into an application that is not using Tailwind, use our prebuilt css and javascript bundles

1. Import our bundled **script** into your `index.ts` (or equivalent)

```typescript
import "@vaguevoid/design-system/bundle/fiasco.js"
```

2. Import our bundled **styles** into your `index.css` (or equivalent)

```css
@import "@vaguevoid/design-system/bundle/fiasco.css"
```

## Development

If you are working on this design system, we use [bun](https://bun.sh/)
and the following development tasks are available:

```bash
> bun install   # install dependencies
> bun dev       # run dev server
> bun bundle    # rebuild bundled assets
```

**IMPORTANT**: Always remember to run `bun run bundle` before committing your changes to
ensure the bundles are up to date. Also try to update the `CHANGELOG.md` with some comments about
your changes
