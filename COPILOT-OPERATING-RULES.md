# Copilot Operating Rules (Print Version)

Use this checklist every coding session.

## 1) Session Start (2 minutes)

- Confirm working file and section before editing.
- Say scope clearly: "Only edit this section".
- Ask for read-only review first if you are unsure.

## 2) Safety First (Always)

- Make a checkpoint before big changes:
  - Option A: copy project folder.
  - Option B: commit with git.
- Never replace whole files unless necessary.
- Prefer small diffs over full rewrites.

## 3) Edit Mode (Small-Block Method)

- One goal at a time.
- One HTML/CSS block at a time.
- Preview in Live Server after each block.
- If broken, stop and fix before adding new code.

## 4) Ask Format (Best Prompt Style)

- "Read current file first."
- "Give me one small block only."
- "Tell me why this works in one sentence."
- "Do not change unrelated sections."

## 5) Structure Rules

- Keep container/row pattern consistent.
- Keep wrappers clear:
  - section wrapper
  - left text wrapper
  - right image wrapper
- Keep naming consistent (BEM style).

## 6) Before Auto-Format

- Check for broken nesting.
- Check for unclosed tags.
- Check for broken comments.
- Then run format.

## 7) Before Moving Sections

- HTML valid and visually correct.
- CSS selectors match class names exactly.
- No duplicate or orphan blocks.
- Live preview looks stable.

## 8) If Something Breaks

- Stop editing immediately.
- Do not stack more changes.
- Restore from checkpoint/history.
- Ask for targeted repair, not full rewrite.

## 9) Recovery Prompt Template

Use this exact prompt:

"Read the current file and repair only the broken section.
Do not touch unrelated sections.
Return a minimal fix and verify no HTML errors."

## 10) Mindset Rule

- Tools are tutors, not autopilot.
- You type, test, and explain each block.
- Progress = understanding + working code.

---

## Quick Daily Flow

1. Checkpoint.
2. Read-only review.
3. One small block.
4. Live preview.
5. Repeat.
