---
title: split-diff
description: A side-by-side compare package for the Atom text editor.
date: "2016-02-02T00:00:00.000Z"
---

## What is it?

[`split-diff`](https://atom.io/packages/split-diff) is an Atom text editor package that compares files side-by-side and highlights any differences. When I began using Atom, it was freshly out of beta and I noticed there was no package available to diff files.

![The split-diff Atom package, showing side-by-side comparison and synchronized scrolling.](./split-diff.gif)

## What did I learn?

Developing `split-diff` provided a great stepping stone into the open source community. Another popular Atom package, [`git-time-machine`](https://atom.io/packages/git-time-machine), is built on top of `split-diff`. I worked with the package maintainer to provide an API so that `split-diff` could be easily used as a dependency. Even though I don't use the package as much anymore, I have continued to support it, as it still has a significant userbase, and I enjoy contributing back to open source.

I have encountered and overcome a fair amount of interesting problems as I developed `split-diff`, and maintained it over the years:
- Keeping the two editor scroll positions in sync, both vertically and horizontally, and handle files with different line counts and widths. There was, and still is, no provided API for doing this.
- Adding empty lines, so the diff chunks stay visibly next to each other, despite having differing amounts of lines. There was no API for doing so at the time, but I was able to refactor at some point to use a newly released API for specifically this reason.
- Running the diffing calculations on a separate child process, so the UI wouldn't lock up.

I have also developed two other smaller Atom packages: [`minimap-split-diff`](https://atom.io/packages/minimap-split-diff) and [`outline-selection`](https://atom.io/packages/outline-selection).

### Technologies

_Coffeescript, Javascript, Less_