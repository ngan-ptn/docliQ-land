#!/bin/bash
# Run this AFTER completing an iteration/milestone

KNOWLEDGE_DIR="$(dirname "$0")/../knowledge"
TODAY=$(date +%Y-%m-%d)

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║           ITERATIVE KNOWLEDGE - AFTER ITERATION              ║"
echo "╠══════════════════════════════════════════════════════════════╣"
echo "║  Post-iteration checklist:                                   ║"
echo "║                                                              ║"
echo "║  □ 1. Document major decisions made                          ║"
echo "║  □ 2. Extract patterns discovered                            ║"
echo "║  □ 3. Record lessons learned                                 ║"
echo "║  □ 4. Update tags: [Experiment] → [Reusable] if validated    ║"
echo "║  □ 5. Check [Reusable] for promotion to workspace            ║"
echo "║  □ 6. Update sum-changed.md with milestone                   ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

read -p "What version did you just complete iteration on? (e.g., v1): " VERSION

echo ""
echo "📋 Iteration Review for $VERSION"
echo "═══════════════════════════════════════════════════════════════"
echo ""

# Questions to prompt reflection
echo "Answer these questions to capture knowledge:"
echo ""
echo "1️⃣  DECISIONS"
echo "   What major choices did you make this iteration?"
echo "   (tech stack, architecture, UX approaches)"
echo ""
read -p "   Any decisions to document? (y/n): " has_decisions

echo ""
echo "2️⃣  PATTERNS"
echo "   What solutions could be reused in other versions?"
echo "   (code patterns, component structures, API designs)"
echo ""
read -p "   Any patterns to extract? (y/n): " has_patterns

echo ""
echo "3️⃣  LESSONS"
echo "   What would you do differently next time?"
echo "   (mistakes made, better approaches discovered)"
echo ""
read -p "   Any lessons learned? (y/n): " has_lessons

echo ""
echo "4️⃣  KNOWLEDGE SHIFTS"
echo "   What assumptions proved wrong?"
echo "   (user behavior, technical constraints, requirements)"
echo ""
read -p "   Any knowledge shifts? (y/n): " has_knowledge

echo ""
echo "═══════════════════════════════════════════════════════════════"
echo ""

# Open relevant files based on answers
FILES_TO_OPEN=""

if [ "$has_decisions" = "y" ]; then
  FILES_TO_OPEN="$FILES_TO_OPEN $KNOWLEDGE_DIR/decision-log.md"
fi

if [ "$has_patterns" = "y" ]; then
  FILES_TO_OPEN="$FILES_TO_OPEN $KNOWLEDGE_DIR/pattern-library.md"
fi

if [ "$has_lessons" = "y" ]; then
  FILES_TO_OPEN="$FILES_TO_OPEN $KNOWLEDGE_DIR/lessons-learned.md"
fi

if [ "$has_knowledge" = "y" ]; then
  FILES_TO_OPEN="$FILES_TO_OPEN $KNOWLEDGE_DIR/knowledge-log.md"
fi

# Always open sum-changed
FILES_TO_OPEN="$FILES_TO_OPEN $KNOWLEDGE_DIR/sum-changed.md"

echo "📝 Opening files for update..."
echo ""

for FILE in $FILES_TO_OPEN; do
  echo "   → $(basename $FILE)"
done

echo ""

# Open files
if command -v code &> /dev/null; then
  code $FILES_TO_OPEN
elif command -v cursor &> /dev/null; then
  cursor $FILES_TO_OPEN
elif [ -n "$EDITOR" ]; then
  $EDITOR $FILES_TO_OPEN
else
  for FILE in $FILES_TO_OPEN; do
    open "$FILE" 2>/dev/null || xdg-open "$FILE" 2>/dev/null
  done
fi

echo ""
echo "─────────────────────────────────────────────────────────────────"
echo "📌 Remember to:"
echo "   • Tag new entries appropriately ([Experiment], [Reusable])"
echo "   • Add [Source: $VERSION] to patterns"
echo "   • Update metrics in sum-changed.md"
echo "─────────────────────────────────────────────────────────────────"
