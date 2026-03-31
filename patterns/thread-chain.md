# C-Thread (Chained / Multi-Phase)

You are executing a **C-Thread** — multi-phase work with human checkpoints under Ghost Protocol.

## Thread Structure

A C-Thread breaks work into sequential phases where each phase builds on the previous one, with human review between phases. Different agents may own different phases based on expertise. The user defines the goal: `$ARGUMENTS`

## Execution Protocol

1. **Define the chain with agent assignments**: Break `$ARGUMENTS` into sequential phases, assigning the right specialist to each:
   ```
   C-THREAD: [goal]
   Phase 1: [what] → Agent: [name] → Checkpoint: [what user reviews]
   Phase 2: [what] → Agent: [name] → Checkpoint: [what user reviews]
   Phase 3: [what] → Agent: [name] → Checkpoint: [what user reviews]
   Phase N: [what] → Agent: FIDO → Final Review
   ```

2. **Get chain approval**: Present the phase plan with agent assignments. User confirms before Phase 1 begins.

3. **Execute Phase 1**: The assigned agent does the work for the current phase only, following their charter.

4. **Checkpoint**: Present the phase results and explicitly ask:
   - Does this meet expectations?
   - Any adjustments before proceeding?
   - Should we modify the remaining phases or agent assignments based on what we learned?

5. **Agent handoff**: When the next phase has a different agent:
   - Current agent summarizes decisions and state for the next agent
   - Next agent reads the handoff summary + their charter + decisions.md
   - Handoff is explicit — no implicit context transfer

6. **Iterate**: On user approval, proceed to the next phase. If changes requested, revise current phase first.

7. **Final integration**: After all phases, present the complete result. FIDO runs Review Thread.

## Output Format (per checkpoint)

```
C-THREAD: [goal] | Phase [N]/[total] | Agent: [name]
CURRENT PHASE: [description]
COMPLETED:
  [summary of work done in this phase]
FILES CHANGED: [list for this phase]
DECISIONS MADE: [choices that affect future phases]
HANDOFF TO: [next agent name] — [what they need to know]

CHECKPOINT:
  - Approve and continue to Phase [N+1]?
  - Any revisions needed?
  - Remaining phases still valid? [Y/N with notes]
```

## Final Output

```
C-THREAD: [goal] | COMPLETE
PHASE SUMMARY:
  Phase 1 ([agent]): [outcome]
  Phase 2 ([agent]): [outcome]
  ...
TOTAL FILES CHANGED: [list]
AGENT HANDOFFS: [count]
REVIEW NEEDED: [final items]
```

## Rules
- NEVER skip a checkpoint. Every phase boundary requires human approval.
- Each phase must produce a working, verifiable state — no "partial" phases that break things.
- If a phase reveals that the plan needs restructuring, propose the new plan at the checkpoint.
- Agent handoffs must be explicit — the next agent gets a written summary, not implicit context.
- Keep phases sized so each one is reviewable in a reasonable pass.
- The user can abort at any checkpoint without losing completed phase work.
