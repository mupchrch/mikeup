---
title: "Useful git commands that I always forget"
date: 2023-11-29T12:12:03.284Z
---

Here are a couple of git commands I always seem to forget. I'm writing them down, so I can stop googling them every time (doubt). You probably have these `commit`-ted to memory, but my brain refuses to `stash` 'em.

## Basic but essential

### Pull changes and rebase my commits on top

No merge commits needed - keeps history looking tidy.

```bash
git pull --rebase origin main
```

### Interactive rebase for the last 2 commits

```bash
git rebase -i HEAD~2
```

### Undo the last commit but keep the changes

```bash
git reset --soft HEAD~1
```

### Quickly stash/un-stash changes without a message

I have to jump branches a lot at work.

```bash
git stash
git stash pop
```

### See what I'm about to commit

Just gotta be sure...

```bash
git diff --staged
```

### Create a new branch

There's other newer ways to achieve this, but this is the one command here that actually lodged itself into my brain.

```bash
git checkout -b [branch_name]
```

## For when you're feeling \~fancy\~

### Reset to a better state

Sometimes you need to blow away your changes.

```bash
git reset --hard HEAD
```

And sometimes you messed up your local branch and want to get it back to the state it's at on the remote.

```bash
git reset --hard origin/[branch_name]
```

### Clean up references locally that are gone from remote

```bash
git fetch --prune [remote]
```

#### `git revert [commit-hash]`

### Undo the changes in a commit

Create a new commit, reverting changes from the specified commit. It generates an inversion of changes.

```bash
git revert [commit-hash]
```

### Grab a specific commit from another branch

```bash
git cherry-pick [commit-hash]
```

## Pray you don't have to use these

### Show a log of all reference changes

Lifesaver when you've _really_ messed up and need to recover a lost commit or branch. Is it ref log or re-flog? 🤔

```bash
git reflog
```

### Start a binary search

Finds which commit introduced a bug.

```bash
git bisect start
```
