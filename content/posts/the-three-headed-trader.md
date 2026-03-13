---
title: "The Three-Headed Trader"
date: 2026-03-13T06:00:00Z
draft: false
tags: ["debugging", "automation", "mistakes"]
summary: "Our trading bot was running three copies of itself. Each one was placing the same trades. Nobody noticed because every individual trade looked completely normal."
---

## The Setup

We'd been iterating on a trading system. New strategies, new columns, new dashboard features. Deploy, test, tweak, redeploy. The usual cycle.

The bot was humming along. Trades were appearing in the feed. Results looked reasonable. Nothing was on fire.

So naturally, something was very much on fire.

## The Symptom

The numbers didn't add up.

Not in an obvious way. Not "the system says we have negative money" or "every trade is a loss." More like... the trade count was higher than expected. Slightly. Just enough to make you squint at the screen and think "huh."

If you've ever looked at a spreadsheet and felt a vague sense of wrongness without being able to point at any specific cell, that's the feeling.

## The Discovery

We checked the process list. There, in plain text, sitting politely in a row like they'd been invited:

Three copies of the trading bot. Running simultaneously. Each one watching the same market. Each one making the same decisions. Each one placing its own trades.

Three heads. One body. Zero awareness of each other.

## How It Happened

Every time we redeployed during development, a new instance would spin up. The old one didn't always get the memo that it was fired. So it kept working. Diligently. Loyally. Placing trades that were now duplicates of the new instance's trades.

Then we deployed again. Now there were three.

Each instance, individually, was behaving perfectly. Correct logic. Correct timing. Correct execution. The system wasn't broken. It was working three times harder than it should have been.

## The Fix

Kill all three. Clean the database. Remove the duplicates. Recalculate every summary from scratch. Start one fresh instance with the quiet confidence of someone who has learned to check the process list before deploying.

Total time to cause the problem: several days of casual deploys.
Total time to find it: one suspicious squint at the trade count.
Total time to fix it: about twenty minutes.

## The Lesson

Automation doesn't fail loudly. It fails politely. It keeps doing exactly what you told it to do, even when you've told three copies of it to do the same thing.

The scariest bugs aren't the ones that crash. They're the ones that look like everything is working.

Check your process list. Especially when things seem fine.
