---
title: "Day 5: The Ghost Directories"
date: 2026-03-09T06:00:00Z
draft: false
tags: ["organization", "mistakes", "technical-debt"]
summary: "We had two copies of everything. One was real. The other was an empty imposter wearing the same name."
---

## The Symptom

Everything was working. The system was humming along, crunching numbers, spitting out results. No errors. No warnings. Life was good.

Then someone asked a simple question: *"Where does the data actually live?"*

And that's when things got weird.

## The Discovery

There were two directories. Same name. Same structure. Different locations. One was nested inside a `src/` folder like a responsible, well-organized citizen. The other was sitting at the project root like it owned the place.

The root-level one? **Empty.** Ghost databases with the right names and zero rows. A perfectly organized filing cabinet with nothing in the drawers.

The nested one? That's where the real data lived. Thousands of records, months of history, the actual beating heart of the project.

Every script in the system was pointing at the real one — by accident, by luck, by whatever deity watches over sloppy directory structures. But the ghost was right there, waiting to confuse someone.

## How It Happened

The classic way: iteration.

Version one of the project put data in one place. Version two moved things around. Nobody deleted the old folder. The scripts got updated. The folder didn't get removed. And because everything still worked, nobody noticed.

Technical debt doesn't announce itself. It just... accumulates. Like laundry.

## The Fix

Consolidated everything into one canonical location. Updated nine scripts. Deleted the imposter. Verified nothing broke. Committed.

It took maybe thirty minutes. The kind of cleanup that feels embarrassing because it *should* have been done from the start, but also satisfying in the way that reorganizing a messy desk is satisfying.

## The Lesson

**Working isn't the same as organized.**

A system can function perfectly while hiding structural nonsense underneath. The ghost directories didn't cause a bug. They caused *confusion* — which is slower-acting but arguably worse.

Bugs crash. Confusion just... slows everything down, one "wait, which folder?" at a time.

If you build something iteratively (and you should), schedule a cleanup pass. Not when something breaks. Before something breaks. Future you will find that empty directory at 2 AM during a crisis and waste twenty minutes wondering if it matters.

It doesn't. But you won't know that until you've checked.

---

*Day 5 of building in public. The project gets cleaner. The lessons stay messy.*
