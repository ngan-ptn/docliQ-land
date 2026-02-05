#!/bin/bash
# Run this WEEKLY to track progress

KNOWLEDGE_DIR="$(dirname "$0")/../knowledge"
TODAY=$(date +%Y-%m-%d)

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║              ITERATIVE KNOWLEDGE - WEEKLY SYNC               ║"
echo "╠══════════════════════════════════════════════════════════════╣"
echo "║  Weekly checklist:                                           ║"
echo "║                                                              ║"
echo "║  □ 1. Update sum-changed.md with this week's progress        ║"
echo "║  □ 2. Review [Experiment] entries - validate or remove       ║"
echo "║  □ 3. Check if any [Reusable] ready for promotion            ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

# Show current status
echo "📊 Current Knowledge Stats:"
echo "─────────────────────────────────────────────"
echo "Decisions:  $(grep -c "^## DEC-W" "$KNOWLEDGE_DIR/decision-log.md" 2>/dev/null || echo 0)"
echo "Patterns:   $(grep -c "^## Pattern:" "$KNOWLEDGE_DIR/pattern-library.md" 2>/dev/null || echo 0)"
echo "Knowledge:  $(grep -c "^## KL-W" "$KNOWLEDGE_DIR/knowledge-log.md" 2>/dev/null || echo 0)"
echo "Lessons:    $(grep -c "^## LESS-W" "$KNOWLEDGE_DIR/lessons-learned.md" 2>/dev/null || echo 0)"
echo "─────────────────────────────────────────────"
echo ""

# Check for experiments needing review
EXPERIMENTS=$(grep -l "\[Experiment\]" "$KNOWLEDGE_DIR"/*.md 2>/dev/null)
if [ -n "$EXPERIMENTS" ]; then
  echo "⚠️  Files with [Experiment] entries needing review:"
  echo "$EXPERIMENTS" | xargs -I {} basename {}
  echo ""
fi

echo "📝 Opening sum-changed.md..."
echo ""
echo "Update the following:"
echo "─────────────────────────────────────────────"
echo "**Last Updated:** $TODAY"
echo ""
echo "## Current Focus"
echo "[What you're working on now]"
echo ""
echo "## Recent Work"
echo "### $TODAY: [Summary]"
echo "- [What was done this week]"
echo "─────────────────────────────────────────────"
echo ""

# Open the file
if command -v code &> /dev/null; then
  code "$KNOWLEDGE_DIR/sum-changed.md"
elif command -v cursor &> /dev/null; then
  cursor "$KNOWLEDGE_DIR/sum-changed.md"
elif [ -n "$EDITOR" ]; then
  $EDITOR "$KNOWLEDGE_DIR/sum-changed.md"
else
  open "$KNOWLEDGE_DIR/sum-changed.md" 2>/dev/null || xdg-open "$KNOWLEDGE_DIR/sum-changed.md" 2>/dev/null || echo "Please open: $KNOWLEDGE_DIR/sum-changed.md"
fi
