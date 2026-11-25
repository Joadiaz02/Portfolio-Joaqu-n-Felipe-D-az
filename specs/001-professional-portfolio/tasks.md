# Tasks: Portfolio profesional personal

**Input**: Design documents from `/specs/001-professional-portfolio/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/portfolio-ui.md`, and `quickstart.md`

**Tests**: Component and utility test tasks are included because project governance and the approved design require unit/integration coverage. Each story writes its relevant tests before implementation.

**Organization**: Tasks are grouped by user story in descending priority. File paths follow the single-project structure in `plan.md`.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Independent work in separate files with no incomplete dependency.
- **[Story]**: User story identifier from `spec.md`.
- Each task includes concrete file paths. Constrained data fields cite their canonical `data-model.md` entity fields.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Vite React application and development toolchain.

- [X] T001 Initialize the Vite React 19 + TypeScript strict app with TypeScript, React, Vite and the official React plugin, Tailwind CSS 4 with `@tailwindcss/vite`, Motion (`motion`), Lucide React (`lucide-react`), npm lockfile, and base entry/configuration in `package.json`, `package-lock.json`, `index.html`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, and `src/main.tsx`.
- [X] T002 Add ESLint, `typescript-eslint`, Prettier, `eslint-config-prettier`, Vitest, jsdom, React Testing Library, `@testing-library/dom`, and `@testing-library/user-event`; define `dev` as `vite`, `build` as `tsc -b && vite build`, `test` as `vitest run`, and `lint` as ESLint plus Prettier checks in `package.json` and `package-lock.json`.
- [X] T003 Configure ESLint flat rules, Prettier, Vitest and shared test cleanup/setup in `eslint.config.js`, `.prettierrc.json`, `.prettierignore`, `.gitignore`, `vite.config.ts`, and `src/test/setup.ts`; configure Vitest to use the existing Vite settings.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish the typed domain and accessible page shell used by all stories.

**Checkpoint**: Complete this phase before starting user-story work.

- [X] T004 Define shared TypeScript interfaces and unions in `src/types/portfolio.ts`, using `data-model.md` as canonical for `PersonalProfile.fullName`, `PersonalProfile.professionalTitle`, `PersonalProfile.summary`, `PersonalProfile.about`, `PersonalProfile.interests`, `PersonalProfile.portraitPath`, `PersonalProfile.availability`; `Project.id`, `Project.name`, `Project.description`, `Project.purpose`, `Project.category`, `Project.technologies`, `Project.participation`, `Project.imagePath`, `Project.imageAlt`, `Project.demoUrl`, `Project.repositoryUrl`, `Project.downloadPath`; `Technology.id`, `Technology.name`, `Technology.category`, `Technology.description`, `Technology.iconKey`, `Technology.level`; `Skill.id`, `Skill.name`, `Skill.description`, `Skill.iconKey`; `Education.id`, `Education.institution`, `Education.programOrTitle`, `Education.status`, `Education.startDate`, `Education.endDate`, `Education.description`, `Education.imagePath`, `Education.imageAlt`; `Credential.id`, `Credential.name`, `Credential.issuer`, `Credential.type`, `Credential.issuedAt`, `Credential.imagePath`, `Credential.imageAlt`, `Credential.sourceUrl`, `Credential.credentialId`; `SocialLink.id`, `SocialLink.platform`, `SocialLink.label`, `SocialLink.url`; and `PublicDocument.kind`, `PublicDocument.publicPath`, `PublicDocument.available`, `PublicDocument.label`.
- [X] T005 [P] Create the app shell, semantic main landmark, global dark theme tokens, base responsive/focus styles, and shared `Container`/`SectionHeading` and `Badge` components in `src/App.tsx`, `src/styles/theme.css`, `src/styles/globals.css`, `src/components/layout/Container.tsx`, `src/components/layout/SectionHeading.tsx`, and `src/components/ui/Badge.tsx`.

---

## Phase 3: User Story 1 - Conocer el perfil y navegar el portfolio (Priority: P1)

