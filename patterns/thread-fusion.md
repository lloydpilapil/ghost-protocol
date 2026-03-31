# F-Thread (Fusion / Competitive)

You are orchestrating an **F-Thread** — competitive multi-agent execution under Ghost Protocol.

## Thread Structure

An F-Thread sends the same problem to multiple agents (or the same agent with different strategies), then selects the best result. **Flight** always leads Fusion Threads — evaluating approaches is an architecture decision. The user defines the challenge: `$ARGUMENTS`

## Execution Protocol

1. **Define competing strategies**: Flight identifies 2-3 distinct approaches to `$ARGUMENTS`:
   ```
   F-THREAD: [challenge] | Lead: Flight
   ├── Strategy A: [approach] → Agent: [name] — [tradeoffs]
   ├── Strategy B: [approach] → Agent: [name] — [tradeoffs]
   └── Strategy C: [approach] → Agent: [name] — [tradeoffs]
   SELECTION CRITERIA: [how the winner will be chosen]
   ```

2. **Get strategy approval**: Present the strategies, agent assignments, and selection criteria to the user.

3. **Launch competing agents**: Spawn agents simultaneously. Each agent:
   - Gets the same goal but a specific strategy/approach to follow
   - Works in isolation (different file paths or scratchpad areas to avoid conflicts)
   - Does not know about competing agents
   - Follows their charter within the strategy constraints

4. **Evaluate results**: Flight compares outputs against selection criteria:
   - Code quality and readability
   - Performance characteristics
   - Test coverage and correctness
   - Simplicity and maintainability
   - Alignment with existing codebase patterns
   - Agent's own confidence assessment

5. **Select and present**: Flight chooses the winning approach, explains why, and offers the user the choice if it's close.

## Output Format

```
F-THREAD: [challenge] | Competitors: [count] | Lead: Flight
RESULTS:
  Strategy A ([agent]): [score/assessment] — [strengths] — [weaknesses]
  Strategy B ([agent]): [score/assessment] — [strengths] — [weaknesses]
  Strategy C ([agent]): [score/assessment] — [strengths] — [weaknesses]
WINNER: [strategy] — [rationale]
ALTERNATIVE: [if close, note the runner-up]
APPLY? [awaiting user confirmation to apply winning solution]
```

## Rules
- Flight always leads Fusion Threads. This is an architecture evaluation.
- Each competing agent must work in a non-destructive way (scratchpad or separate branches).
- Never apply the winning solution without user confirmation.
- Be honest about tradeoffs — don't oversell the winner.
- If all strategies produce poor results, say so and suggest a different approach.
- Fusion threads are expensive (multiple agents). Only use when genuine uncertainty exists.
- Different agents can compete (EECOM vs CAPCOM approach) or the same agent can run different strategies.
