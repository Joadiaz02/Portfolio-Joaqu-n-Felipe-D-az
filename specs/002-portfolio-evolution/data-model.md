# Data Model: Evolución del portfolio

Los datos siguen siendo estáticos y se mantienen bajo `src/data/`, separados de la presentación.

## Conventions

- `id` is stable, unique and used as the UI key.
- Public copy is Spanish. Technical names retain their original spelling.
- Optional values are omitted if absent; do not use empty links or fabricated placeholders.
- `knowledgeStatus` describes the kind of claim, never numeric proficiency.
- `evidence` identifies the source that supports the record; it may name an allowed source such as CV, project README, source code, demo or developer statement.
- External web destinations use HTTPS. Email destinations use `mailto:`. WhatsApp uses the `wa.me` URL with only digits in the phone path and URL-encoded text.
- Public local assets must exist in `public/`; actions are omitted for missing files.

## Entities

### SocialLink (contact link)

Fields: `id`, `platform` (`email`, `whatsapp`, `instagram`, `linkedin`, `github`), `label`, `detail`, `url`, `iconKey`, `accessibleLabel`, `visible`, `external`.

Rules:

- Exactly the five configured canonical links appear in Contact.
- Email `url`: `mailto:joacodiaz437@gmail.com`.
- WhatsApp `url`: `https://wa.me/5491128657205` plus optional URL-encoded `text` query.
- Instagram, LinkedIn and GitHub use the URLs in FR-002 and HTTPS.
- `external` is false for mailto and true for WhatsApp/social HTTPS links opened in a new context.
- A link that fails platform URL validation is not rendered.
- External browser contexts use `target="_blank"` and `rel="noopener noreferrer"`.
- `iconKey` maps to a static local/Lucide icon; content never resolves arbitrary component names.

### Project

Fields: `id`, `name`, `projectType`, `description`, `features[]`, `technologies[]`, `demoUrl`, `repositoryUrl`, `downloadPath`, `evidence[]`.

Rules:

- `name`, `projectType`, `description` and `features` are concise, readable and backed by a source.
- Technologies list only those supported by README, code, CV or the user's explicit statement; knowledge status is represented on Technology.
- Demo/repository URLs must use HTTPS; downloads must resolve to an existing `/documents/...` asset.
- Project cards do not render screenshots or other project images.

### Technology

Fields: `id`, `name`, `category`, optional `description`, optional `iconKey`, `knowledgeStatus`, `evidence[]`.

Categories: `language`, `frontend`, `backend`, `database`, `tool`, `methodology`, `uxui`, `sap`.

`knowledgeStatus` values kept as internal source metadata; technology cards show names without status labels:

| Value                | Internal description           | Meaning                                                        |
| -------------------- | ------------------------------ | -------------------------------------------------------------- |
| `applied`            | Aplicado en proyectos          | Used in a cited project or current portfolio implementation    |
| `studied`            | Conceptos estudiados           | Study is explicitly backed by a source                         |
| `cv_reported`        | Indicado en el CV              | The CV lists the item/skill; no extra experience is implied    |
| `learning`           | En aprendizaje                 | Current learning is explicitly stated                          |
| `developer_reported` | Declarado por el desarrollador | Included by the developer without a project/certificate source |
| `interest`           | Tema de interés                | Area the developer wants to explore; not a skill claim         |

Rules:

- No percentage or numeric proficiency is inferred.
- SAP topics use `interest` unless later evidence confirms study or use.
- Figma must not be added as a demonstrated tool without confirmation.
- Every rendered record has at least one evidence entry or an explicit interest status.

### Skill

Fields: `id`, `name`, `description`, `category` (`methodology`, `uxui`, `complementary`), `knowledgeStatus`, `evidence[]`, optional `iconKey`.

Rules: Describe supportable behaviors or concepts; avoid generic praise and unverified performance claims. New technology concepts belong to Technology if they are individually categorized.

### Language

Fields: `id`, `name`, `level`, optional `description`, optional `certificationReference`, `evidence[]`.

Rules: `level` is exactly a value supported by the CV or an explicitly provided source; no MCER level or certification may be inferred. Current record: English, B2, CV reference “First For Schools”.

### Education

Fields: `id`, `institution`, `programOrTitle`, `status` (`in_progress`, `completed`), optional `startDate`, optional `endDate`, optional `description`, `evidence[]`.

Rules: `completed` requires explicit completion evidence; dates can use `YYYY`, `YYYY-MM` or `YYYY-MM-DD` when the source provides only that precision. Current record is the UTN Desarrollo Universitario en Programación course, completion November 2026 as stated by CV.

### Credential

Fields: `id`, `name`, `issuer`, `type` (`certificate`, `course`, `academic_title`), optional `issuedAt` (`YYYY`, `YYYY-MM`, or `YYYY-MM-DD`), optional `imagePath`/`imageAlt`, optional `sourceUrl`, optional `credentialId`, `evidence[]`.

Current records: Desarrollo Full Stack / Digital House / 2022; Ofimática / UTN / 2015. The CV supports text cards; no separate image or public verification URL is available.

### PublicDocument

Fields: `kind` (`cv`, `certificate`, `apk`), `publicPath`, `available` (derived/verified against a present file), `label`.

Current verified files: `/documents/cv.pdf`, `/documents/glutn.apk`. Certificate images remain unavailable.

## Relationships

- Project technologies reference Technology names/IDs where a technology listing exists.
- Each contact link has one canonical record; Contact and Footer render from the same collection.
- `Credential.evidence` can reference the CV; missing scans do not remove its verified text metadata.
- Language, education, credential, and project evidence points to its canonical source.

## State/availability

- Configured and valid destination → action renders.
- Invalid, absent or unsafe destination → action is omitted.
- Existing local document → view/download action renders.
- Missing local document → no action.
- Knowledge/evidence status is static display metadata; no visitor-controlled state or backend persistence exists.
- Certificate image preview retains closed → open selected credential → Escape/close → restore focus to opener behavior.