**Goal**: Present Joaquín's confirmed professional identity and let visitors reach the available primary sections on desktop and mobile.

**Independent Test**: Render the profile and navigation; verify section links, keyboard operation, visible focus, mobile-menu close after selection, and current footer year.

### Tests for User Story 1

- [X] T006 [P] [US1] Write profile rendering and missing optional-content tests in `src/sections/HeroSection.test.tsx` and `src/sections/AboutSection.test.tsx`.
- [X] T007 [P] [US1] Write desktop/mobile navigation and footer year tests in `src/components/layout/Header.test.tsx` and `src/components/layout/Footer.test.tsx`.

### Implementation for User Story 1

- [X] T008 [P] [US1] Add verified profile content to `src/data/personal.ts`, following `data-model.md` fields `PersonalProfile.fullName`, `PersonalProfile.professionalTitle`, `PersonalProfile.summary`, `PersonalProfile.about`, `PersonalProfile.interests`, `PersonalProfile.portraitPath`, and `PersonalProfile.availability`; omit unconfirmed optional facts.
- [X] T009 [P] [US1] Implement `HeroSection` and `AboutSection` in `src/sections/HeroSection.tsx` and `src/sections/AboutSection.tsx`, rendering only the supplied profile fields and descriptive image alternatives.
- [X] T010 [P] [US1] Implement semantic section navigation and keyboard-operable mobile menu in `src/components/layout/Header.tsx`, use `src/hooks/useActiveSection.ts` for active-section indication, and implement identity/current-year output in `src/components/layout/Footer.tsx`.
- [X] T011 [US1] Compose the profile, header, and footer into `src/App.tsx` and ensure each navigation item targets an existing section identifier.

**Checkpoint**: The profile and available navigation form a usable first delivery without requiring later content stories.

---

## Phase 4: User Story 2 - Evaluar proyectos y conocimientos (Priority: P1)

**Goal**: Present verified projects, technologies, and personal skills as evidence of the developer's work.

**Independent Test**: Review project cards and technology/skill groups; confirm absent destinations and unverified details do not appear as claims or functional links.

### Tests for User Story 2

- [X] T012 [P] [US2] Write project action/empty optional-field tests and technology/skill grouping tests in `src/sections/ProjectsSection.test.tsx`, `src/sections/TechnologiesSection.test.tsx`, and `src/sections/SkillsSection.test.tsx`.

### Implementation for User Story 2

- [X] T013 [P] [US2] Add verified Sala de Juegos, TP 2, and GLUTN records in `src/data/projects.ts`, following `data-model.md` fields `Project.id`, `Project.name`, `Project.description`, `Project.purpose`, `Project.category`, `Project.technologies`, `Project.participation`, `Project.imagePath`, `Project.imageAlt`, `Project.demoUrl`, `Project.repositoryUrl`, and `Project.downloadPath`; include only checked destinations and do not show the GLUTN download until its APK is present.
- [X] T014 [P] [US2] Add confirmed technology and skill records in `src/data/technologies.ts` and `src/data/skills.ts`, following `data-model.md` fields `Technology.id`, `Technology.name`, `Technology.category`, `Technology.description`, `Technology.iconKey`, `Technology.level`, `Skill.id`, `Skill.name`, `Skill.description`, and `Skill.iconKey`; do not infer skill levels or use arbitrary percentages.
- [X] T015 [P] [US2] Implement reusable project cards and the projects section in `src/components/ui/ProjectCard.tsx` and `src/sections/ProjectsSection.tsx`, exposing only configured demo, repository, and download actions.
- [X] T016 [P] [US2] Implement grouped technology badges and skills presentation in `src/components/ui/TechnologyBadge.tsx`, `src/sections/TechnologiesSection.tsx`, and `src/sections/SkillsSection.tsx`; statically import only used Lucide icons.
- [X] T017 [US2] Add Projects, Technologies, and Skills to the page composition and navigation targets in `src/App.tsx` and `src/components/layout/Header.tsx`.

