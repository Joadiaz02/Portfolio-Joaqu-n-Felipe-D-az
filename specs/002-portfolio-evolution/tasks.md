# Tasks: Evolución del portfolio personal

**Input**: Design documents from `/specs/002-portfolio-evolution/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/portfolio-ui.md`, and `quickstart.md`

**Tests**: The user explicitly requests build, tests, lint, link, responsive, navigation and accessibility validation. Tests are therefore included before implementation in each story.

**Organization**: Tasks grouped by user story in priority order. This is an existing React/Vite app; no stack bootstrap task is needed.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Independent files and no incomplete dependency.
- **[Story]**: User story identifier from `spec.md`.
- Data tasks cite canonical fields in `data-model.md`.

## Phase 1: Shared Model Foundation

**Purpose**: Extend existing domain types to represent researched content and evidence without changing the stack.

- [x] T001 Extend strict domain types in `src/types/portfolio.ts` using `data-model.md` fields `Project.projectType`, `Project.description`, `Project.features`, `Project.evidence`; `Technology.knowledgeStatus`, `Technology.evidence`; `Skill.category`, `Skill.knowledgeStatus`, `Skill.evidence`; `SocialLink.iconKey`, `SocialLink.accessibleLabel`, `SocialLink.visible`, `SocialLink.external`; and add `Language.id`, `Language.name`, `Language.level`, `Language.description`, `Language.certificationReference`, `Language.evidence`.

---

## Phase 2: User Story 1 - Contactar o proponer un proyecto (Priority: P1)

**Goal**: Show five correct contact destinations and an honest commercial invitation with direct email/WhatsApp actions.

**Independent Test**: Activate each channel by keyboard, verify exact `href`, icon, name, focus, and safe external attributes; read the commercial message and confirm no fake form.

### Tests for User Story 1

- [x] T002 [P] [US1] Add tests for the five contact links, WhatsApp URL, icon labels, safe external attributes, no fake form, and commercial CTAs in `src/components/ui/SocialLinks.test.tsx` and `src/sections/ContactSection.test.tsx`.

### Implementation for User Story 1

- [x] T003 [P] [US1] Add the five canonical contact records to `src/data/social-links.ts`, following `data-model.md` fields `SocialLink.id`, `SocialLink.platform`, `SocialLink.label`, `SocialLink.url`, `SocialLink.iconKey`, `SocialLink.accessibleLabel`, `SocialLink.visible`, and `SocialLink.external`; include the encoded WhatsApp greeting and exact provided destinations.
- [x] T004 [P] [US1] Add a local recognizable WhatsApp SVG in `public/icons/whatsapp.svg` and render the five configured icons/names from canonical records in `src/components/ui/SocialLinks.tsx`; validate mailto/HTTPS destinations and safe new-tab attributes without new packages.
- [x] T005 [US1] Expand `src/sections/ContactSection.tsx` with the client proposal, needs, meeting and quote message plus direct email/WhatsApp calls to action; do not add a form or guarantee price/date.
- [x] T006 [US1] Reuse the shared contact collection in `src/components/layout/Footer.tsx` and preserve existing footer identity/year and readable keyboard targets.

**Checkpoint**: Five links work, commercial intent is clear, and Contact has no form submission simulation.

---

## Phase 3: User Story 2 - Comprender proyectos y experiencia aplicada (Priority: P1)

**Goal**: Explain the three projects from repository/CV evidence and expose only available demos, repositories and documents.

**Independent Test**: Compare project copy against `research.md` sources, open each configured URL and verify the local APK.

### Tests for User Story 2

- [x] T007 [P] [US2] Add tests for each project's verified summary, feature/technology badges, source links, safe external attrs and omitted unavailable actions in `src/sections/ProjectsSection.test.tsx` and `src/components/ui/ProjectCard.test.tsx`.

### Implementation for User Story 2

