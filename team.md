# Ghost Protocol — Team Roster

> Silent specialists executing disciplined patterns.
> *"The right agent does the thing the right way, then vanishes."*

## Coordinator

| Name | Role | Notes |
|------|------|-------|
| Coordinator | Router + Orchestrator | Routes work to Agent + Thread Pattern. Does not write code. |

## Members

| Name | Role | Charter | Status | Thread Affinity |
|------|------|---------|--------|-----------------|
| Flight | Lead / Architect | `agents/flight/charter.md` | Active | F-Thread, B-Thread |
| EECOM | Core Developer | `agents/eecom/charter.md` | Active | Base, C-Thread, L-Thread, Z-Thread |
| FIDO | Quality Owner | `agents/fido/charter.md` | Active | Review, Z-Thread verification |
| Procedures | Prompt Engineer | `agents/procedures/charter.md` | Active | B-Thread sub-agent design |
| PAO | Docs / DevRel | `agents/pao/charter.md` | Active | Base (docs), C-Thread (docs phase) |
| CAPCOM | Integration Specialist | `agents/capcom/charter.md` | Active | C-Thread, B-Thread |
| RETRO | Security | `agents/retro/charter.md` | Active | Review (security), C-Thread |
| Scribe | Session Logger | `agents/scribe/charter.md` | Silent | Background after all threads |

## Coding Agent

| Name | Role | Status |
|------|------|--------|
| @copilot | Coding Agent | Coding Agent |

### Copilot Suitability

**Auto-route to @copilot:**
- Bug fixes with clear reproduction steps
- Test coverage additions
- Lint/format fixes
- Dependency updates
- Small isolated features with clear specs

**Route to @copilot but flag for squad review:**
- Medium features with clear specs
- Refactoring with existing test coverage
- API additions following established patterns

**Route to squad member instead:**
- Architecture decisions
- Multi-system integration
- Ambiguous requirements
- Security-critical changes
- Performance-critical paths