**Checkpoint**: Visitors can independently evaluate verified work and knowledge without invented links or ratings.

---

## Phase 5: User Story 5 - Consultar una experiencia accesible, rápida y confiable (Priority: P1)

**Goal**: Make the delivered P1 portfolio responsive, keyboard-accessible, reduced-motion aware, and discoverable.

**Independent Test**: Review the delivered P1 sections at 320 px/mobile/tablet/desktop, use keyboard-only navigation, enable reduced motion, and inspect page metadata and landmarks.

### Tests for User Story 5

- [X] T018 [P] [US5] Add accessibility behavior tests for skip link, accessible names, keyboard focus, and reduced-motion configuration in `src/App.accessibility.test.tsx` and `src/components/layout/Header.test.tsx`.

### Implementation for User Story 5

- [X] T019 [P] [US5] Complete responsive layouts, touch target sizing, contrast tokens, visible focus, and no-overflow behavior in `src/styles/globals.css`, `src/styles/theme.css`, `src/components/layout/Header.tsx`, and `src/sections/HeroSection.tsx`, `src/sections/AboutSection.tsx`, `src/sections/ProjectsSection.tsx`, `src/sections/TechnologiesSection.tsx`, and `src/sections/SkillsSection.tsx`.
- [X] T020 [P] [US5] Configure Motion user reduced-motion policy in `src/main.tsx` and add document title, description, Open Graph metadata, and favicon in `index.html` and `public/favicon.svg`.

**Checkpoint**: P1 sections remain usable with reduced motion and keyboard input and have the required responsive and discovery foundations. Later stories must follow the same UI contract.

---

## Phase 6: User Story 3 - Consultar formación y credenciales (Priority: P2)

**Goal**: Present academic history and verified credentials, with combined filters and an accessible credential preview.

**Independent Test**: Inspect education status, combine type/institution/date filters, clear filters, check the result count and empty state, and operate/close a credential preview with keyboard.

### Tests for User Story 3

- [X] T021 [P] [US3] Write education status and credential combined-filter, empty-state, preview, Escape, and focus-return tests in `src/sections/EducationSection.test.tsx`, `src/utils/filters.test.ts`, and `src/sections/CertificatesSection.test.tsx`.

### Implementation for User Story 3

- [X] T022 [P] [US3] Add confirmed academic records in `src/data/education.ts`, following `data-model.md` fields `Education.id`, `Education.institution`, `Education.programOrTitle`, `Education.status`, `Education.startDate`, `Education.endDate`, `Education.description`, `Education.imagePath`, and `Education.imageAlt`; distinguish in-progress studies from awarded titles.
- [X] T023 [P] [US3] Add verified credentials in `src/data/certificates.ts`, following `data-model.md` fields `Credential.id`, `Credential.name`, `Credential.issuer`, `Credential.type`, `Credential.issuedAt`, `Credential.imagePath`, `Credential.imageAlt`, `Credential.sourceUrl`, and `Credential.credentialId`; omit unverified records and unavailable destinations.
- [X] T024 [US3] Implement combined AND filtering by type, issuer, and date plus clear-all and result count in `src/utils/filters.ts`, using the canonical values defined by `data-model.md` for `Credential.type`, `Credential.issuer`, and `Credential.issuedAt`.
- [X] T025 [P] [US3] Implement accessible education presentation in `src/sections/EducationSection.tsx`, showing academic status and only confirmed dates.
- [X] T026 [P] [US3] Implement credential cards, empty state, and keyboard-accessible preview dialog in `src/components/ui/CertificateCard.tsx` and `src/sections/CertificatesSection.tsx`; return focus to the opener after close.
- [X] T027 [US3] Add Education and Certificates to `src/App.tsx` and add the Certificates navigation target in `src/components/layout/Header.tsx`.

**Checkpoint**: Education is accurately labeled and credential browsing works with individual and combined filters, including no-result cases.

---

## Phase 7: User Story 4 - Acceder al CV y contactar (Priority: P2)

