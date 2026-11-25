# Quickstart: Portfolio profesional personal

This guide is the implementation-time validation path for the portfolio. The source files may not exist until the implementation tasks are completed.

## Prerequisites

- Node.js 22.12+ and npm compatible with the selected stable Vite/Vitest releases.
- GitHub access to the project repository and Vercel access for preview/production deployment validation.
- Verified portfolio content and the public files that are ready to publish (CV, APK, certificates, project images/links).

## Local setup

From the repository root, install from the committed lockfile and start the development server:

```powershell
npm ci
npm run dev
```

Open the local URL printed by Vite. Review the page at 320 px, tablet, and desktop widths. Use the keyboard to traverse navigation and actions. Enable the operating system's reduced-motion setting and repeat the interaction checks.

## Automated quality gates

Run from a clean checkout:

```powershell
npm run lint
npm run test
npm run build
```

Expected outcomes:

- ESLint and Prettier report no issues.
- Vitest passes the component/data utility tests, including navigation, combined credential filters, empty results, missing documents/links, and dialog keyboard behavior.
- Build completes only after TypeScript checks pass and produces the static site output.

## Production preview and Lighthouse

After a successful build, serve the built site with Vite's local preview command:

```powershell
npm exec vite preview -- --host 127.0.0.1
```

Run Lighthouse against the preview in mobile and desktop modes. Performance, Accessibility, Best Practices, and SEO must each score above 90 in both modes. Check that image/document URLs resolve from the built site, especially `/documents/cv.pdf`, `/documents/glutn.apk`, and configured files under `/documents/certificates/`.

## User acceptance checks

1. A reviewer unfamiliar with the portfolio identifies Joaquín's professional profile and reaches Projects in under 60 seconds.
2. Navigate every section by keyboard and mobile menu; focus is visible, active navigation is understandable, and selecting a mobile item closes the menu.
3. Combine certificate type, issuer, and date filters; verify matching results, result count, empty state, clear-all, dialog Escape behavior, and focus return.
4. Check configured and missing destinations separately. Only verified links/files render as actions; no project description, technology, degree, availability, or credential claim is invented.
5. Confirm reduced motion, responsive layouts, metadata, footer year, safe external links, and absence of horizontal overflow.

## Deployment validation

- Connect the GitHub repository to Vercel and set the intended principal branch as the Production Branch.
- Confirm a change on a non-production branch creates a Preview deployment; review it against the user acceptance checks.
- Confirm a merge/push to the configured production branch creates a Production deployment and the root route, metadata, and public document paths resolve.
