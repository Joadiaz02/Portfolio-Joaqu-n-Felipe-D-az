# Research: Portfolio profesional personal

**Date**: 2026-11-24  
**Scope**: Resolve integration choices for the user-selected React/Vite stack, test toolchain, static documents, and GitHub-to-Vercel deployment. No product-scope questions remain open.

## Decisions

### React, TypeScript, and Vite

- Use Vite's React + TypeScript starter and the official React integration.
- Enable TypeScript `strict: true`. Include `tsc -b` (or an equivalent project type-check command) before `vite build`; Vite transpiles TypeScript but does not type-check it.
- Use Node.js 22.12+ as the project tooling baseline and verify it against the exact stable Vite/Vitest versions selected when dependencies are installed.
- Use current stable compatible package versions, pin them through the npm lockfile, and avoid experimental React APIs.

**Rationale**: The user specified a Vite SPA, React 19, and strict TypeScript. Type checking must be explicit so a successful bundle also satisfies the type constraint.

**Alternatives considered**: A server-rendered framework, backend, and database add capabilities outside the public static portfolio's scope. A separate TypeScript build system is unnecessary because Vite already owns the app build.

Sources: [React versions](https://react.dev/versions), [Vite guide](https://vite.dev/guide/), [Vite TypeScript features](https://vite.dev/guide/features.html), [TypeScript strict option](https://www.typescriptlang.org/tsconfig/strict.html).

### Tailwind CSS and design tokens

- Use Tailwind CSS 4 through the official `@tailwindcss/vite` plugin and import Tailwind from the global stylesheet.
- Define the dark-first palette, typography, spacing, borders, shadows, and transition tokens centrally in CSS; connect shared values to Tailwind's theme where useful.
- Keep custom CSS for global resets, document defaults, and details that are clearer than utility classes.

**Rationale**: The Tailwind Vite plugin is the current official integration; its compile-time output avoids a browser runtime. Central tokens satisfy the constitution and keep the dark theme consistent.

**Alternatives considered**: The legacy Tailwind v3/PostCSS setup is unnecessary unless a compatibility constraint appears. A second CSS framework or theme library would add dependencies without product value.

Sources: [Tailwind CSS with Vite](https://tailwindcss.com/docs/installation/using-vite), [Tailwind upgrade guide](https://tailwindcss.com/docs/upgrade-guide).

### Motion and reduced motion

- Install the current Motion for React package `motion`; import its React APIs from `motion/react`.
- Apply `MotionConfig` with `reducedMotion="user"` at the app boundary, then use `useReducedMotion` only where a specific alternate behavior is needed.
- Prefer brief opacity/transform transitions; do not make motion necessary to discover or use content.

**Rationale**: Motion is compatible with React 18.2+ and works with Vite without special configuration. Its documented reduced-motion APIs satisfy the explicit accessibility requirement.

**Alternatives considered**: The historical `framer-motion` package/import path is not needed for a new install; avoid a second animation package and avoid continuous/parallax effects.

Sources: [Motion installation](https://motion.dev/docs/react-installation), [Motion accessibility](https://motion.dev/docs/react-accessibility), [Motion reduced-motion hook](https://motion.dev/docs/react-use-reduced-motion).

### Lucide React

- Use `lucide-react` and statically import only icons rendered by the portfolio.
- Map content icon keys to a small typed icon registry rather than dynamically importing an entire icon set from data.
- Give decorative icons hidden semantics; provide accessible names through the surrounding button/link text or an explicit label.

**Rationale**: Named static imports allow unused icons to be omitted from the bundle and avoid loading the full icon set.

**Alternatives considered**: A complete icon font, global icon bundle, or dynamic icon lookup adds payload and complexity.

Sources: [Lucide React guide](https://lucide.dev/guide/react/), [Lucide getting started](https://lucide.dev/guide/react/getting-started).

### ESLint, Prettier, Vitest, and React Testing Library

- Configure ESLint with its flat config and `typescript-eslint` recommended rules; TypeScript strict compiler checks remain the primary type safety gate. Avoid typed linting unless it solves a demonstrated issue.
- Use Prettier as the formatter and `eslint-config-prettier` at the end of the ESLint config to prevent conflicting formatting rules.
- Use Vitest with the existing Vite configuration and `jsdom` for component tests that need a browser-like DOM.
- Use React Testing Library with queries based on accessible roles and names. Add `@testing-library/dom` as required by its peer dependency and `@testing-library/user-event` for realistic keyboard and form/filter interactions.
- Set `test` to run once (`vitest run`) for predictable local and CI behavior. Include type checking in `build`; keep `lint` focused on ESLint and Prettier validation.

**Rationale**: Vitest shares Vite's transform/configuration ecosystem. DOM, user-event, and peer packages enable meaningful tests for navigation, filters, dialogs, and accessibility interactions. Each added package serves a named test requirement.

**Alternatives considered**: Jest or Enzyme would duplicate the chosen runner/component-testing approach. Avoid adding browser automation tooling unless a later acceptance need cannot be covered by unit/component and manual responsive checks.

Sources: [ESLint configuration](https://eslint.org/docs/latest/use/configure/configuration-files), [typescript-eslint configs](https://typescript-eslint.io/users/configs/), [Prettier installation](https://prettier.io/docs/install/), [Vitest guide](https://vitest.dev/guide/), [Vitest environments](https://vitest.dev/guide/environment), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [Testing Library queries](https://testing-library.com/docs/queries/about/), [user-event](https://testing-library.com/docs/user-event/intro/).

### Static documents and assets

- Keep stable downloadable files under `public/documents/` as requested. Reference them with root paths (for example `/documents/cv.pdf` and `/documents/certificates/<verified-file>`), not `/public/...`.
- Check that each configured file exists before rendering its link. Keep image/media assets that benefit from module imports and build fingerprinting under `src/assets/`.

**Rationale**: Vite copies public assets unchanged to the build root, preserving stable filenames for downloads. Imported assets remain available for ordinary image usage where a content hash is beneficial.

**Alternatives considered**: Renaming user-requested CV/APK paths at build time can break shared direct links. A remote file service is unnecessary for this static site.

Sources: [Vite static asset handling](https://vite.dev/guide/assets), [Vite public directory option](https://vite.dev/config/shared-options#publicdir).

### GitHub and Vercel delivery

- Connect the GitHub repository to Vercel. Configure the repository's principal branch as the Production Branch; pushes/merges to it create production deployments and other branches create Preview deployments.
- Review preview deployments for responsive behavior, document paths, and acceptance criteria before merging to the production branch.
- Keep deployment configuration minimal and avoid secrets because no backend or private environment values are required.

**Rationale**: This matches the requested deployment flow and provides a reviewable preview before production.

**Alternatives considered**: Manual-only CLI deployment would lose the requested automatic production and preview workflow.

Sources: [Vercel Git deployments](https://vercel.com/docs/git), [Vercel for GitHub](https://vercel.com/docs/git/vercel-for-github).

### npm scripts and reproducibility

- Provide `dev`, `build`, `test`, and `lint` package scripts as requested. `build` must type-check before bundling; `test` runs Vitest once; `lint` runs ESLint and a Prettier check.
- Commit `package-lock.json`; use `npm ci` in clean CI environments.

**Rationale**: The lockfile gives Vercel and local contributors a reproducible dependency graph. `npm ci` enforces lock/package consistency.

**Alternatives considered**: An additional package manager or unchecked floating versions conflict with the npm choice and reproducibility requirement.

Sources: [npm run](https://docs.npmjs.com/cli/v12/commands/npm-run/), [npm ci](https://docs.npmjs.com/cli/v11/commands/npm-ci/).

## Research Outcome

The user-provided stack is feasible as a static React/Vite application. No unresolved technical choices block the design. Exact patch versions are intentionally selected when the project is initialized so the chosen stable releases can be locked together and checked against the declared Node baseline.
