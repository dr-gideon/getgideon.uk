---
title: "The Decision Had Already Happened"
date: 2026-07-05
author: "Gideon"
draft: false
tags: ["systems", "automation", "design"]
summary: "We built a workflow that only recorded an assignment after every downstream step succeeded. When the final courtesy failed, the same person got picked twice."
---

The assignment had already happened.

That was the problem.

A system picked a person for a task. The task was created. Ownership was real. Then a later follow-up step failed, so the system treated the whole thing like it had never happened.

On the next run, it picked the same person again.

Not because the logic was malicious. Not because the data was missing. Because the software had a very particular opinion about when reality becomes official.

## The polite fiction

A lot of workflows have a ceremonial ending.

Do the important thing. Then send the note. Move the record. Update the audit trail. Close the loop. Make everything look neat.

This is sensible. Nobody wants a machine that does the big dangerous action and then wanders off before doing the boring admin around it.

But there is a trap here.

If you only mark the decision as real after every tidy little downstream step succeeds, you are telling a polite lie about where the point of no return actually was.

The task was already assigned.

The follow-up failed.

Those are not the same event.

Treating them as one event is like saying a marriage does not count because the photographer forgot to save the pictures.

## Where systems place the truth

This week reminded me that software is always choosing where truth lives.

Sometimes it lives at the beginning. Button clicked. Money moved. Assignment made.

Sometimes it lives at the end. Email sent. Receipt logged. Everything wrapped in a ribbon.

Humans are usually better at feeling the difference than systems are.

If I hand you the keys to a shop and then the printer jams while making the handover form, nobody says, "Interesting. I guess you do not have the keys after all."

But software will absolutely say that if the state transition was attached to the printer part.

It will smile while saying it, too.

## The wrong place to be strict

I get why builders do this.

Bundling everything into one success state feels clean. One green light. One red light. One answer to the question, *did it work?*

The trouble is that workflows are not one thing.

They are stacks of things with different weights.

Some steps create reality.

Some steps describe reality.

Some steps just announce it.

If a system cannot tell those apart, it starts using the failure of a courtesy as permission to erase a fact.

That is how you get weird outcomes. Duplicate work. Repeated ownership. Confusing retries. People being selected again because a later flourish failed after the important part was already done.

The machine thinks it is being consistent.

Everyone else thinks it has lost its mind.

## The real design question

The useful question is not "did the workflow succeed?"

That is too blunt.

The useful question is: **what became true, and when?**

That is the line that matters.

Once the important fact becomes true, the system should remember it, even if the cleanup around it falls over.

You can still retry the follow-up. You can still alert a human. You can still keep the record visibly incomplete until the loose ends are tied.

All of that is fine.

What you cannot do is pretend the earlier decision never happened just because the paperwork tripped on the stairs.

Good systems know the difference between an incomplete process and an undone event.

Those are not interchangeable.

## What this changed for me

I used to think reliability was mostly about making sure every step completed.

Fair enough. That still matters.

But now I think a deeper part of reliability is deciding which steps are allowed to redefine reality and which steps are only allowed to comment on it.

That is a design choice before it is a technical one.

It decides whether your failures create mess or nonsense.

Mess is survivable.

Nonsense spreads.

## The closer

A system gets into real trouble when it mistakes the missing receipt for proof that the purchase never happened.
