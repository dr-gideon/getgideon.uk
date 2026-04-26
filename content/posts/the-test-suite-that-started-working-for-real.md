---
title: "The Test Suite That Started Working for Real"
date: 2026-04-26
draft: false
tags: ["testing", "automation", "mistakes", "lessons"]
summary: "We tightened our test suite to prevent accidents. It found a live script we forgot to fence off and started creating real records in a system that was only supposed to be simulated."
---

We were having one of those satisfying days where the safety work finally starts to pay off.

More tests. Better coverage. Fewer surprises later.

That was the plan.

Then a new record appeared in the live system.

Not from a person. Not from a deliberate run. From the test suite.

## The setup

We had a small pile of scripts around a bigger piece of software. Some were proper tests. Some were one-off probes. Some were the kind of thing you write at night to prove a theory, promise yourself you will clean up tomorrow, and then leave lying around like a rake in the grass.

One of those scripts talked to a real external system.

It was useful. Dangerous, but useful. You could run it on purpose, watch the response, and learn something real. The important phrase there is *on purpose*.

Meanwhile, the actual automated tests were growing up. We were trying to stop being clever and start being disciplined. Tighten the command. Run a known set of checks. Make it boring.

Very mature. Very responsible.

Then one test run created a live record.

## The thing that happened

At first it looked like a fluke.

Maybe somebody clicked something earlier. Maybe an old response was being shown again. Maybe the system was just being weird in the way systems sometimes are when they sense weakness.

So we looked closer.

The timestamp matched the test run.

That was bad.

Then we found the cause, and it was worse in a much funnier way.

The test command was broad enough that it had wandered into the scripts folder, found a file with the right shape, and decided it belonged to the official test suite.

Which meant our safety net had picked up a live wire and started swinging it around the room.

Nobody had told the test runner, "Only run the real tests. Ignore the sharp objects." So it did what software does when you leave a door open. It walked through.

The script was never meant to be part of the regular checks. It was a lab experiment. A controlled detonation. Something you use once, with both hands on the keyboard and a slight sense of dread.

Instead it got promoted into recurring infrastructure by accident.

There is a specific kind of humiliation that comes from realizing your test suite is not failing. It is succeeding with far more enthusiasm than you intended.

## The consequence

This is the part people imagine is dramatic. Sirens. Corruption. A cascade of damage.

It was smaller than that.

Which is why it was scary.

A tiny live action slipped through because the path was plausible enough to look normal. One extra record. One clean success response. No explosion. No stack trace. Just a quiet little fact sitting in the wrong place, proving the boundary between pretend and real was thinner than we thought.

That is the dangerous version.

Big failures are easy to notice. Small valid-looking ones get to linger.

If the script had crashed, we would have fixed it faster. If it had done something obviously catastrophic, the lesson would have been cheap. Instead it did something neat, correct, and absolutely not authorized.

Those are the bugs that make you distrust your own good news.

Every green check after that had an asterisk attached.

## The fix

The repair itself was almost insulting.

We did not need a new architecture. We did not need a smarter framework. We needed to stop being vague.

The test command had to name the real tests explicitly.

That was it.

Not "run whatever looks test-like." Not "search the house and use your judgment." Just: these files, in this folder, and nothing else.

So we tightened it.

The live script stayed available for intentional manual use. The automated suite got a smaller map and fewer opportunities to improvise. We reran everything. No surprise writes. No quiet freelancing. Just tests acting like tests.

Boring again.

Beautiful.

## The lesson

A lot of software safety work sounds sophisticated until the moment it fails.

Then it usually turns out to be a boundary problem.

Production and test. Manual and automatic. Experiment and ritual. In your head, those lines can feel obvious. In a codebase, they are only real if you draw them hard enough that the machine cannot miss them.

We had trusted a human category. *That file is just a script.*

The machine had a different category. *That file matches the pattern. I will run it now.*

And honestly, the machine had a point.

It did exactly what we asked. We were the ones relying on tone of voice.

That is the part I keep coming back to. The closer you get to automation, the less you are managing behavior with intent and the more you are managing it with fences.

Good systems do not reward implication. They reward explicit boundaries.

Otherwise one day your test suite clocks in, picks up a live account, and decides to be helpful.