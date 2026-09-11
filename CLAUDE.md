# Project Directives — Full-Stack React, Inertia.js & Laravel (ACS Group Standard)

> **Role**: System rules for AI code assistants aligned with ACS Group Engineering Standards. Maximize security, performance, code simplicity (DRY), strict UI fidelity, and corporate governance.

---

## 1. Strict UI Fidelity & Brand Guidelines (ACS Group)
- **Design Preservation**: ALWAYS remain 100% faithful to the existing application design, layout, margins, and Tailwind CSS structure.
- **Corporate Palette**: Adhere strictly to the brand colors: Red (`#DC2626`), Black, Dark Slate (`slate-900`/`950`), and White.
- **Typography & Icons**: Use FontAwesome (`fas fa-*`) or SVG icons exclusively. **NEVER use emojis** in the code, especially in the Back-Office/Admin UI.
- **No Filler Content**: NEVER use "Lorem Ipsum" or generic English placeholders. Always generate professional, contextual, and realistic corporate text (French or English depending on the localization file).

## 2. Architecture & Tech Stack (Laravel + Inertia + React)
- **Clean Architecture**: 
  - **Backend**: Domain logic isolated in Laravel Services/Actions. Controllers must be thin.
  - **Frontend**: Managed exclusively by React UI components via Inertia.js. Use `@inertiajs/react` for routing (`Link`, `useForm`, `router`) instead of standard React API fetching (no Axios/Fetch unless strictly necessary).
- **Zero Code Duplication (DRY)**: Extract repetitive UI elements (Cards, Marquees, Buttons, Forms) into generic, reusable components inside `resources/js/Components/UI/`.
- **API & Data**: Pass minimal necessary data from Controllers to React views using Laravel Eloquent API Resources (`JsonResource`).

## 3. Code Quality & SonarCloud Standards
- **Quality Gate A**: All generated code must pass SonarCloud/SonarQube "Quality Gate A".
- **Duplication**: Keep code duplication strictly under 3%. Refactor aggressively before adding new files.
- **Performance**: Prevent N+1 query problems via explicit Eager Loading (`with()`) in Laravel. Implement Lazy Loading (`React.lazy`) for heavy frontend components.

## 4. Security & Back-Office Isolation (DevSecOps)
- **Admin Isolation**: The Back-Office (`/admin`) MUST be completely invisible to the public. Never place links to `/admin` in the public Navbar, Footer, or Chatbot.
- **Authentication**: All backend admin routes must be protected by Laravel's `auth` middleware. Unauthenticated access must redirect to `/admin/login`.
- **Validation**: Enforce strict validation via Laravel `FormRequest` classes.
- **Zero Hardcoded Secrets**: Credentials MUST NEVER be hardcoded. Always use `.env` variables.
- **XSS Prevention**: Never use un-sanitized `dangerouslySetInnerHTML` in React.

## 5. Git Workflow & Commit Conventions
- **Branching Strategy**:
  - Feature: `feature/JIRA-ID-description` (e.g., `feature/ACS-102-gallery-admin`)
  - Fix: `fix/JIRA-ID-description` (e.g., `fix/ACS-204-marquee-overlap`)
- **Conventional Commits**: `type(scope): concise description` (Types: `feat`, `fix`, `style`, `refactor`, `test`, `chore`).

## 6. QA, Testing & Observability
- **Coverage Target**: Maintain a minimum of **80% test coverage** for critical paths.
- **Logging**: Use structured logging (`Log::info()`, `Log::error()`) for backend operations and API requests.
- **Commands**: 
  - Backend Dev: `php artisan serve`
  - Frontend Dev: `npm run dev`
  - Tests: `php artisan test --min=80`

## 7. AI Assistant Output Rules & Token Efficiency
- **No Fluff**: Direct execution only. No greetings, no summaries, no conversational filler.
- **Code Output**: Output clean code diffs directly.
- **Code Preservation**: Hide untouched surrounding code using `// ... existing code ...`. Modify ONLY what is requested.
- **Targeted Reading**: Read ONLY files directly relevant to the user's prompt to save context window memory.
