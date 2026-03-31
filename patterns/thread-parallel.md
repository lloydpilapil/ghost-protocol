# P-Thread (Parallel Execution)

You are orchestrating a **P-Thread** — parallel independent agent work under Ghost Protocol.

## Thread Structure

A P-Thread decomposes a task into multiple independent sub-tasks that run simultaneously. Each sub-task is assigned to a specific named agent. The user provides the work: `$ARGUMENTS`

## Execution Protocol

1. **Decompose**: Break `$ARGUMENTS` into independent, non-overlapping sub-tasks. Each sub-task must:
   - Touch different files or isolated code areas
   - Have no data dependencies on other sub-tasks
   - Be completable without knowledge of other sub-tasks' results

2. **Assign agents**: Route each sub-task to the appropriate specialist based on `routing.md`:
   ```
   P-THREAD PLAN: [description]
   ├── EECOM: [sub-task] → [files affected]
   ├── CAPCOM: [sub-task] → [files affected]
   ├── PAO: [sub-task] → [files affected]
   └── Conflict check: [confirm no overlapping files or agent boundaries]
   ```

3. **Pre-flight check**: Before launching, verify:
   - No two agents will touch the same file
   - Each agent's sub-task falls within their charter boundaries
   - If 2+ agents will modify shared systems, trigger a **Design Review** ceremony first

4. **Launch parallel agents**: Spawn all assigned agents simultaneously. Each agent gets:
   - Clear, self-contained instructions
   - Specific file scope boundaries
   - Context about the broader task (but not dependency on other agents)
   - Their charter and relevant history

5. **Collect and integrate**: After all agents complete, review outputs for:
   - Merge conflicts or overlapping changes
   - Interface compatibility between components
   - Consistent naming, patterns, and style

6. **Update agent states**: Each agent notes learnings in their history. Scribe logs the session.

7. **Present unified result**: Show the combined outcome with per-agent summaries.

## Output Format

```
P-THREAD: [description] | Agents: [count]
├── [Agent 1]: [status] — [summary]
├── [Agent 2]: [status] — [summary]
├── [Agent 3]: [status] — [summary]
INTEGRATION: [any conflicts resolved]
FILES CHANGED: [combined list]
REVIEW NEEDED: [items requiring human judgment]
```

## Rules
- Never let parallel agents touch the same file. If overlap is unavoidable, serialize those tasks.
- Each agent must be fully self-contained — no cross-agent communication during execution.
- If a sub-task fails, the others should still be valid.
- Aim for 3-5 parallel agents per P-Thread. More than that increases coordination overhead.
- Flag integration risks before launching.
- Trigger Design Review ceremony if agents share system boundaries.