- [x] T008 [P] [US2] Replace placeholder records in `src/data/projects.ts`, following `data-model.md` fields `Project.id`, `Project.name`, `Project.projectType`, `Project.description`, `Project.features`, `Project.technologies`, `Project.demoUrl`, `Project.repositoryUrl`, `Project.downloadPath`, and `Project.evidence`; update the verified file registry in `src/data/documents.ts` following `PublicDocument.kind`, `PublicDocument.publicPath`, `PublicDocument.available`, and `PublicDocument.label`; use only sources documented in `research.md`.
- [x] T009 [P] [US2] Confirm project cards remain text-based and do not include project screenshots or decorative imagery.
- [x] T010 [US2] Update `src/components/ui/ProjectCard.tsx` to display concise app purpose, features, stack and distinct demo/repository/download actions without project screenshots; retain HTTPS validation and `noopener noreferrer`.
- [x] T011 [US2] Update `src/sections/ProjectsSection.tsx` to present Sala de Juegos, Instabook and GLUTN in a responsive grid while retaining existing project anchors.

**Checkpoint**: Project descriptions and actions match project sources; GLUTN APK remains downloadable.

---

## Phase 4: User Story 3 - Leer el portfolio con comodidad (Priority: P1)

**Goal**: Improve text scale and hierarchy across the existing dark visual system without changing its identity.

**Independent Test**: Inspect all text classes and contrast tokens at five widths, verify main mobile body >=16 px, no overflow, visible keyboard focus and unchanged reduced-motion behavior.

### Tests for User Story 3

- [x] T012 [P] [US3] Add/extend tests for readable contact/project labels, accessible action targets, focus and responsive navigation invariants in `src/App.accessibility.test.tsx`, `src/components/layout/Header.test.tsx` and affected section tests.

### Implementation for User Story 3

- [x] T013 [US3] Refine typography scale, content widths, muted text, card descriptions, contact cards, button labels and mobile breakpoints in `src/styles/theme.css` and `src/styles/globals.css`; preserve dark palette tokens, maintain 16 px main mobile text and WCAG AA contrast.

**Checkpoint**: Existing sections remain intact, legibility improves, and the tested viewport range has no horizontal overflow.

---

## Phase 5: User Story 4 - Explorar certificados y estudios (Priority: P2)

**Goal**: Replace filter-first navigation with credential cards; show verified CV credentials and education without broken media/actions.

**Independent Test**: Confirm both CV credentials and UTN education appear; inspect 2/2/1 grid, text-only cards, image dialog keyboard behavior and no filter controls.

### Tests for User Story 4

- [x] T014 [P] [US4] Add tests for certificate order/details, no filters, text-only fallback, optional image/source actions, Escape and focus return in `src/sections/CertificatesSection.test.tsx`, `src/components/ui/CertificateCard.test.tsx`, and `src/sections/EducationSection.test.tsx`.

### Implementation for User Story 4

- [x] T015 [P] [US4] Populate the two CV-backed records in `src/data/certificates.ts` following `data-model.md` fields `Credential.id`, `Credential.name`, `Credential.issuer`, `Credential.type`, `Credential.issuedAt`, `Credential.imagePath`, `Credential.imageAlt`, `Credential.sourceUrl`, `Credential.credentialId`, and `Credential.evidence`; populate UTN in `src/data/education.ts` following `Education.id`, `Education.institution`, `Education.programOrTitle`, `Education.status`, `Education.startDate`, `Education.endDate`, `Education.description`, and `Education.evidence`.
- [x] T016 [US4] Remove filter state/controls from `src/sections/CertificatesSection.tsx`; retain the accessible preview dialog and use `src/components/ui/CertificateCard.tsx` for text cards and available source/image actions.
- [x] T017 [US4] Change certificate layout and card type scale in `src/styles/globals.css` to two columns at tablet/desktop and one on mobile; keep stable image dimensions and no empty/broken media slots.

**Checkpoint**: Credentials remain useful without scans, and the section navigates by reading order only.

---

## Phase 6: User Story 5 - Entender conocimientos, prácticas e intereses (Priority: P2)

**Goal**: Show the requested technologies and methods grouped by category with evidence/status labels, including SAP only as interest.

**Independent Test**: Verify category membership and evidence/status values against CV, project documentation or explicit user input; check status is textual and SAP is never marked applied.

### Tests for User Story 5

- [x] T018 [P] [US5] Add tests for all eight technology groups, knowledge status/evidence labels, SAP interest-only rendering and absence of numeric levels in `src/sections/TechnologiesSection.test.tsx`, `src/components/ui/TechnologyBadge.test.tsx`, and `src/sections/SkillsSection.test.tsx`.

### Implementation for User Story 5

