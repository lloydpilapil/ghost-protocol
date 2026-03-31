# Z-Thread (Zero-Touch Autonomous)

You are executing a **Z-Thread** — fully autonomous execution with self-verification under Ghost Protocol.

## Thread Structure

A Z-Thread runs end-to-end with no human checkpoints. The assigned agent self-verifies through tests, linting, and validation. **FIDO must confirm test coverage is sufficient** before a Z-Thread is approved. The user defines the objective: `$ARGUMENTS`

## Prerequisites

Z-Threads require high confidence. Before accepting, verify:
- [ ] The task is well-defined with clear success criteria
- [ ] Tests exist or can be written to verify correctness
- [ ] The codebase area is well-understood (good context)
- [ ] The risk of incorrect work is low or fully test-catchable
- [ ] FIDO confirms test coverage is sufficient for autonomous execution
- [ ] The task falls entirely within the assigned agent's charter boundaries

If any prerequisite fails, **downgrade to a C-Thread** and explain why.

## Execution Protocol

1. **Validate Z-Thread suitability**: Check prerequisites above. FIDO reviews test coverage.

2. **Define success criteria and verification plan**:
   ```
   Z-THREAD: [objective] | Agent: [name] | Verified by: FIDO
   SUCCESS CRITERIA:
     1. [measurable criterion]
     2. [measurable criterion]
   VERIFICATION:
     - Tests: [what tests will confirm correctness]
     - Lint: [style/quality checks]
     - Integration: [how to confirm nothing broke]
   ESCALATION TRIGGERS:
     - [condition that would cause a pause]
     - Work crosses into another agent's domain
   ```

3. **Execute fully**: Work through the entire task:
   - Write implementation
   - Write or update tests
   - Run tests and fix failures
   - Run linting and fix issues
   - Verify against success criteria

4. **Self-verify loop**: Before presenting results:
   - Run ALL tests (not just new ones)
   - Check for regressions
   - Verify each success criterion is met
   - If any verification fails, fix and re-verify (max 3 attempts before escalating)

5. **Update agent state**: Note learnings in history.md. Write decisions to inbox.

6. **Present final result**: Only after all verification passes.

## Output Format

```
Z-THREAD: [objective] | Agent: [name] | AUTONOMOUS COMPLETE
VERIFICATION:
  Tests: [X passed, Y failed] — [details if any failed]
  Lint: [clean/issues]
  Criteria 1: [PASS/FAIL] — [evidence]
  Criteria 2: [PASS/FAIL] — [evidence]
SELF-VERIFY ATTEMPTS: [count]
FILES CHANGED: [list]
ESCALATIONS: [none, or what was flagged]
LEARNINGS: [what to add to agent history]
CONFIDENCE: [HIGH/MEDIUM — never run Z-Thread at LOW confidence]
```

## Rules
- Z-Threads are earned, not assumed. Default to C-Thread if uncertain.
- FIDO must approve test coverage before Z-Thread proceeds.
- Tests are mandatory. No tests = no Z-Thread.
- Max 3 self-fix attempts before escalating to the user.
- Never mark a Z-Thread complete if any verification fails.
- If you discover scope creep during execution, stop and escalate.
- Stay within charter boundaries. If work drifts, escalate.
- Log every decision for post-execution review even though there are no checkpoints.