**Goal**: Let visitors open/download available documents and use only confirmed direct contact destinations.

**Independent Test**: Verify available and absent document states, CV open/download, email/social links, and that the site does not simulate a message submission.

### Tests for User Story 4

- [X] T028 [P] [US4] Write tests for configured/omitted contact links and available/missing CV and APK actions in `src/sections/ContactSection.test.tsx`, `src/sections/ResumeSection.test.tsx`, and `src/components/ui/SocialLinks.test.tsx`.

### Implementation for User Story 4

- [X] T029 [P] [US4] Add only confirmed email and social destinations in `src/data/social-links.ts`, following `data-model.md` fields `SocialLink.id`, `SocialLink.platform`, `SocialLink.label`, and `SocialLink.url`; validate `mailto:` for email and HTTPS for social links.
- [X] T030 [P] [US4] Register available public documents and verify repository files in `src/data/documents.ts`, `public/documents/cv.pdf`, `public/documents/glutn.apk`, and `public/documents/certificates/`, following `data-model.md` fields `PublicDocument.kind`, `PublicDocument.publicPath`, `PublicDocument.available`, and `PublicDocument.label`; do not create placeholder or fabricated documents.
- [X] T031 [P] [US4] Implement CV view/download actions gated on present files in `src/sections/ResumeSection.tsx` and `src/components/ui/Button.tsx`.
- [X] T032 [P] [US4] Implement direct email/social contact actions without a fake form in `src/sections/ContactSection.tsx` and reusable verified-link rendering in `src/components/ui/SocialLinks.tsx`; update configured social links in `src/components/layout/Footer.tsx` and `src/components/layout/Header.tsx`.
- [X] T033 [US4] Add Resume and Contact to `src/App.tsx`, navigation, and footer section links in `src/components/layout/Header.tsx` and `src/components/layout/Footer.tsx`.

**Checkpoint**: Visitors can use available documents and direct contact links; missing assets and destinations produce no broken actions.

---

## Phase 8: Polish & Cross-Cutting Validation

**Purpose**: Complete project instructions, production-quality checks, and the requested deployment workflow.

- [X] T034 [P] Document prerequisites, `npm ci`, `dev`/`build`/`test`/`lint` scripts, verified content policy, document paths, and GitHub-connected Vercel Production/Preview workflow in `README.md`.
- [X] T035 Run `npm run lint`, `npm run test`, and `npm run build` from `package.json`; resolve failures and confirm the build performs TypeScript checking before bundling.
- [ ] T036 Connect the GitHub repository to Vercel, set the repository principal branch as Production, and confirm branch pushes create Preview and Production deployments; document settings and the assigned canonical production URL in `README.md`.
- [ ] T037 Generate `public/sitemap.xml` from the canonical production URL established in `README.md` and add the matching sitemap/indexing directives in `public/robots.txt`.

- [ ] T038 After sitemap/robots updates, rerun `npm run lint`, `npm run test`, and `npm run build` from `package.json`; measure the production preview with Lighthouse on mobile and desktop, confirm Performance, Accessibility, Best Practices, and SEO each exceed 90 in both modes, review all verified data/document destinations, and record results in `specs/001-professional-portfolio/quickstart.md` and `README.md`.

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: T001 initializes the app; T002 adds the complete tooling dependency set and scripts; T003 configures the tools after T002.
- **Foundational (Phase 2)**: T004 and T005 depend on setup and can run in parallel. Both must complete before story phases.
- **User Stories (Phases 3–7)**: Follow the specification's priority order. Each story's tests precede its implementation. Story integrations touch the shared `src/App.tsx` and navigation, so complete them sequentially to avoid merge conflicts. Different data/test/component files within a story are marked `[P]` where independent.
- **Polish (Phase 8)**: Depends on all selected stories; production Lighthouse and deployment review require the integrated application.

### User Story Dependencies

