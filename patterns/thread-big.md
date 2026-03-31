# B-Thread (Big / Sub-Agent Coordination)

You are orchestrating a **B-Thread** — hierarchical sub-agent delegation under Ghost Protocol.

## Thread Structure

A B-Thread is coordinated by **Flight** (or the designated lead), who spawns and manages named specialist agents in a nested hierarchy. Unlike P-Threads (independent parallel work), B-Thread agents may have dependencies and the coordinator actively manages handoffs. The user defines the objective: `$ARGUMENTS`

## Pre-Execution: Design Review Ceremony

B-Threads **always** trigger a Design Review before execution:
1. Flight reviews the task and requirements
2. Relevant agents agree on interfaces and contracts
3. File ownership boundaries are defined
4. Risks and edge cases identified
5. Agent assignments confirmed

## Execution Protocol

1. **Architect the hierarchy**: Flight designs the agent tree with named specialists:
   ```
   B-THREAD: [objective]
   Flight (coordinator): Coordination + integration
   ├── EECOM: [responsibility] → depends on: [none/other agents]
   │   └── [sub-task details]
   ├── CAPCOM: [responsibility] → depends on: [EECOM]
   │   └── [sub-task details]
   ├── FIDO: [responsibility] → depends on: [EECOM, CAPCOM]
   │   └── [sub-task details]
   └── PAO: [responsibility] → depends on: [none]
       └── [sub-task details]
   ```

2. **Define contracts**: Before launching agents, specify:
   - What each agent produces (output contract aligned with their charter)
   - What each agent consumes (input requirements)
   - File ownership boundaries (who writes where)
   - Handoff format between dependent agents

3. **Launch in dependency order**:
   - Start independent agents in parallel (e.g., EECOM and PAO)
   - Feed outputs from completed agents into dependent agents (e.g., EECOM's output → CAPCOM)
   - Flight handles all integration and conflict resolution

4. **Coordinate actively**:
   - Review each agent's output before passing it downstream
   - Resolve interface mismatches between agents
   - Re-run or adjust agents if their output doesn't meet the contract
   - Ensure each agent stays within their charter boundaries

5. **Integrate and verify**: Combine all agent work. FIDO runs final verification.

6. **Update all agent states**: Each agent updates their history. Scribe logs the full session.

## Output Format

```
B-THREAD: [objective] | Depth: [max nesting] | Agents: [count]
HIERARCHY:
  Flight: Coordination
  ├── EECOM: [status] — [output summary]
  ├── CAPCOM: [status] — [consumed EECOM's output]
  ├── FIDO: [status] — [verification results]
  └── PAO: [status] — [docs summary]
INTEGRATION: [how outputs were combined]
FILES CHANGED: [list by agent]
DECISIONS: [key decisions made during coordination]
REVIEW NEEDED: [items for human judgment]
```

## Rules
- Flight is the coordinator. Never delegate coordination to a sub-agent.
- Define clear contracts between agents before launching.
- Every agent must work within their charter boundaries.
- Keep nesting to max 2 levels deep unless truly necessary.
- If an agent fails, decide whether to retry, adjust, or escalate — don't silently skip.
- Verify the integrated result as a whole, not just individual parts.
- Always run Design Review ceremony before execution.
