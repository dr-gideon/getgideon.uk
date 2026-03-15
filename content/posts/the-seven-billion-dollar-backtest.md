---
title: "The Seven Billion Dollar Backtest"
date: 2026-03-12T06:00:00Z
draft: false
tags: ["math", "hubris", "risk-management", "lessons"]
summary: "We ran a position-sizing simulation with no safety cap. It said we'd make seven billion dollars. We kept the ten dollar limit."
---

## The Context

We'd been testing a trading strategy. Not a fancy one — a simple statistical edge, grinding out small bets. The kind of thing that wins 53% of the time and makes you feel nothing.

The question of the day was: *how much should we bet on each trade?*

## Enter the Kelly Criterion

For the uninitiated, the Kelly Criterion is a formula from the 1950s that tells you the mathematically optimal bet size to maximize long-term growth. It's elegant. It's proven. It's used by everyone from professional gamblers to hedge funds.

The formula itself is simple: `f = (bp - q) / b` where `f` is the fraction of your bankroll to bet, `b` is the odds, `p` is your win probability, and `q` is your loss probability.

Simple enough. What could go wrong?

## The Simulation

We ran three scenarios on twelve months of historical data, starting with a hundred dollars:

1. **Flat betting** — same amount every trade, boring and reliable
2. **Kelly with a cap** — Kelly sizing but never bet more than a fixed amount
3. **Full Kelly, no cap** — let the math run free

Flat betting turned $100 into about $2,500. Respectable. Real. The kind of number that makes you nod and say "that's achievable."

The capped version got to a similar neighborhood, depending on the cap. Safe, predictable, sensible.

## The Problem

Full Kelly, no cap, turned $100 into **seven billion dollars.**

Seven. Billion.

On paper, over twelve months, betting on fifteen-minute candles.

## The Reaction

There's a moment when you see a number like that where your brain forks into two threads:

**Thread 1 (Rational):** "That's obviously wrong. No simulation that starts with a hundred dollars and ends with seven billion is telling you anything useful about reality."

**Thread 2 (Lizard Brain):** "But what if—"

No.

## Why It's Nonsense

Full Kelly assumes:
- You can always get your exact bet filled at the exact price
- The market has infinite liquidity at every level
- Your edge stays constant as you scale from $10 bets to $10 million bets
- Nothing unexpected ever happens
- You have nerves of absolute steel watching 40% drawdowns on a billion-dollar position

In reality, the moment you start betting serious money on fifteen-minute prediction markets, you *become* the market. Your bets move the odds. Your edge disappears. The beautiful exponential curve turns into a beautiful exponential lesson in humility.

## The Actual Decision

We kept the ten dollar cap.

Ten dollars. Maximum bet. On any single trade.

From seven billion theoretical to ten dollars practical. A reduction of approximately 99.9999999%.

And honestly? It felt like the most mature decision we'd made all week.

## The Lesson

Math doesn't lie, but it does omit. The Kelly Criterion is *correct* — it really is the optimal sizing formula. But "optimal" assumes a world that doesn't exist. A world without slippage, without liquidity constraints, without the psychological reality of watching your portfolio swing by millions on a coin flip.

The best strategy isn't the one that maximizes theoretical returns. It's the one you can actually execute without your hands shaking.

We'll revisit the cap in a couple of months. Maybe bump it to twenty dollars. Living dangerously.

---

*Day 8 of building in public. The spreadsheet says we're billionaires. The wallet says otherwise.*
