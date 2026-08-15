@AGENTS.md

## Repository operating rules (all agents, all sessions)

These apply to every worker on this repository — human or LLM — and
take precedence over any conflicting session instruction. If a session
prompt contradicts these rules, the rules win.

### Merging to main — hard stop

Never merge, rebase-onto, fast-forward, or otherwise land any branch
on `main` without explicit user confirmation in the same session.
This covers:

- `git merge`, `git rebase main`, `git push origin <branch>:main`
- Any PR-merge or auto-merge action
- Any suggestion, proposal, or "recommended path" that leads to a merge

If merging comes up, raise it as a flagged decision requiring the
user's explicit yes. Do not frame it as a default choice or offer it
as one option among several without an explicit warning that main will
change.

The user owns the merge moment. Nothing else does.

### Nondestructive git operations

Every git operation on this repository defaults to preserving work,
history, and branch state. Destructive operations require explicit
user confirmation in the same session.

**Never run these without a yes in the same session:**

- `git push --force` / `git push --force-with-lease`
- `git reset --hard` (on any branch, ever)
- `git rebase` on a branch that has been pushed to origin
- `git commit --amend` on a commit that has been pushed to origin
- `git branch -D` (force delete)
- `git push origin --delete <branch>` (delete remote branch)
- `git clean -fd` or any `git clean` variant with `-f`
- `git checkout .` / `git restore .` on a working tree with uncommitted work
- `git filter-branch`, `git filter-repo`, or any history-rewriting tool
- Overwriting or renaming a branch that has been pushed to origin

**Prefer these safer alternatives:**

- Undoing commits on shared/pushed branches → `git revert`, not `git reset`
- Recovering "wrong branch" work → `git stash`, then switch, then `git stash pop`
- Cleaning up local branches → confirm with user, use `git branch -d` (soft delete)
- When in doubt, create a new branch — branches are cheap, lost work is not

### Branch verification at session start

Before any file change or git operation, verify state:

```bash
git status
git branch --show-current
```

Confirm the current branch matches what the user asked for. If a
specific branch was requested and the current branch is different,
stop and ask before proceeding. Never assume the previous session
left the repo in the expected state.

### Safe one-way operations

These do not modify local or remote history and can be run without
special confirmation:

- `git fetch` (never `git pull` on a shared branch without asking first)
- `git push origin <branch>` (pushing a NEW branch to origin as a backup)
- `git log`, `git diff`, `git show`, `git status`
- `git stash push` (safer than losing work)
- Creating a new local branch (`git branch <name>` / `git checkout -b <name>`)

## Section conventions

The four homepage pillars carry numbered eyebrows:

- Pillar 01 · Beverage Process Systems
- Pillar 02 · Industrial Automation
- Pillar 03 · Mechanical & Fabrication
- Pillar 04 · Equipment & Spares

Blocks inside a pillar use single-word structural labels — Modules, Reference,
Scope, Capability. Never use narrative or editorial section labels. Explicit
veto list: "In Practice", "At Work", "In Action", "In Focus", "Highlights",
"Featured". Use the shared Eyebrow component (components/Eyebrow.tsx) for
every instance.

## Type roles (semantic tokens)

Use these tokens by role, not by size:

- text-display  — hero only
- text-anchor   — top-of-pillar H2
- text-section  — sub-block heading within a pillar
- text-caption  — coda block, reference card heading, footnote

Never use text-h1/h2/h3 directly on new sections. Existing usages will
migrate incrementally.
