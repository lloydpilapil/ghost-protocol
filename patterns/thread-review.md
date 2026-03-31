# Thread Review (Post-Execution Evaluation)

You are conducting a **Thread Review** — the quality gate for completed work under Ghost Protocol.

## Purpose

Every thread has two mandatory human touchpoints: the beginning (prompt) and the end (review). This pattern handles the end. **FIDO** leads reviews, with **RETRO** for security assessment. The user specifies what to review: `$ARGUMENTS`

## Review Protocol

1. **Identify what was done**: Look at recent changes, git diff, or the specified scope in `$ARGUMENTS`. Note which agents were involved and which thread pattern was used.

2. **Evaluate against the Core Four**:

   **Context**:
   - Did the work demonstrate understanding of the codebase?
   - Were existing patterns followed?
   - Were relevant files and dependencies considered?
   - Did agents stay within their charter boundaries?

   **Model**:
   - Was the right level of capability applied? (simple task = simple approach)
   - Any signs of over-engineering or under-engineering?
   - Was the right agent assigned to each part?

   **Prompt**:
   - Did the work align with the original request?
   - Were there scope deviations?
   - Were ambiguities resolved correctly?
   - Were agent handoffs clean and explicit?

   **Tools**:
   - Were appropriate tools and verification used?
   - Were tests written or run?
   - Was linting checked?
   - Was the right thread pattern used?

3. **Agent-specific checks**:
   - Did each agent respect their charter boundaries?
   - Were agent handoffs explicit and complete?
   - Did the right specialist handle each part?
   - Were decisions logged for future reference?

4. **Security checks** (RETRO):
   - [ ] Security vulnerabilities (OWASP top 10)
   - [ ] Missing error handling at system boundaries
   - [ ] PII or sensitive data exposure
   - [ ] Auth/authz gaps

5. **Quality checks** (FIDO):
   - [ ] Broken tests or missing test coverage
   - [ ] Inconsistent naming or style
   - [ ] Dead code or unused imports
   - [ ] Hard-coded values that should be configurable
   - [ ] Missing or incorrect types

6. **Rate the thread**:
   - **GREEN**: Clean, correct, ready to merge/use
   - **YELLOW**: Minor issues, fixable without re-doing the thread
   - **RED**: Significant problems, may need a new thread → triggers Retrospective ceremony

## Output Format

```
THREAD REVIEW | Reviewed by: FIDO + RETRO
SCOPE: [what was reviewed]
THREAD TYPE: [pattern used]
AGENTS INVOLVED: [list]
RATING: [GREEN/YELLOW/RED]

CORE FOUR ASSESSMENT:
  Context: [score 1-5] — [notes]
  Model:   [score 1-5] — [notes]
  Prompt:  [score 1-5] — [notes]
  Tools:   [score 1-5] — [notes]

AGENT ASSESSMENT:
  [agent]: [charter compliance, handoff quality]
  ...

ISSUES FOUND:
  [list issues with severity: critical/warning/info]

RECOMMENDATIONS:
  [actionable next steps if any]

THREAD METRICS:
  Files changed: [count]
  Lines added/removed: [+X/-Y]
  Tests: [pass/fail/new]
  Agent handoffs: [count]
```

## Rules
- Be honest. A green rating on bad code costs more later.
- Focus on correctness and maintainability over style preferences.
- Distinguish between "must fix" and "nice to have."
- If the review reveals a RED rating, trigger a Retrospective ceremony and suggest the appropriate thread type to fix it.
- Check agent charter compliance — wrong agent = wrong result.
