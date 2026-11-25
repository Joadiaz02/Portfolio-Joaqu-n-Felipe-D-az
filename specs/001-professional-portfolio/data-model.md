# Data Model: Portfolio profesional personal

This is a read-only content model for one public portfolio. Records are authored in TypeScript modules under `src/data/`; they are not persisted to a database. All public claims and external destinations must be verified before inclusion.

## Shared conventions

- Every collection record has a stable, unique `id` or slug used for rendering and tests.
- Required display text must be non-empty after trimming. Optional fields are omitted rather than filled with fabricated content.
- External URLs must use an approved scheme (`https:`; `mailto:` for email). An absent/invalid URL produces no active link.
- Dates use ISO `YYYY-MM` or `YYYY-MM-DD` values internally and are formatted for display. A missing end date is meaningful only when the status is current/in progress.
- Content arrays preserve the explicitly authored order unless the UI applies a documented sort/filter.

## Entities

### PersonalProfile

Fields: `fullName` (required), `professionalTitle` (required), `summary` (required), `about` (optional paragraphs), `interests` (optional), `portraitPath` (optional), and `availability` (optional, verified status and label).

Validation: Never infer employment availability, years of experience, achievements, or qualifications. If availability is not confirmed, omit it. Portrait alternative text is required when the image communicates identity; decorative images use empty alternative text.

### Project

Fields: `id`, `name`, `description`, `purpose`, `category`, `technologies[]`, optional `participation`, optional `imagePath` and `imageAlt`, and optional actions `demoUrl`, `repositoryUrl`, `downloadPath`.

Initial records: Sala de Juegos, TP 2, and GLUTN. Demo URLs in the spec are candidates and must be checked before publication. GLUTN is an Android project; its APK action remains absent until a stable public file is supplied. Descriptions and technology lists must match verified project sources.

Validation: A project is renderable only with a name and verified description. Every displayed action has a valid reachable destination. Do not imply an individual/group role unless confirmed.

### Technology

Fields: `id`, `name`, `category`, optional `description`, optional `iconKey`, and optional self-assessed `level`.

Categories: `language`, `frontend`, `backend`, `database`, `tool` (or an equivalent explicit union).

Validation: Do not assign a level unless Joaquín has confirmed that self-assessment. Use a statically defined icon key; omit unknown icons rather than evaluating arbitrary component names from content.

### Skill

Fields: `id`, `name`, `description`, optional `iconKey`.

Validation: Descriptions must be concrete, supportable statements without exaggerated generic claims.

### Education

Fields: `id`, `institution`, `programOrTitle`, `status` (`in_progress`, `completed`, or another explicitly needed state), optional `startDate`, optional `endDate`, optional `description`, and optional `imagePath` and `imageAlt`.

Validation: `completed` requires a confirmed completion date or verified completion evidence; `in_progress` must not be shown as an awarded title. Missing dates remain omitted.

### Credential

Fields: `id`, `name`, `issuer`, `type` (`certificate`, `course`, `academic_title`), optional `issuedAt`, optional `imagePath` and `imageAlt`, optional `sourceUrl`, and optional `credentialId`.

Relationships: Each credential has exactly one type and issuer; it can have an image, original source link, and identifier independently.

Validation: Only verified credentials are published. The combined filter predicate is AND across selected type, issuer, and year/date. Clearing filters restores all records. A record without an image or URL remains readable as a card and has no unavailable action. A preview dialog tracks its triggering control so focus can return on close.

### SocialLink

Fields: `id`, `platform` (`email`, `linkedin`, `github`, `instagram`), `label`, and `url`.

Validation: Only configured, verified destinations render. Email uses a valid `mailto:` destination; social destinations use HTTPS. Opening a new browsing context is protected appropriately.

### PublicDocument

A conceptual availability reference for CV, certificate, and APK links. Fields: `kind`, `publicPath`, `available` (derived from the configured asset being present, not a manually asserted flag), and optional `label`.

Validation: Resolve a public file as `/documents/...`; do not emit a link when the corresponding file is absent. Certificate files live under `/documents/certificates/`.

## Relationships

- A project references zero or more technologies by stable technology ID/name.
- A credential's issuer is display data, and its filters use normalized issuer and date values.
- Social links are presented in header (where space permits), contact, and footer from the same data collection.
- Public document availability gates CV/APK/certificate actions; missing assets never create dead links.

## State transitions

There is no persistent server state. UI-only states are:

- Certificate filters: `all`/selected filter values → filtered results → empty results; clear returns to all records.
- Credential preview: closed → open for selected credential → closed by close control or Escape; focus returns to opener.
- Mobile navigation: closed → open → closed after selecting a section; keyboard controls remain available.
- Content availability: unconfigured/missing → action omitted; verified destination plus present file → action shown.

