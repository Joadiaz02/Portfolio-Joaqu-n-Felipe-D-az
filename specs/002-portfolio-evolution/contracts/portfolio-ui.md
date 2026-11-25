# Public UI Contract: Portfolio evolution

The application remains one public, read-only page with no API, login, database, message submission or backend.

## Contact

- Contact presents five named links: email, WhatsApp, Instagram, LinkedIn and GitHub.
- Each icon is decorative to assistive technology; the enclosing action has an accessible name that identifies its channel and, when useful, destination.
- Email opens the configured `mailto:` URI. WhatsApp opens `wa.me/5491128657205` with an optional encoded greeting. Social links open their configured HTTPS destination in a protected new context.
- The commercial message describes proposal, needs, meeting and quote conversations. CTA actions directly open WhatsApp/email; they do not submit a form.
- Contact data is shared with the footer through one source.

## Projects

- Each project card displays verified description and stack, not a title-derived guess.
- Demo, repository and download are separate actions and only render for valid configured destinations.
- New-context web links use `target="_blank"` and `rel="noopener noreferrer"`.
- Project cards remain text-only; they do not render screenshots or decorative imagery.

## Credentials and education

- Certificates are a reading-order grid with two columns on desktop/tablet and one on mobile. There are no filter menus or carousel controls.
- Text credentials remain readable without image/original link.
- Preview controls are separate from original links. A preview dialog has an accessible name, receives focus, closes with Escape, and returns focus to its opener.
- Academic status distinguishes completed from in-progress.

## Knowledge and language

- Technologies are categorized into language, frontend, backend, database, tool, methodology, UX/UI and SAP.
- Each knowledge item displays its state as readable text; color is not the only distinction.
- SAP items are labeled as topics of interest/exploration unless new evidence changes their state.
- English appears as B2 with the CV's First For Schools reference only.

## Accessibility, responsive design, metadata

- All actions are keyboard operable with visible focus and accessible names.
- Text contrast meets WCAG 2.2 AA. Main mobile body text is at least 16 px.
- Layout supports widths 320, 375, 768, 1024 and 1440 px without involuntary horizontal scrolling.
- Reduced-motion preference and existing page metadata behavior remain intact.
- Current header, footer, hero, CV download, project demo actions and section anchors remain available.
