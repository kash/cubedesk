---
name: upgrade-file
description: Upgrade individual Cubedesk files to the modern stack by replacing component Sass usage with Tailwind class names and converting eligible relative imports to the configured @/ alias. Use when the user asks to upgrade a file, modernize a component, remove Sass from a component, convert SCSS/Sass to Tailwind, or fix relative imports in upgraded files.
---

# Upgrade File

## Goal

When upgrading a file in this repo:

1. Remove the file's component-level Sass dependency.
2. Move the equivalent styling into Tailwind CSS class names in the component.
3. Convert eligible relative imports to the `@/` alias.
4. Keep behavior and rendered structure unchanged unless the user asks otherwise.

## Workflow

1. Read the target component and any directly imported `.scss` or `.sass` file.
2. Map each Sass selector used by the component to equivalent Tailwind classes.
3. Remove the Sass import from the component.
4. Delete the Sass file only when it is component-scoped and no other file imports it.
5. Update relative imports that resolve inside `client/` to start with `@/`.
6. Leave relative imports alone when they resolve outside `client/`, target sibling non-code assets, or are intentionally local style/assets that were not migrated.
7. Run lints or targeted type checks when practical, or at minimum use `ReadLints` on edited files.

## Sass To Tailwind Rules

- Preserve existing layout, spacing, color, typography, states, and responsive behavior as closely as possible.
- Prefer Tailwind utilities already used in the repo, including project theme tokens such as `text-text`, `bg-primary`, or similar configured classes.
- Use standard Tailwind scale utilities for spacing, sizing, borders, radii, shadows, typography, and layout whenever they closely match the Sass. Prefer classes like `gap-2`, `px-4`, `w-10`, `rounded-lg`, or theme tokens over hard-coded arbitrary values such as `gap-[8px]`, `w-[40px]`, or `rounded-[8px]`.
- Translate pseudo-classes and states directly: `:hover` to `hover:`, `:focus` to `focus:`, disabled styles to `disabled:`, etc.
- Translate nested selectors by moving classes to the exact JSX elements that previously matched those selectors.
- Do not use Tailwind arbitrary child selector variants like `[&>*]:...` or `[&>...]:...` for Sass-to-Tailwind upgrades. Put the classes on the actual repeated elements/components, adding a narrow `className` prop to a local/shared component when that is the cleanest match.
- For conditional Sass classes, use the repo's existing class composition style. If the file already uses `classNames`, keep using it.
- Avoid adding new CSS files, inline `style`, or broad global selectors unless there is no Tailwind equivalent.
- If a Sass rule cannot be represented cleanly with existing Tailwind utilities or theme tokens, use the smallest arbitrary value/class needed, e.g. `w-[123px]`, and keep it local to the element. Do this for exact visual constraints, not for routine pixel-to-scale conversions.

## Import Alias Rules

The repo maps `@/*` to `client/*`.

- Convert imports like `../../common/Button` to `@/components/common/Button` when they resolve under `client/`.
- Preserve the imported module path suffix and extension style already used by the file.
- Do not convert package imports, absolute imports that already use an alias, or relative paths that resolve outside `client/`.
- After converting, make sure the path points to the same file as before.

## Verification Checklist

- The upgraded component no longer imports its component Sass file.
- Any deleted Sass file has no remaining imports.
- JSX contains Tailwind classes matching the removed Sass behavior.
- Relative imports under `client/` use `@/`.
- No unrelated refactors or formatting churn were introduced.
