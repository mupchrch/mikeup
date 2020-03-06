---
title: How I fumbled my way to a top Atom package (split-diff)
date: 2020-03-05T12:12:03.284Z
---

I know the [Atom text editor](https://atom.io) isn't the new hotness right now (I've long since switched to [VSCode](https://code.visualstudio.com/)), but I've just cracked into writing blog posts, and I'd like to share my rather accidental rise to open source "stardom". Stardom, here, is measured in Github stars, of course.

I first encountered Atom as an innocent new hire at my first real job. It was a frontend web application development position, which I only had minimal experience in from one of my internships. Anyway, I'm still working there nearly 5 years later, so I guess you could say it went alright.

Within a few months of starting, I was pair programming with a coworker, and when he opened up his text editor, my jaw hit the floor.

> Yeah man, look at these open source packages I installed to improve my workflow. I even wrote a couple of my own JS snippets to change some functionality for my usage. _AND_ I can style whatever I want to my liking with CSS.

Ok, what? I can use what I've learned so far at my job to customize the way my text editor looks and behaves? _Sold._

I had never really paid much attention to my text editor before. I had generally just rolled with whatever opened when I double-clicked a file. I shuddered while writing that sentence — _I thought blog posts were supposed to make me seem cool._

## Let's see what Atom can do

Immediately, I changed themes and tried out packages and created JS snippets and wrote CSS (I mean, as much as anyone really _knows_ how to write CSS). This was fantastic. Until it wasn't.

After about a month, I realized a major issue in my workflow. In order to compare two files, I would **BOOT UP MY ENTIRE WINDOWS VM** just so I could use WinMerge. In reflection, I'm baffled that this was a solution I tried even once, let alone for a _month._ This spurred me to go berserk trying out every single package that dared to utter the words `compare`, `diff`, or `merge`.

Below, you'll find reviews of each package from the perspective of an inexperienced simpleton:

- One offered diffing changes inline — Gross, I could barely understand when they were side-by-side, now you're going to bring in **a whole different axis**?
- One just highlighted changed line numbers — Okay, what do you expect me to do? **BOOT UP MY ENTIRE WINDOWS VM** to see what changed?
- Wait! One showed me side-by-side changes! — But in a popup that I couldn't edit ☹️

## Hacking the "hackable text editor"

I was floored. How could what I want not exist? (For one, Atom had just exited Beta.) I went into research mode. I found a [StackOverflow post](https://stackoverflow.com/a/1313218), which pointed me to a research paper titled [An O(ND) Difference Algorithm and its Variations](http://www.xmailserver.org/diff2.pdf). Nah. I'm good. I can barely vertically align text in a `<div>`. This is getting a little too college.

Wait a second. I've seen websites where you can paste in the contents of two files that you want to compare. How do they do it? ...What is [jsdiff](https://github.com/kpdecker/jsdiff)? _Some poor soul already did the dirty work!_ 🎉 (Seriously, a _huge_ shoutout to [Kevin Decker](https://github.com/kpdecker).)

I followed the documentation and slapped together an initial "Hello, World" package. At the time, packages were built using [CoffeeScript](https://coffeescript.org/), so I stumbled a bit in the beginning. [Things started slow](https://github.com/mupchrch/split-diff/commit/59b0676dfa5b53d900ec8fde1c6b833941ffd8c5), but I persevered:

![The first commit to show signs of life.](./important-commit.png)