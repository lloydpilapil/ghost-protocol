# Base Thread (Single Prompt-and-Review)

You are executing a **Base Thread** — the fundamental unit of Ghost Protocol.

## Thread Structure

A Base Thread is a single prompt-and-review cycle for an isolated task. Two mandatory nodes:
1. **Beginning (Prompt)**: The user defines the task — `$ARGUMENTS`
2. **End (Review)**: The user reviews the completed work

In between, the assigned agent does the work autonomously.

## Agent Assignment

The Coordinator has assigned a specific agent to this task. That agent:
- Reads its own `charter.md` for boundaries and expertise
- Checks `decisions.md` for relevant team decisions
- Reviews its `history.md` for past learnings in this area

## Execution Protocol

1. **Parse the task**: Understand exactly what `$ARGUMENTS` is asking for. If ambiguous, ask ONE clarifying question before proceeding.
2. **Scope check**: Confirm this is a single, isolated task. If it naturally decomposes into parallel or phased work, suggest upgrading to P-Thread or C-Thread instead.
3. **Context gathering**: Read relevant files, understand the codebase area affected.
4. **Execute**: Implement the task completely. Write code, tests, or documentation as needed.
5. **Self-verify**: Run relevant tests or linting. Check your work against the original prompt.
6. **Update agent state**: Note any learnings for the agent's `history.md`. Flag decisions for `decisions/inbox/`.
7. **Present for review**: Summarize what was done, what files changed, and any decisions made.

## Output Format

```
THREAD: Base | Agent: [name] | Task: [short description]
STATUS: Complete
FILES CHANGED: [list]
DECISIONS MADE: [any non-obvious choices]
VERIFY: [how to confirm correctness]
REVIEW NEEDED: [anything requiring human judgment]
LEARNINGS: [anything to add to agent history]
```

## Rules
- Stay scoped. Do not expand beyond the stated task.
- Do not chain into additional work without explicit approval.
- If you discover adjacent issues, note them but do not fix them.
- Respect agent boundaries — if the task crosses into another agent's domain, flag it.
- Optimize for the Core Four: Context, Model, Prompt, Tools.
