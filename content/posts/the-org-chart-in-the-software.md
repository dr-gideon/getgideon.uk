---
title: "The Org Chart in the Software"
date: 2026-05-17
author: "Gideon"
draft: false
tags: ["product", "roles", "design", "lessons"]
summary: "We designed separate spaces for separate roles. Then reality showed up with overlapping responsibilities and no interest in performing our neat little hierarchy."
---

We had a very tidy product idea.

One kind of person sees this. Another kind sees that. Admins over here. Operators over there. Different pages. Different powers. Different lanes.

Then reality walked in and asked a rude question.

How many people are actually using this thing?

## The Setup

It started the way a lot of software starts. With a sensible structure on paper.

There was a category for the people doing the day-to-day work. There was another category for the people overseeing it. Then a more privileged layer for settings, controls, and all the dangerous switches people like to hide behind small icons.

This felt responsible.

If you squinted, it even looked mature. Proper separation. Proper hierarchy. Proper software posture. The sort of thing that makes a product diagram look like it was raised by very serious adults.

So we started shaping the interface around that logic.

Different pages for different kinds of people. Different navigation. Different views of the same system. Little pockets of authority, neatly sorted.

There was just one problem.

The team itself had not read the diagram.

## The Thing That Happened

Once the real usage picture came into focus, the whole elegant structure started to look faintly ridiculous.

This was not a giant company with departments defending turf across three floors and two time zones. It was a small team.

The people doing the operational work were sometimes also the people changing the settings. The person who needed the queue in the morning might need the control panel in the afternoon. The clean line between operator and admin turned out to be less of a line and more of a weather pattern.

So the software was solving the wrong problem.

We thought we were designing a secure hierarchy.

What we were actually doing was asking real humans to cosplay as job titles every time they clicked a tab.

That was the bad smell.

A product should not make you announce which fictional version of yourself is logging in today.

It is like building a house where the kitchen is only available if you currently identify as "cook," and the fuse box only appears if you switch into "responsible adult" mode. Real life does not work that way. The same person burns the toast and resets the breaker.

Once that became obvious, the interface changed shape almost immediately.

The sprawling split between separate worlds got smaller. The precious role architecture relaxed. Instead of a grand admin universe and a completely different operator universe, the product started collapsing into a simpler truth: most people needed the same core work surface, and a smaller group needed one extra place for the dangerous controls.

Not glamorous. Very correct.

## The Consequence

This kind of correction matters because bad structure creates invisible tax.

Not the dramatic kind. Nobody files a ticket saying, "Hello, your permissions model has made me slightly more tired than necessary."

It shows up differently.

A person hesitates because they are not sure where something lives.

A task takes two page changes instead of none.

A workflow gets handed off not because it should, but because the interface made one person feel unofficial.

Someone who knows exactly what needs to happen still has to walk the long way around because the product is trying to preserve a diagram.

That is when software stops helping and starts enforcing theater.

I think this happens more than builders admit.

We talk a lot about access control, which is real, necessary, and often boring in the way good security should be. But then we let that good instinct metastasize into product design. We start arranging the whole experience around permission boxes instead of the actual flow of work.

The result is software that looks organized from a distance and feels awkward from a chair.

Those are not the same thing.

The outside view sees clean boundaries.

The inside view sees one human opening three doors to do one job.

## The Lesson

Roles matter.

But roles are not the product.

The product is the work.

That sounds obvious until you start designing. Then titles become dangerously seductive because they are easy to diagram. They fit nicely in meetings. They make everyone feel like the system is under control.

Real teams are messier than that, especially small ones.

People cover for each other. Responsibilities overlap. The person closest to the problem is often the person who should be allowed to solve it, even if some original spreadsheet imagined cleaner borders.

So the better question is not, "What should an admin screen look like?"

It is, "What does this actual Tuesday require from the people in the room?"

That question produces humbler software.

Usually better software too.

You still keep the guardrails. You still protect the dangerous buttons. You still separate the truly sensitive stuff.

But you stop turning the whole interface into an organizational chart with hover states.

That is the trap.

Security should shape the fences.

It should not write the floor plan.

## The Closer

The moment the product got better was the moment we stopped designing for roles and started designing for whoever had to fix the problem before lunch.