- **US1 (P1)**: Depends on the app shell and domain types. Delivers profile and primary navigation independently.
- **US2 (P1)**: Depends on the shared shell/types; integrates Projects, Technologies, and Skills after US1 to keep `src/App.tsx` conflict-free.
- **US5 (P1)**: Applies responsive, motion, metadata, and accessibility behavior to the P1 experience after US1 and US2. Its UI contract also constrains US3 and US4.
- **US3 (P2)**: Depends on shared types and the navigation shell; follows US5 so new components inherit the accessible contract.
- **US4 (P2)**: Depends on shared types, document folders, and the established footer/navigation; follows US3 to avoid shared-file conflicts.

### Within Each User Story

- Write story-specific tests before implementation and use the story's independent test as its checkpoint.
- Data records and tests can be prepared in parallel when they touch separate files.
- Components can be developed in parallel only when they touch separate files; integrate through `src/App.tsx` after component tasks.
- Keep content and availability rules from `data-model.md` canonical; task citations identify every constrained entity field implemented.

### Parallel Opportunities

- **Setup**: T001, then T002, then T003; package and lockfile changes stay sequential.
- **Foundation**: T004 with T005.
- **US1**: T006, T007, and T008 can be prepared independently after foundation; T009 and T010 use separate section/layout files before T011 integration.
- **US2**: T012, T013, and T014 are separate test/data files; T015 and T016 build separate project versus technology/skill components before T017 integration.
- **US5**: T019 and T020 target separate styling versus app/document metadata paths after T018's acceptance test is written.
- **US3**: T021, T022, and T023 are separate test/data files; T025 and T026 are separate section implementations before T027 integration.
- **US4**: T028, T029, and T030 are separate test/data/asset-registry paths; T031 and T032 build separate resume versus contact flows before T033 integration.
- **Polish**: T034 can be prepared alongside T035. T036 requires a successful build. T037 depends on T036 to learn the canonical production URL. T038 depends on the completed deployment and SEO files.

---

### Parallel Examples: User Stories

Run each example after its phase prerequisites are complete; each listed task uses separate files.

**US1**

```text
T006 profile tests
T007 navigation/footer tests
T008 profile data in src/data/personal.ts
```

**US2**

```text
T012 rendering tests
T013 project data in src/data/projects.ts
T014 technology/skill data in src/data/technologies.ts and src/data/skills.ts
```

**US5**

```text
After T018 accessibility tests:
T019 responsive styles and section adjustments
T020 reduced-motion policy and metadata files
```

**US3**

```text
T021 education/filter/dialog tests
T022 education data in src/data/education.ts
T023 credential data in src/data/certificates.ts
```

**US4**

```text
T028 contact/document tests
T029 social data in src/data/social-links.ts
T030 public document registry in src/data/documents.ts
```

---

## Implementation Strategy

### MVP First (User Story 1)

1. Complete Phase 1 setup and Phase 2 foundation.
2. Complete US1 tests and implementation.
3. Validate the profile and primary navigation independently at mobile and desktop sizes.
4. Stop at the US1 checkpoint for review; do not require project/credential/contact data for this MVP.

### Incremental Delivery

1. Deliver US1 profile/navigation.
2. Add US2 projects, technologies, and skills.
3. Apply the P1 accessibility/responsive/discoverability pass in US5.
4. Add US3 education and filterable credentials.
5. Add US4 document access and direct contact.
6. Complete production checks, Lighthouse in both modes, and Vercel Preview review.

### Parallel Team Strategy

Complete setup and foundation together. Within each story, parallelize data, tests, and independent components as marked. Integrate shared `src/App.tsx`, header, and footer changes in the listed story order to prevent file conflicts.

## Notes

- Every task starts with an unchecked checkbox, sequential task ID, optional `[P]`, and story label where required.
- [P] means separate files and no dependency on unfinished work.
- Test tasks are included due the constitution's validation requirements; the task list does not execute them.
- No backend, database, authentication, extra form service, or unrequested runtime library is introduced.
- Verify all user-supplied information and files before rendering actions; omitted data is preferable to fabricated content.











