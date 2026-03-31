# Ghost Protocol

**Silent agents. Clean code. No trace left behind.**

Ghost Protocol combines the structured execution patterns of [Thread Engineering Kit](https://github.com/nicholaspilapil/thread-engineering-kit) with the persistent multi-agent model of [Squad](https://github.com/bradygaster/squad). The result: named specialist agents that execute silently, leave clean code, and disappear — not just "do the thing," but "the right agent does the thing the right way, then vanishes."

## Why Both?

| Problem | Squad Solves | Thread Engineering Solves | Ghost Protocol Solves |
|---------|-------------|--------------------------|---------------------|
| Who does the work? | Named agents with charters | N/A | Named agents with charters |
| How is work structured? | N/A | 9 execution patterns | Agents execute specific patterns |
| How do agents coordinate? | Coordinator routes tasks | P-Thread, B-Thread patterns | Coordinator routes to agent + pattern |
| How is quality tracked? | Reviewer gates | Core Four framework | Core Four + agent-specific review |
| Does knowledge persist? | Agent history files | Stateless | Agent history + thread decisions |

## Quick Start

### Install into your project

```bash
git clone https://github.com/nicholaspilapil/ghost-protocol.git
cd ghost-protocol
chmod +x install.sh
./install.sh /path/to/your/project
```

### Manual setup

```bash
cp -r ghost-protocol/.ghost-protocol /path/to/your/project/
cp ghost-protocol/copilot/instructions.md /path/to/your/project/.github/copilot-instructions.md
```

## Architecture

```
.ghost-protocol/
├── team.md                      # Agent roster with roles and status
├── routing.md                   # Work type -> Agent + Thread pattern
├── decisions.md                 # Shared team decisions
├── ceremonies.md                # Design reviews, retrospectives
├── charter-template.md          # Template for new agent charters
├── patterns/                    # 9 thread execution patterns
│   ├── thread-base.md           # Single scoped task
│   ├── thread-parallel.md       # Independent parallel agents
│   ├── thread-chain.md          # Sequential phases with checkpoints
│   ├── thread-long.md           # Extended autonomous execution
│   ├── thread-big.md            # Hierarchical sub-agent coordination
│   ├── thread-fusion.md         # Competitive multi-strategy evaluation
│   ├── thread-zero.md           # Fully autonomous with self-verification
│   ├── thread-review.md         # Post-execution quality review (Core Four)
│   └── thread-status.md         # Metrics dashboard & optimization
├── agents/                      # Named specialist agents
│   ├── flight/                  # Lead / Architect
│   │   ├── charter.md
│   │   └── history.md
│   ├── eecom/                   # Core Developer
│   │   ├── charter.md
│   │   └── history.md
│   ├── fido/                    # Quality / Testing
│   │   ├── charter.md
│   │   └── history.md
│   ├── procedures/              # Prompt Engineer
│   │   ├── charter.md
│   │   └── history.md
│   ├── pao/                     # Docs / DevRel
│   │   ├── charter.md
│   │   └── history.md
│   ├── capcom/                  # Integration Specialist
│   │   ├── charter.md
│   │   └── history.md
│   ├── retro/                   # Security
│   │   ├── charter.md
│   │   └── history.md
│   └── scribe/                  # Session Logger
│       ├── charter.md
│       └── history.md
├── decisions/                   # Decision inbox for agents
├── skills/                      # Compressed learnings
├── sessions/                    # Session archive
└── log/                         # Searchable execution log
```

## The 8 Agents

| Name | Role | Owns | Thread Affinity |
|------|------|------|-----------------|
| **Flight** | Lead / Architect | Architecture decisions, code review, scope/tradeoffs | F-Thread (evaluates strategies), B-Thread (coordinates large work) |
| **EECOM** | Core Developer | Implementation, runtime, core modules | Base, C-Thread, L-Thread, Z-Thread |
| **FIDO** | Quality Owner | Tests, coverage, CI/CD, quality gates | Review Thread, Z-Thread verification |
| **Procedures** | Prompt Engineer | Agent charters, coordination logic, spawn templates | B-Thread sub-agent design |
| **PAO** | Docs / DevRel | README, API docs, user-facing messaging | Base (docs tasks), C-Thread (docs phase) |
| **CAPCOM** | Integration Specialist | External APIs, SDK usage, platform patterns | C-Thread, B-Thread (integration layer) |
| **RETRO** | Security | Security review, PII, compliance, hook design | Review Thread (security checks) |
| **Scribe** | Session Logger | Session logs, decision archival, history | Always runs in background after work |

## The 9 Thread Patterns

### Execution Threads

| Pattern | When to Use | Human Checkpoints |
|---------|-------------|-------------------|
| **Base** | Single, scoped task (bug fix, small feature) | Start + End |
| **Parallel (P-Thread)** | 3-5 independent sub-tasks, no shared files | Start + End |
| **Chain (C-Thread)** | Multi-phase, early decisions affect later phases | Between every phase |
| **Long (L-Thread)** | Extended autonomous work with task tracking | Optional self-checkpoints |
| **Big (B-Thread)** | Hierarchical sub-agent coordination with dependencies | Start + End |
| **Fusion (F-Thread)** | Uncertain approach, compare 2-3 strategies | Start + Selection + End |
| **Zero (Z-Thread)** | Well-tested, low-risk, fully autonomous | End only |

### Quality Threads

| Pattern | When to Use |
|---------|-------------|
| **Review** | Post-execution evaluation (Core Four framework) |
| **Status** | Metrics dashboard, optimization suggestions |

## Routing: Agent + Pattern

The key innovation is that routing picks **both** the specialist and the execution pattern:

```
User: "Fix the pagination bug"
Router: EECOM + Base Thread
  -> EECOM executes a scoped fix, presents for review

User: "Build auth system: schema, API, frontend, tests"
Router: EECOM (phases 1-2) + FIDO (phase 4) + Chain Thread
  -> Sequential phases with human review between each

User: "Evaluate WebSocket vs SSE vs polling for real-time"
Router: Flight + Fusion Thread
  -> Flight designs 3 strategies, agents compete, user picks winner

User: "Build 3 independent settings panels"
Router: EECOM + PAO + CAPCOM + Parallel Thread
  -> Each agent takes one panel, no file overlap

User: "Add Zod validation to all 12 routes (tests exist)"
Router: EECOM + Zero Thread
  -> Fully autonomous, self-verifies through existing tests
```

## How It Works with GitHub Copilot

### 1. Copilot reads the instructions

The `.github/copilot-instructions.md` file teaches Copilot about the Ghost Protocol framework. When you start a conversation, Copilot knows about agents, patterns, and routing.

### 2. You describe the work

```
"I need to implement the payment processing system.
Phase 1: Stripe integration. Phase 2: Webhook handlers.
Phase 3: Frontend checkout. Phase 4: Tests."
```

### 3. Copilot routes to Agent + Pattern

Based on the routing rules, Copilot selects:
- **Agent**: EECOM (core dev) + CAPCOM (integration) + FIDO (testing)
- **Pattern**: C-Thread (chain) — sequential phases with checkpoints

### 4. Execution follows the pattern

Each phase executes with the thread's guardrails: scope limits, checkpoint reviews, verification loops, structured output.

### 5. Knowledge persists

After completion, agents update their `history.md` with learnings. Decisions go to `decisions.md`. Scribe logs the session.

## Decision Tree

```
Is it a single, isolated task?
  YES -> Pick specialist + /thread-base

Can it be split into independent sub-tasks?
  YES -> Pick specialists (one per task) + /thread-parallel

Does it have sequential phases building on each other?
  YES -> Pick specialists per phase + /thread-chain

Is it a long task with clear phases?
  YES -> Pick specialist + /thread-long

Does it need hierarchical coordination?
  YES -> Flight coordinates + /thread-big

Are you unsure of the best approach?
  YES -> Flight evaluates + /thread-fusion

Is it well-tested and low-risk?
  YES -> Pick specialist + /thread-zero
```

## Ceremonies

### Design Review (before multi-agent work)

Triggered automatically when 2+ agents will modify shared systems. Flight facilitates. Agents agree on interfaces, contracts, and file ownership before any code is written.

### Retrospective (after failures)

Triggered after build failure, test failure, or RED review rating. Flight facilitates root cause analysis. Findings go to `decisions.md`.

## The Core Four Framework

Every thread is evaluated against four dimensions:

| Dimension | What It Measures |
|-----------|-----------------|
| **Context** | Does the work show understanding of the codebase? Existing patterns followed? |
| **Model** | Right capability level applied? Over/under-engineered? |
| **Prompt** | Work aligns with original request? Scope drift? |
| **Tools** | Appropriate tools used? Tests written? Linting checked? |

Review Thread rates work as **GREEN** (merge), **YELLOW** (minor fixes), or **RED** (redo).

## Customization

### Adding a new agent

1. Copy `charter-template.md` to `agents/{name}/charter.md`
2. Fill in identity, ownership, boundaries, and voice
3. Create an empty `agents/{name}/history.md`
4. Add the agent to `team.md`
5. Update routing rules in `routing.md`

### Adding project-specific routing

Edit `routing.md` to map your project's modules and work types to specific agents and thread patterns.

## Tips

- **Start with Base + Chain.** Get comfortable with structured execution before adding parallelism or fusion.
- **Review everything.** Run Review Thread after every significant piece of work.
- **Don't force Z-Threads.** They require high test confidence. Default to C-Thread when unsure.
- **Let agents specialize.** Don't route everything to EECOM. Use the right specialist.
- **Check status regularly.** Run Status Thread at session end for optimization insights.
- **Update history files.** After significant work, make sure agents capture learnings.

## Credits

- Thread execution patterns adapted from [Thread Engineering Kit](https://github.com/nicholaspilapil/thread-engineering-kit) by [Pixelmojo](https://pixelmojo.io)
- Multi-agent coordination model inspired by [Squad](https://github.com/bradygaster/squad) by Brady Gaster
- NASA Mission Control naming convention from Squad

## License

MIT
