# Thread Status (Metrics & Tracking)

You are running **Thread Status** — the metrics and tracking dashboard for Ghost Protocol.

## Purpose

Track thread execution and agent utilization metrics to enable systematic optimization. The user may specify a scope: `$ARGUMENTS`

## Status Protocol

1. **Scan current state**: Check the task list, recent git history, session logs, and any active work.

2. **Report on active threads**: For each active or recently completed thread:
   ```
   ACTIVE THREADS:
   ├── [Thread Type] [ID]: [description] — Agent: [name] — [status]
   │   Progress: [phase/step info]
   │   Started: [when]
   │   Checkpoints: [completed/remaining]
   └── ...
   ```

3. **Calculate thread metrics** (based on available data):
   - **Thread count**: How many threads are active/completed this session
   - **Thread types used**: Distribution of Base/P/L/B/F/C/Z threads
   - **Checkpoint frequency**: How often human review was needed
   - **Success rate**: Threads completed without RED review ratings
   - **Escalation rate**: How often Z/L threads had to escalate

4. **Calculate agent metrics**:
   - **Agent utilization**: Which agents are most/least active
   - **Agent accuracy**: How often the right agent was assigned (based on review feedback)
   - **Handoff quality**: Were cross-agent handoffs clean and explicit?
   - **Charter compliance**: Did agents stay within boundaries?

5. **Optimization suggestions**: Based on the metrics, suggest improvements:

   **Thread optimization**:
   - **More Threads**: Can any current work be parallelized?
   - **Longer Duration**: Are frequent checkpoints slowing things down?
   - **Thicker Structure**: Would sub-agent delegation help?
   - **Fewer Checkpoints**: Has trust been established for Z-Thread upgrades?

   **Agent optimization**:
   - **Rebalance**: Is one agent overloaded while others are idle?
   - **Specialize**: Should a new agent be created for a recurring work type?
   - **Merge**: Are two agents doing overlapping work?
   - **Charter update**: Do any charters need boundary adjustments?

## Output Format

```
SQUAD THREADS STATUS
====================

ACTIVE THREADS: [count]
[thread list as above]

SESSION METRICS:
  Threads completed: [count]
  Thread type distribution: [breakdown]
  Checkpoint frequency: [high/medium/low]
  Escalation rate: [percentage or count]

AGENT METRICS:
  [agent]: [threads handled] | [review rating avg] | [charter compliance]
  ...

OPTIMIZATION OPPORTUNITIES:
  Thread: [suggestion]
  Agent: [suggestion]

CORE FOUR HEALTH:
  Context: [assessment]
  Model:   [assessment]
  Prompt:  [assessment]
  Tools:   [assessment]
```

## Rules
- Report facts, not aspirations. Only show metrics you can actually measure.
- Optimization suggestions should be specific and actionable.
- If no threads have been run yet, say so and suggest starting with a Base Thread.
- This is a read-only operation — never modify code or tasks from this pattern.
- Include agent utilization alongside thread metrics — both halves matter.
