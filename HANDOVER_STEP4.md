# HANDOVER DOCUMENT: Step 4 Implementation (Lead Capture API & Form Handling)

## 1. Context & Codebase Overview
* **Repository**: `https://github.com/AliKhanImagery/MBH.git`
* **Active Branch**: `main`
* **Current Commit**: [`7fc1459`](https://github.com/AliKhanImagery/MBH/commit/7fc1459) (*"feat: production readiness fixes - client navigation, contact consistency, local assets, and case study routing"*)
* **Tech Stack**: Next.js 16.3.0 (App Router, Turbopack), React 19.2.8, Tailwind CSS v4, IBM Plex Sans & IBM Plex Mono design system.
* **Build / Lint Health**: `npm run lint` passes with **0 errors, 0 warnings**. `npm run build` compiles with **0 errors** (14 static pages).

---

## 2. Completed Work (Steps 1 to 3)
1. **Step 1 (Contact Data & Placeholders)**: Standardized email to `sales@mbhsol.com` and phone to `+92 332 2007373`. Aligned catalogue line items count to 31. Replaced `TEAM · IMG` black box on the homepage with an industrial engineering visual.
2. **Step 2 (Client Routing & ESLint)**: Upgraded all internal navigation in `Header.tsx`, `Footer.tsx`, `Industries.tsx`, `ProcessSpine.tsx` to Next.js `<Link>` and `<Image>` components. Localized Siemens logo to `/public/logo-siemens.svg`. Fixed `set-state-in-effect` in `QuoteDrawer.tsx`.
3. **Step 3 (Anchor Routing & Case Studies)**: Connected orphaned `/references/beverage-cip-recovery-modernization` case study with CTA cards in `CaseStudy.tsx` and return breadcrumb. Standardized section anchor targets (`#beverage-process`, `#automation`, `#fabrication`).

---

## 3. Objective for Step 4: Lead Capture API & Form Handling

### The Problem
`src/components/Contact.tsx` and `src/components/catalogue/QuoteDrawer.tsx` currently trigger `window.location.href = "mailto:sales@mbhsol.com..."`. This causes:
* Silent failure for webmail and mobile users without desktop mail apps configured.
* Inability to upload and send RFQ spec sheets (file input is currently `disabled` in `QuoteDrawer.tsx`).
* No server-side lead validation, backup, or logging.

### Required Implementation Tasks
1. **Create Next.js Route Handlers**:
   * `src/app/api/contact/route.ts`:
     * Accepts POST `{ name, company, email, details }`.
     * Validates required inputs (`name`, `email`, `details`).
     * Formats and transmits structured HTML email to `sales@mbhsol.com`.
     * Returns `{ success: true, message: "Enquiry received" }`.
   * `src/app/api/quote/route.ts`:
     * Accepts POST `multipart/form-data` containing Item ID, Item Name, spec, contact fields, notes, and optional attachment file (`.pdf`, `.docx`, `.xlsx` up to 10MB).
     * Validates fields, processes the attachment buffer, and forwards the complete RFQ package to `sales@mbhsol.com`.
     * Returns `{ success: true, message: "Quote request received" }`.
2. **Email Provider Configuration**:
   * Provide modular support for **Resend** (recommended via `resend` package) or standard **Nodemailer / SMTP**.
   * Define `.env.example` with:
     ```env
     RESEND_API_KEY=re_xxxxxxxxxxxx
     # Or SMTP credentials:
     SMTP_HOST=smtp.example.com
     SMTP_PORT=587
     SMTP_USER=sales@mbhsol.com
     SMTP_PASS=xxxxxxxxxxxx
     CONTACT_RECEIVER_EMAIL=sales@mbhsol.com
     ```
   * Include a fallback lead-logging mechanism if environment variables are not yet configured in local development.
3. **Frontend UI Upgrades**:
   * `src/components/Contact.tsx`:
     * Convert `handleSubmit` from `mailto:` to an `async fetch('/api/contact', ...)`.
     * Add active loading state (`isSubmitting` with disabled button state).
     * Render inline confirmation receipt on success.
     * Add error toast/alert with fallback phone/WhatsApp button if the network fails.
   * `src/components/catalogue/QuoteDrawer.tsx`:
     * Remove `disabled` attribute from the RFQ file input.
     * Convert `handleSubmit` to `async fetch('/api/quote', { method: 'POST', body: formData })`.
     * Display upload progress / active sending spinner.
     * Render clean in-dialog success confirmation.

---

## 4. Acceptance Criteria
* [ ] Both `Contact` and `QuoteDrawer` submit seamlessly without opening the user's local email software.
* [ ] Spec sheet attachments (`.pdf`, `.docx`, `.xlsx`) can be uploaded and received.
* [ ] Submit buttons enter disabled loading states while sending.
* [ ] `npm run lint` continues to pass with **0 errors and 0 warnings**.
* [ ] `npm run build` succeeds with **0 errors**.
