# Changelog

## v0.0.79 - v0.1.13
 * no design system changes
 * migrated to ECS based deployment (lots more changes to .github/workflows)

## v0.0.58 - v0.0.79
 * no design system changes
 * migrated to docker/kamal based deployment config (lots of changes to .github/workflows)

## v0.0.57
 * Added new export `bundle/preset` for use when need to import transpiled tailwind preset (.js) instead of source tailwind preset (.ts) - e.g. in Deno (PITA - can't import .ts from npm packages)

## v0.0.56
 * Update button styles to latest designs

## v0.0.55
 * Update `fx-modal` design and examples

## v0.0.52 - v0.0.54
 * Added `isCustomElement(tag)` helper function (e.g to tell Vue about our custom elements)

## v0.0.51
 * Add styling to checkboxes

## v0.0.50
 * Removed bleed-through grey background from `.code-sample <code>`

## v0.0.49
 * Updated green and yellow colors to match `fel` (green) and `pika` (yellow) from design system

## v0.0.48
 * Added (unstyled) example of a field `<input type="checkbox">`

## v0.0.47
 * Added `<hs>Heading Small</hs>`

## v0.0.42 - v0.0.46
 * no changes - testing deploys, updating readme

## v0.0.41
 * Added base style for `<code>` element

## v0.0.40
 * Added `<ht>Heading Tiny</ht>`
 * Changed `field-help` color from `text-gray-400` to `text-gray-500`
 * Changed `label` and `field-help` to `text-gray-400` IF field is disabled `field:has(input[disabled])`
