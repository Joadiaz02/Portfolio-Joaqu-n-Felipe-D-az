# Quickstart: Portfolio evolution

## Prerequisites

- Node.js 22.12+ and npm.
- Dependencies installed from the root `package-lock.json`.
- Current CV at `public/documents/cv.pdf`; GLUTN APK at `public/documents/glutn.apk`.
- Public source documentation for project claims is referenced in `research.md`.

## Local validation

```powershell
npm ci
npm run dev
```

Open the Vite URL and verify these user journeys:

1. **Contact**: select email, WhatsApp, Instagram, LinkedIn and GitHub; confirm email uses `mailto:joacodiaz437@gmail.com`, WhatsApp phone path is exactly `5491128657205`, and new browser contexts have `noopener noreferrer`. Activate each with keyboard and inspect visible focus.
2. **Commercial proposal**: confirm the message mentions an idea, need, meeting and quote; use both direct CTAs and verify no fake form or automated price/date claim appears.
3. **Projects**: compare Sala de Juegos, Instabook and GLUTN facts to sources in `research.md`; open each demo/repository and download `/documents/glutn.apk`.
4. **Credentials**: confirm the CV's Digital House and UTN entries appear as text cards; there are no filter controls; no broken image/link appears. If a verified image is later configured, test focus, Tab/Escape, and focus return.
5. **Knowledge**: confirm eight category groups, readable status labels and SAP under interest/exploration. Confirm English B2 and the CV reference; no unsupported certificates/levels appear.
6. **Regression**: navigate all page anchors, open/download CV, use mobile navigation and footer, and confirm reduced motion continues to work.

## Responsive/accessibility review

Inspect viewport widths **320, 375, 768, 1024 and 1440 px**. Confirm no horizontal overflow; certificates use 1 column at mobile widths and 2 at tablet/desktop. Main body text remains at least 16 px on mobile. Check text/interactive color pairs against 4.5:1 for normal text and 3:1 for large text. Test keyboard navigation and reduced-motion preference.

## Automated checks

```powershell
npm run test
npm run lint
npm run build
```

Expected: Vitest passes, ESLint/Prettier pass, and `tsc -b && vite build` produces `dist/` including verified public documents.

## Destination checks

- HTTP(S) projects and social destinations should respond at validation time; a destination failure removes or corrects that action before publication.
- Check the PDF and APK exist in the output build at `/documents/cv.pdf` and `/documents/glutn.apk`.
- Do not check in placeholder certificate assets or repository links for GLUTN unless supplied and verified.

## Production acceptance

Run Lighthouse on production in mobile and desktop modes. Performance, Accessibility, Best Practices and SEO must each exceed 90 in each mode. Record exact results and canonical production URL here after deployment; the current workspace has no Git remote or Vercel project configured.

## Validation record (2026-11-24)

- `npm run test`: 18 test files passed; 25 tests passed, including credential preview focus return after Escape.
- `npm run lint`: passed.
- `npm run build`: passed; the build output includes static assets under `dist/`.
- Automated checks cover contact destinations and safe links, content rendering, credential dialog keyboard behavior, reduced motion foundations, and main landmarks.
- Manual visual review at 320, 375, 768, 1024 and 1440 px remains to be completed in a browser. Confirm no horizontal overflow, the 16 px mobile body text target and contrast at those widths.
- Lighthouse production scores remain pending because this workspace has no configured remote or production deployment.
