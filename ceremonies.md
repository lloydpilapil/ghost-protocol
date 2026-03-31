# Ceremonies — Ghost Protocol

> Team meetings that happen before or after work.

## Design Review

| Field | Value |
|-------|-------|
| **Trigger** | Auto |
| **When** | Before execution |
| **Condition** | Multi-agent task involving 2+ agents modifying shared systems |
| **Facilitator** | Flight |
| **Participants** | All agents involved in upcoming work |
| **Enabled** | Yes |

**Agenda:**
1. Review the task and requirements
2. Agree on interfaces and contracts between agents
3. Define file ownership boundaries (who writes where)
4. Identify risks and edge cases
5. Select thread pattern and confirm agent assignments
6. Assign action items

---

## Retrospective

| Field | Value |
|-------|-------|
| **Trigger** | Auto |
| **When** | After execution |
| **Condition** | Build failure, test failure, RED review rating, or Z-Thread escalation |
| **Facilitator** | Flight |
| **Participants** | All agents involved in failed work |
| **Enabled** | Yes |

**Agenda:**
1. What happened? (facts only)
2. Root cause analysis
3. Was the right thread pattern used?
4. Was the right agent assigned?
5. What should change?
6. Action items and decisions to record

---

## Thread Retrospective

| Field | Value |
|-------|-------|
| **Trigger** | Manual |
| **When** | After execution |
| **Condition** | User requests `/thread-status` or end of session |
| **Facilitator** | Coordinator |
| **Participants** | None (read-only analysis) |
| **Enabled** | Yes |

**Agenda:**
1. Review thread metrics for the session
2. Evaluate pattern selection accuracy
3. Identify optimization opportunities
4. Suggest agent or pattern adjustments
