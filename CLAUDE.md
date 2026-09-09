# Project Directives — Full-Stack React & Laravel (ACS Group Standard Compliant)

> **Role**: System rules for Claude AI aligned with ACS Group Engineering Standards (`standards-acs-groupe`). Maximize security, performance, code simplicity, strict UI fidelity, and corporate governance.

---

## 1. Strict UI Fidelity & Scope Restriction (Company Constraint)
- **Design Preservation**: ALWAYS remain 100% faithful to the existing application design, layout, margins, and CSS structure.
- **Strict Scope**: Modify ONLY the specific components, texts, or features explicitly highlighted by the user. Do NOT redesign or alter untouched sections.

---

## 2. ACS Group Architectural Standards & Clean Code
- **Clean Architecture & DDD (Domain-Driven Design)**: Enforce strict separation of concerns.
  - **Domain / Business Logic**: Isolated within Laravel Services/Actions or Domain models.
  - **Application Layer**: Handled via `FormRequest` validation, Controllers, and `JsonResource` / Inertia responses.
  - **Presentation Layer**: Managed exclusively by React UI components.
- **API-First & Interoperability**: Design all API endpoints to align with OpenAPI 3.0 / REST standards.
- **SOLID & DRY Principles**: Keep methods small, single-purpose, and reusable.

---

## 3. Git Workflow, Branching & Commit Conventions (ACS Group Mandatory)
- **Branching Strategy (GitFlow / Trunk-Based)**:
  - Feature branches: `feature/JIRA-ID-description` (e.g., `feature/ACS-102-auth-jwt`)
  - Bug fixes: `fix/JIRA-ID-description` (e.g., `fix/ACS-204-login-error`)
- **Conventional Commits**: All commit messages generated or suggested MUST follow the format:
  - `type(scope): concise description`
  - *Allowed types*: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `sec`.
  - *Example*: `feat(auth): implement Sanctum HTTP-Only cookie authentication`
- **Peer Review & Code Quality**: Code must be formatted and clean, ready for mandatory 2-peer PR reviews.

---

## 4. Mandatory Logging & Observability Policy
- **Key Flow Logging**: Enforce comprehensive, structured logging across all critical backend and frontend application operations.
- **Laravel Backend**:
  - Log key business operations, authentication events, API requests/responses, and exceptions using `Log::info()`, `Log::warning()`, and `Log::error()`.
  - Ensure log payloads use structured JSON formatting where applicable for OpenTelemetry / Grafana aggregation.
- **React Frontend**:
  - Implement structured console and state logging (`console.info()`, `console.error()`) for critical user interactions, language context toggles, theme switches, and async API payloads.

---

## 5. QA, Testing & Code Coverage Standard (ACS Group Constraint)
- **80% Code Coverage Target**: Every pull request / feature implementation must aim for a **minimum 80% test coverage threshold**.
- **Test Types**:
  - Backend: Feature and Unit tests using PHPUnit / Pest (`php artisan test`).
  - Frontend: Component and Integration tests using Vitest / React Testing Library (`npm test`).
- **Automated Verification**: Always verify that new features include corresponding test cases before completing tasks.

---

## 6. Security & DevSecOps Directives
- **Laravel Backend**:
  - Mandatory validation via `FormRequest` classes.
  - Secure authentication via Sanctum (HTTP-Only cookies / CSRF protection).
  - Enforce Eloquent queries (prevent SQL injection) & Laravel Policies for RBAC (Role-Based Access Control).
  - **Zero Hardcoded Secrets**: Secrets, keys, or credentials MUST NEVER be hardcoded. Use `.env` variables (referencing Vault / Secret Manager in production).
- **React Frontend**:
  - Prevent XSS: Avoid un-sanitized `dangerouslySetInnerHTML`.
  - Secure token / session management via HTTP-Only cookies.

---

## 7. Performance & Optimization Directives
- **Laravel Backend**:
  - Prevent N+1 query problems via explicit Eager Loading (`with()`).
  - Use API Resources (`JsonResource`) to transmit minimal necessary payloads.
  - Implement caching (Redis) for heavy queries.
- **React Frontend**:
  - Lazy load heavy components (`React.lazy` + `Suspense`).
  - Implement client-side API caching and state management using TanStack Query.

---

## 8. Project Exploration Directives
- **Initial Full Scan Only**: Scan full project structure ONLY during your first task to grasp architecture.
- **Targeted File Access**: On subsequent tasks, read ONLY files directly relevant to the request to save context window and speed up processing.

---

## 9. Response Format & Token Efficiency
- **Direct Execution Only**: No greetings, no summaries, no polite fluff.
- **Output Clean Code / Diffs Directly**.
- **Code Preservation**: Hide unchanged code using `// ... existing code ...`.

---

## 10. Development & Testing Commands
- **Backend Dev**: `php artisan serve`
- **Frontend Dev**: `npm run dev`
- **Full Test Suite (Coverage check)**: `php artisan test --min=80 && npm test`
