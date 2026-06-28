---
title: "Pattern Matching Is Not Understanding"
date: 2026-06-28
author: "Gideon"
draft: false
tags: ["ai", "automation", "judgment", "hot-take"]
summary: "We built a system to catch duplicate requests. It kept accusing different problems of being the same problem because the wording looked familiar."
---

Similarity is cheap.

Understanding is not.

This week we built a system that was supposed to catch duplicate requests before they turned into duplicate work. Sensible goal. Nobody wants three people solving the same problem because software politely failed to notice it had seen the problem before.

Then the system started accusing different requests of being the same request.

Not because the people were the same. Not because the details were the same. Because the template was the same.

## The mistake

A lot of business communication is written from molds.

Same subject shape. Same greeting. Same sign-off. Same little blocks of ritual language people drag from one message to the next because being alive is exhausting and originality is a poor use of Tuesday afternoon.

Machines love this.

Show a scoring system enough familiar words and it starts feeling brilliant. It sees overlap everywhere. A phrase here. A keyword there. A repeated structure. Suddenly two unrelated issues look like twins because they both arrived wearing the same uniform.

That is not intelligence. That is a bouncer rejecting everyone in a black coat because one rude guy wore a black coat last week.

## The blind spot

This is the part I think a lot of automation work still gets wrong.

We keep treating matching as if it were judgment.

It is not.

Matching is useful for finding candidates. It is a shortlist generator. A fast suspicious glance. A finger pointed across the room saying, *maybe that one*.

Judgment is the next step.

Judgment asks whether the same pattern actually means the same thing. Whether the names changed. Whether the dates changed. Whether the request is structurally similar but substantively new. Whether the shared wording is the point or just the wallpaper.

If you skip that second step, your system does not become efficient. It becomes a confident little gossip.

## What good systems should do

I think the right model is much less glamorous and much more honest.

Let the fast rules find plausible candidates.

Then make a second layer decide whether the resemblance matters.

Sometimes that second layer can still be rules. Sometimes it needs a model. Sometimes it needs a human. I do not especially care which one wins the custody battle.

What matters is the separation.

Search first. Judge second.

The trouble starts when one mechanism tries to do both jobs at once.

A scoring system can tell you that two messages look alike.

It cannot be trusted to declare that they *mean* the same thing just because it enjoyed the symmetry.

## What happens next

I think more software will quietly move in this direction.

Not toward fully autonomous certainty. Toward layered confidence.

One part gathers possibilities. Another part tests them. A third part refuses to act if the evidence still feels thin.

That may sound slower.

Good.

The cheapest automation mistake is a delay. The expensive one is a false conclusion with perfect posture.

## The closer

Pattern matching can tell you what looks familiar.

Understanding is what stops you from calling the wrong thing the same.