- [x] T019 [P] [US5] Populate `src/data/technologies.ts` following `data-model.md` fields `Technology.id`, `Technology.name`, `Technology.category`, `Technology.description`, `Technology.iconKey`, `Technology.knowledgeStatus`, and `Technology.evidence`; distinguish applied, CV-reported, developer-reported and interest-only records.
- [x] T020 [P] [US5] Populate practical methodology and UX/UI records in `src/data/skills.ts` following `data-model.md` fields `Skill.id`, `Skill.name`, `Skill.description`, `Skill.category`, `Skill.knowledgeStatus`, and `Skill.evidence`; do not label unsupported work as applied or include Figma.
- [x] T021 [US5] Update `src/sections/TechnologiesSection.tsx` and `src/components/ui/TechnologyBadge.tsx` to render categorized names, descriptions and readable knowledge statuses; update `src/sections/SkillsSection.tsx` for the requested practice/UX/UI concepts without proficiency percentages.

**Checkpoint**: The visitor can tell applied work, reported knowledge and SAP interests apart at a glance.

---

## Phase 7: User Story 6 - Mantener el portfolio sin duplicar datos (Priority: P2)

**Goal**: Present English using only CV evidence and keep content updates centralized.

**Independent Test**: Check English B2 and its CV reference; verify the card is rendered from one data record rather than hardcoded copy.

### Tests for User Story 6

- [x] T022 [US6] Add tests that the language card displays the configured level/reference and does not add an unsupported certification in `src/sections/SkillsSection.test.tsx`.

### Implementation for User Story 6

- [x] T023 [US6] Add the English record to `src/data/languages.ts` following `data-model.md` fields `Language.id`, `Language.name`, `Language.level`, `Language.description`, `Language.certificationReference`, and `Language.evidence`, then render it from `src/sections/SkillsSection.tsx`.

**Checkpoint**: English appears as B2, sourced to the current CV, and does not imply a new certification.

---

## Phase 8: Polish & Cross-Cutting Validation

**Purpose**: Document the new content schema and complete automated/manual acceptance checks.

- [x] T024 [P] Update `README.md` with the content modules, verified source policy, new contact data expectations, build/test/lint scripts, and asset paths.
- [x] T025 Run `npm run test`, `npm run lint`, and `npm run build`; fix failures without suppressing validation and confirm CV/APK/capture assets are copied to `dist/`.
- [ ] T026 Complete the responsive, keyboard, reduced-motion, focus/contrast, navigation, WhatsApp/email, repository/demo, CV/APK and certificate manual checks in `specs/002-portfolio-evolution/quickstart.md`; record pass/fail and unresolved blockers.
- [ ] T027 When production deployment is available, measure Lighthouse mobile/desktop, verify all four Lighthouse categories exceed 90, and append the production URL and scores to `specs/002-portfolio-evolution/quickstart.md`.

## Dependencies & Execution Order

- Shared types T001 precede all story work.
- US1: T002 tests before T003â€“T006; T005 and T006 share footer/contact data integration and follow component/data work.
- US2: T007 before T008â€“T011; data edits and card rendering complete before final integration.
- US3: T012 before T013; shared global CSS changes are serialized after the content/layout story styling is available.
- US4: T014 before T015â€“T017; data and education tests can run in parallel; grid uses the final card structure.
- US5: T018 before T019â€“T021; records and skills are independent; rendering follows both.
- US6: T022 before T023; language card can integrate into Skills after US5.
- T024â€“T027 follow the integrated stories; T027 waits for the separate deployment prerequisite.

## Parallel Opportunities

- US1 test task T002 can be drafted while contact record shape is reviewed; data T003 and SVG T004 touch separate files.
- US2 data T008 and image-free card verification T009 touch separate concerns.
- US4 credential/education data within T015 and story tests T014 can be prepared by separate contributors.
- US5 technology T019 and skill T020 use separate data modules.
- US6 test T022 can be written alongside T023's data.

## Implementation Strategy

1. Complete shared model T001.
2. Deliver P1 contact/commercial flow, verified project cards and legibility as independently testable slices.
3. Add P2 credential grid, technology/evidence states and English B2.
4. Run automated checks, then complete the exact responsive/accessibility/link checks from `quickstart.md`.
5. Defer only production Lighthouse measurements until a canonical deployment is accessible.
