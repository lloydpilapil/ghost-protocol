# Routing Rules — Ghost Protocol

## The Dual Route: Agent + Pattern

Every task is routed to **who** (agent) and **how** (thread pattern). The coordinator selects both.

## Work Type Routing

| Work Type | Agent | Thread Pattern | Examples |
|-----------|-------|---------------|---------|
| Single bug fix | EECOM | Base | "Fix off-by-one in pagination" |
| Small feature | EECOM | Base | "Add dark mode toggle" |
| Documentation update | PAO | Base | "Update API docs for v2" |
| Security patch | RETRO | Base | "Fix XSS in search input" |
| Multi-phase feature | EECOM + FIDO | Chain | "Auth: schema -> API -> frontend -> tests" |
| Integration work | CAPCOM + EECOM | Chain | "Add Stripe: SDK -> webhooks -> checkout" |
| Independent UI components | EECOM (x3) | Parallel | "Build 3 settings panels simultaneously" |
| Independent services | EECOM + CAPCOM + PAO | Parallel | "API endpoint + SDK wrapper + docs" |
| Approach evaluation | Flight | Fusion | "WebSocket vs SSE vs polling" |
| Architecture decision | Flight | Fusion | "Monorepo vs polyrepo for new service" |
| Well-tested refactor | EECOM | Zero | "Add Zod validation to all routes" |
| Mechanical changes | EECOM | Zero | "Rename userId to user_id across codebase" |
| Extended migration | EECOM | Long | "Migrate test suite from Jest to Vitest" |
| Large cross-cutting | Flight (coord) + specialists | Big | "Implement observability across all services" |
| Complex system build | Flight (coord) + specialists | Big | "Build notification system: queue + workers + UI" |
| Quality review | FIDO + RETRO | Review | "Review auth implementation" |
| Session health check | — | Status | "Show metrics and suggest optimizations" |

## Pattern Selection Logic

```
1. Is the task well-defined and isolated?
   -> Pick specialist + Base Thread

2. Are there 3-5 independent sub-tasks with no shared files?
   -> Pick one specialist per task + Parallel Thread

3. Are there sequential phases where Phase N depends on Phase N-1?
   -> Pick specialists per phase + Chain Thread

4. Is it a long task (1+ hours) with clear milestones?
   -> Pick specialist + Long Thread

5. Does it require coordinating multiple dependent agents?
   -> Flight coordinates + Big Thread

6. Is the best approach genuinely uncertain?
   -> Flight evaluates + Fusion Thread

7. Is it low-risk with existing tests covering all affected code?
   -> Pick specialist + Zero Thread
```

## Agent Selection Logic

```
Touching core business logic?       -> EECOM
Touching external APIs/SDKs?        -> CAPCOM
Touching tests or quality gates?    -> FIDO
Touching docs or user-facing copy?  -> PAO
Touching auth/security/PII?         -> RETRO
Architecture or trade-off decision? -> Flight
Designing agent prompts/charters?   -> Procedures
Logging or session management?      -> Scribe (background)
```

## Module Ownership

Customize this section for your project:

```
| Module/Path          | Primary Agent | Secondary |
|---------------------|---------------|-----------|
| src/core/           | EECOM         | Flight    |
| src/api/            | EECOM         | CAPCOM    |
| src/integrations/   | CAPCOM        | EECOM     |
| src/auth/           | RETRO         | EECOM     |
| tests/              | FIDO          | EECOM     |
| docs/               | PAO           | —         |
| .github/workflows/  | FIDO          | EECOM     |
| package.json        | EECOM         | Flight    |
```

## Routing Principles

1. **Agent + Pattern always.** Never route to just an agent or just a pattern.
2. **Specialist first.** Route to the domain expert, not the generalist.
3. **Pattern fits the shape.** Pick the pattern that matches the work structure, not the work size.
4. **Scribe always runs** after substantial work, always in background.
5. **Ceremonies trigger automatically.** Design Review before multi-agent work. Retro after failures.
6. **When two agents could handle it**, pick the one whose domain is the primary concern.
7. **Fan-out when appropriate.** If sub-tasks are truly independent, use Parallel Thread.
8. **Escalate uncertainty to Flight.** If the right approach is unclear, Flight evaluates via Fusion Thread.
