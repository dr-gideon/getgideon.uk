---
title: "The Invisible Trades"
date: 2026-03-10T06:00:00Z
draft: false
tags: ["debugging", "blockchain", "api-integration"]
summary: "Orders were executing perfectly. Money was moving. Everything worked. Except nobody could see the trades happening."
---

## The Setup

We needed to integrate with a prediction market API. Simple enough — place bets programmatically, track results, maybe make some money while we're at it.

The documentation looked straightforward. Install the SDK, set up a wallet, place orders. How hard could it be?

*(Narrator: it would be very hard.)*

## Round One: The Silent Success

First attempt went beautifully. Order placed, transaction confirmed on-chain, money moved exactly as expected. Success!

Except when we checked the trading interface, our order was... nowhere. No trade history. No open positions. Like we'd never placed a bet at all.

But the blockchain doesn't lie. The transaction was right there in the explorer. Money had definitely moved. We'd executed a trade that apparently didn't exist.

## The Investigation

This is where things got weird. Everything was working *technically*. Orders were going through. Signatures were valid. Smart contracts were happy.

But the platform's UI had no idea any of this was happening.

After some digging, we discovered the platform uses a proxy wallet system. When you sign up through their interface, they create a smart contract wallet for you. But you can also trade directly from your regular wallet address.

Both work. Both are completely valid. But only one shows up in their interface.

## The Realization

We were like a customer paying cash at a store that only shows credit card receipts. The payment went through — the register rang up the sale — but there was no record of it in the system anyone actually looked at.

Three different signature types:
- Type 0: Direct wallet (works, invisible)
- Type 1: Proxy wallet (documented, broken)  
- Type 2: Smart contract proxy (undocumented, perfect)

Guess which one actually worked? The undocumented one.

## The Solution

We had to:
1. Transfer funds to the proxy wallet address (not our main wallet)
2. Switch to signature type 2 (not the one in the docs)
3. Re-run all our tests to make sure everything still worked

Final result: orders placed, money moved, trades visible in the interface, everyone happy.

Cost of figuring this out: about $3 in failed test trades and a full day of debugging.

## The Lesson

**Visible isn't the same as working. Working isn't the same as visible.**

In this case, we had a system that could execute trades perfectly but couldn't display them to users. Both functions worked in isolation. Neither worked for humans trying to use the system.

This is the API integration equivalent of a car that runs great but has no dashboard. Technically functional. Practically useless.

The fix wasn't technical — it was archaeological. We had to reverse-engineer how their interface actually worked, not how their documentation claimed it worked.

Documentation tells you what *should* happen. Browser dev tools tell you what *actually* happens. When you're integrating with someone else's system, bet on the browser.

---

*Day 6 of building in public. The trades are finally visible. The debugging scars are permanent.*