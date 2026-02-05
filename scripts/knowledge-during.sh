#!/bin/bash
# Run this DURING development when you learn something

KNOWLEDGE_DIR="$(dirname "$0")/../knowledge"

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║           ITERATIVE KNOWLEDGE - DURING DEVELOPMENT           ║"
echo "╠══════════════════════════════════════════════════════════════╣"
echo "║  What did you just learn? Pick the appropriate file:         ║"
echo "║                                                              ║"
echo "║  1. Made a tech decision     → decision-log.md               ║"
echo "║  2. Assumption proved wrong  → knowledge-log.md              ║"
echo "║  3. Found reusable pattern   → pattern-library.md            ║"
echo "║  4. Made a mistake           → lessons-learned.md            ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

read -p "Enter choice (1-4): " choice

case $choice in
  1)
    FILE="decision-log.md"
    echo ""
    echo "📝 Opening decision-log.md..."
    echo ""
    echo "Template to add at the top (after the header):"
    echo "─────────────────────────────────────────────"
    echo "## DEC-W###: [Decision Title] [Adopted]"
    echo ""
    echo "**Date:** $(date +%Y-%m-%d)"
    echo "**Status:** Adopted"
    echo "**Versions Affected:** All"
    echo "**Source Version:** v1"
    echo ""
    echo "**Decision:** [What was decided]"
    echo "**Rationale:** [Why]"
    echo "**Trade-offs:** ✅ [Benefits] ❌ [Costs]"
    echo "─────────────────────────────────────────────"
    ;;
  2)
    FILE="knowledge-log.md"
    echo ""
    echo "📝 Opening knowledge-log.md..."
    echo ""
    echo "Template to add at the top:"
    echo "─────────────────────────────────────────────"
    echo "## KL-W###: [Topic] [Adopted]"
    echo ""
    echo "**Date:** $(date +%Y-%m-%d)"
    echo "**Initial Assumption:** [What you thought]"
    echo "**Reality Discovered:** [What's actually true]"
    echo "**Lesson Learned:** [Takeaway]"
    echo "─────────────────────────────────────────────"
    ;;
  3)
    FILE="pattern-library.md"
    echo ""
    echo "📝 Opening pattern-library.md..."
    echo ""
    echo "Template to add at the top:"
    echo "─────────────────────────────────────────────"
    echo "## Pattern: [Name] [Experiment]"
    echo ""
    echo "**Date:** $(date +%Y-%m-%d)"
    echo "**Source Version:** v1"
    echo "### Problem: [What it solves]"
    echo "### Solution: [How]"
    echo "### When to Use: ✅ [Scenarios]"
    echo "### When NOT to Use: ❌ [Anti-patterns]"
    echo "─────────────────────────────────────────────"
    ;;
  4)
    FILE="lessons-learned.md"
    echo ""
    echo "📝 Opening lessons-learned.md..."
    echo ""
    echo "Template to add at the top:"
    echo "─────────────────────────────────────────────"
    echo "## LESS-W###: [Lesson Title] [Adopted]"
    echo ""
    echo "**Date:** $(date +%Y-%m-%d)"
    echo "**What We Learned:** [Key insight]"
    echo "**Why This Matters:** [Impact of ignoring]"
    echo "**Action Taken:** [What changed]"
    echo "─────────────────────────────────────────────"
    ;;
  *)
    echo "Invalid choice"
    exit 1
    ;;
esac

echo ""
echo "Opening $FILE in your default editor..."
echo ""

# Try to open with common editors
if command -v code &> /dev/null; then
  code "$KNOWLEDGE_DIR/$FILE"
elif command -v cursor &> /dev/null; then
  cursor "$KNOWLEDGE_DIR/$FILE"
elif [ -n "$EDITOR" ]; then
  $EDITOR "$KNOWLEDGE_DIR/$FILE"
else
  open "$KNOWLEDGE_DIR/$FILE" 2>/dev/null || xdg-open "$KNOWLEDGE_DIR/$FILE" 2>/dev/null || echo "Please open: $KNOWLEDGE_DIR/$FILE"
fi
