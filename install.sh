#!/bin/bash

# Ghost Protocol Installer
# Installs the Ghost Protocol framework into a target project

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

TARGET_DIR="${1:-.}"

if [ "$TARGET_DIR" = "." ]; then
    echo -e "${YELLOW}No target directory specified. Installing in current directory.${NC}"
    echo ""
fi

# Resolve to absolute path
TARGET_DIR=$(cd "$TARGET_DIR" 2>/dev/null && pwd || echo "$TARGET_DIR")

if [ ! -d "$TARGET_DIR" ]; then
    echo -e "${RED}Error: Directory '$TARGET_DIR' does not exist.${NC}"
    exit 1
fi

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SQUAD_DIR="$TARGET_DIR/.ghost-protocol"

echo "Installing Ghost Protocol into: $TARGET_DIR"
echo ""

# Create directory structure
mkdir -p "$SQUAD_DIR"/{agents/{flight,eecom,fido,procedures,pao,capcom,retro,scribe},patterns,decisions,skills,sessions,log}

# Copy core files
echo "Copying team configuration..."
cp "$SCRIPT_DIR/team.md" "$SQUAD_DIR/team.md"
cp "$SCRIPT_DIR/routing.md" "$SQUAD_DIR/routing.md"
cp "$SCRIPT_DIR/decisions.md" "$SQUAD_DIR/decisions.md"
cp "$SCRIPT_DIR/ceremonies.md" "$SQUAD_DIR/ceremonies.md"
cp "$SCRIPT_DIR/charter-template.md" "$SQUAD_DIR/charter-template.md"

# Copy agent charters and histories
echo "Copying agent charters..."
for agent in flight eecom fido procedures pao capcom retro scribe; do
    cp "$SCRIPT_DIR/agents/$agent/charter.md" "$SQUAD_DIR/agents/$agent/charter.md"
    cp "$SCRIPT_DIR/agents/$agent/history.md" "$SQUAD_DIR/agents/$agent/history.md"
done

# Copy thread patterns
echo "Copying thread patterns..."
for pattern in "$SCRIPT_DIR"/patterns/thread-*.md; do
    cp "$pattern" "$SQUAD_DIR/patterns/$(basename "$pattern")"
done

# Install Copilot instructions
echo "Installing Copilot instructions..."
mkdir -p "$TARGET_DIR/.github"
if [ -f "$TARGET_DIR/.github/copilot-instructions.md" ]; then
    echo -e "${YELLOW}  .github/copilot-instructions.md already exists. Saving Ghost Protocol version as copilot-instructions.ghost-protocol.md${NC}"
    cp "$SCRIPT_DIR/copilot/instructions.md" "$TARGET_DIR/.github/copilot-instructions.ghost-protocol.md"
else
    cp "$SCRIPT_DIR/copilot/instructions.md" "$TARGET_DIR/.github/copilot-instructions.md"
fi

# Also install as Claude Code commands if .claude directory exists or user wants it
if [ -d "$TARGET_DIR/.claude" ] || [ -d "$TARGET_DIR/.claude/commands" ]; then
    echo "Detected Claude Code project. Installing thread patterns as slash commands..."
    mkdir -p "$TARGET_DIR/.claude/commands"
    for pattern in "$SCRIPT_DIR"/patterns/thread-*.md; do
        cp "$pattern" "$TARGET_DIR/.claude/commands/$(basename "$pattern")"
    done
fi

echo ""
echo -e "${GREEN}Ghost Protocol installed successfully!${NC}"
echo ""
echo "Installed to: $SQUAD_DIR"
echo ""
echo "Structure:"
echo "  .ghost-protocol/"
echo "  ├── team.md              # Agent roster"
echo "  ├── routing.md           # Work type -> Agent + Pattern"
echo "  ├── decisions.md         # Shared decisions"
echo "  ├── ceremonies.md        # Design reviews, retrospectives"
echo "  ├── charter-template.md  # Template for new agents"
echo "  ├── patterns/            # 9 thread execution patterns"
echo "  ├── agents/              # 8 named specialist agents"
echo "  ├── decisions/           # Decision inbox"
echo "  ├── skills/              # Compressed learnings"
echo "  ├── sessions/            # Session archive"
echo "  └── log/                 # Execution log"
echo ""
echo "Copilot instructions: .github/copilot-instructions.md"
echo ""
echo "Next steps:"
echo "  1. Customize routing.md with your project's modules"
echo "  2. Add project-specific details to agent charters"
echo "  3. Start using: describe your task and Copilot will route to Agent + Pattern"
