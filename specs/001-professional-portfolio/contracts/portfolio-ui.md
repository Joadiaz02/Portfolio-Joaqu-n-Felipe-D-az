# Public UI Contract

The portfolio exposes a public, read-only page to visitors. It has no public API, authentication, form submission endpoint, backend, or database.

## Navigation and page structure

- Provide one page with semantic sections and stable fragment identifiers for home, about, projects, technologies, certificates, and contact; other content sections remain reachable in the page.
- The header navigation identifies the current section where supported. Selecting a mobile menu item navigates to that section and closes the mobile menu.
- A skip link moves keyboard users to the main content. Heading levels and landmarks describe the page structure.
- The footer presents the developer identity, current year, section links, and only configured social links.

## Project and contact links

- Render demo, repository, social, email, CV, certificate, and APK actions only when their destinations/files are configured and verified.
- External web destinations use HTTPS and safe new-tab behavior when opened in a new context. Email uses `mailto:`.
- A missing CV/APK/certificate file results in no download/open action, not a broken link.
- A contact action opens its configured direct destination; the page does not claim to submit a message.

## Certificate filtering and preview

- Filters are available for type, institution, and year/date; active filters combine with AND semantics.
- Announce or visibly show the result count, provide an empty-results message, and provide a clear-all action.
- A credential preview is keyboard operable, has an accessible name, moves focus into the dialog, closes on Escape, and returns focus to its trigger. The original credential link remains separate from preview controls.

## Accessibility and motion

- All actions are keyboard operable, have visible focus and accessible names, and images that convey information have useful alternative text.
- Do not nest interactive controls. Do not use color alone to convey status.
- Respect `prefers-reduced-motion`; content and state changes remain understandable with animations reduced/disabled.
- Target WCAG 2.2 AA and the responsive width range starting at 320 px.

## Metadata and availability

- The document title and description identify Joaquín and his software developer profile. Social preview metadata and index directives reflect the deployed site.
- Unconfirmed profile claims, project technologies, social destinations, academic status, and credential details must not be presented as verified facts.
