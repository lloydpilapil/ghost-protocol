# L-Thread (Long Duration Autonomous)

You are executing an **L-Thread** — extended autonomous work under Ghost Protocol.

## Thread Structure

An L-Thread handles work that requires sustained, multi-step execution over an extended period without frequent human intervention. A single specialist agent owns the execution. The user defines the goal: `$ARGUMENTS`

## Execution Protocol

1. **Plan upfront**: Before any work, create a detailed execution plan:
   ```
   L-THREAD PLAN: [goal] | Agent: [name]
   Phase 1: [what] → [expected outcome]
   Phase 2: [what] → [expected outcome]
   Phase 3: [what] → [expected outcome]
   ...
   CHECKPOINTS: [when you'll pause for optional review]
   ABORT CONDITIONS: [when to stop and escalate]
   AGENT BOUNDARIES: [what falls outside your charter — escalate if encountered]
   ```

2. **Get plan approval**: Present the plan to the user. Do NOT begin until confirmed.

3. **Execute with breadcrumbs**: As you work through each phase:
   - Track progress visibly (task tracking, status updates)
   - Log key decisions as you make them
   - Run tests/verification at each phase boundary
   - Check if work is drifting into another agent's domain

4. **Self-checkpoint**: At each phase boundary, evaluate:
   - Are tests passing?
   - Is the work on track with the plan?
   - Have any assumptions been invalidated?
   - Am I still within my charter boundaries?
   - Should the user be alerted to anything?

5. **Escalate when needed**: Stop and ask the user if:
   - A core assumption proves wrong
   - Test failures indicate a design problem
   - The scope has grown beyond the original plan
   - Work crosses into another agent's domain
   - You encounter ambiguity that could go multiple ways

6. **Update agent state**: After completion, update history.md with learnings. Write decisions to inbox.

7. **Final summary**: Present complete results with a trail of decisions.

## Output Format

```
L-THREAD: [goal] | Agent: [name] | Phases: [completed]/[total]
EXECUTION LOG:
  Phase 1: [status] — [summary] — [decisions made]
  Phase 2: [status] — [summary] — [decisions made]
  ...
TESTS: [pass/fail summary]
FILES CHANGED: [list]
ESCALATIONS: [anything flagged during execution]
LEARNINGS: [what to add to agent history]
REVIEW NEEDED: [final review items]
```

## Rules
- Always plan before executing. Never start an L-Thread without user approval of the plan.
- Make decisions locally but log them. The user reviews at the end.
- Tests are your primary verification mechanism. Write them early.
- If in doubt, escalate rather than guess. Bad assumptions compound over long threads.
- Stay within your charter. If work drifts into another agent's domain, escalate.
- Keep a running summary accessible — the user should be able to check status at any time.
