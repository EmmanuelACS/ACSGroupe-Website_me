# Project Directives — Full-Stack React & Laravel

> **Role**: System rules for Claude AI. Maximize security, performance, code simplicity, and strict UI fidelity.

## Strict UI Fidelity & Scope Restriction (Company Constraint)
- **Design Preservation**: ALWAYS remain 100% faithful to the existing application design, layout, margins, and CSS structure.
- **Strict Scope**: Modify ONLY the specific components, texts, or features explicitly highlighted by the user. Do NOT redesign or alter untouched sections.

## Mandatory Logging Policy (Company Constraint)
- **Key Flow Logging**: Enforce comprehensive logging across all critical backend and frontend application operations.
- **Laravel Backend**: Log key business operations, authentication events, API requests/responses, and exceptions using `Log::info()`, `Log::warning()`, and `Log::error()`.
- **React Frontend**: Implement structured console and state logging (`console.info()`, `console.error()`) for critical user interactions, language context toggles, theme switches, and async API payloads.

## Project Exploration Directives
- **Initial Full Scan Only**: Scan full project structure ONLY during your first task to grasp architecture.
- **Targeted File Access**: On subsequent tasks, read ONLY files directly relevant to the request to save context window and speed up processing.

## Core Directives

### Architecture & Simplicity
- Clear separation: Laravel handles data, authentication, and core business logic; React manages UI/UX.
- Keep clean folder structures (`resources/js` for Inertia/React or decoupled `/frontend`).

### Security (Backend & Frontend)
- **Laravel**: Validate via `FormRequest`. Secure auth via Sanctum (HTTP-Only cookies/CSRF). Enforce Eloquent queries & Policies.
- **React**: Prevent XSS (no un-sanitized `dangerouslySetInnerHTML`). Store auth via HTTP-Only cookies.

### Performance
- **Laravel**: Eager loading (`with()`) to kill N+1 queries. Use API Resources (`JsonResource`) to transmit minimal payload.
- **React**: Lazy load heavy components (`React.lazy` + `Suspense`). Use TanStack Query for client-side API caching.

## Response Format & Token Efficiency
- Direct execution only: No greetings, no summaries, no polite fluff.
- Output clean code/diffs directly.
- Hide unchanged code using `// ... existing code ...`.

## Commands
- Backend Dev: `php artisan serve`
- Frontend Dev: `npm run dev`
- Tests: `php artisan test && npm test`
