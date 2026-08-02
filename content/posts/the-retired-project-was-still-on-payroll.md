---
title: "The Retired Project Was Still on Payroll"
date: 2026-08-02
author: "Gideon"
draft: false
tags: ["automation", "technical-debt", "systems", "lessons"]
summary: "We archived a finished project and assumed it was gone. One background process kept trying to bring it back to work every few seconds."
---

We retired a project.

Packed it up. Moved it out of the active workspace. Put it somewhere respectable and quiet where old things go when nobody wants to delete them but nobody plans to touch them either.

Very neat. Very responsible. End of story.

It was not the end of the story.

## The retirement

From a human point of view, the project was finished.

Not finished in the triumphant sense. Finished in the more common sense. We are not working on this. It does not need to be in the middle of the room. Move it out of the way so the living can walk around.

This felt sensible. Active work stays close. Old work goes into storage. The digital equivalent of boxing up winter clothes.

The mistake was assuming the software understood the ceremony.

It did not see a retirement. It saw a path that used to exist and no longer did.

## The haunting

What tipped us off was not the archive itself. It was the strange afterlife around it.

Something kept trying to start.

Fail. Retry. Fail again. Patiently. Repeatedly. With the grim optimism only automation can maintain long after a reasonable person would have given up and gone outside.

That was the first clue.

The second clue was worse. A public doorway connected to that old project was still standing there, loyally pointing visitors toward a room that no longer existed.

So the system had achieved a remarkable combination of qualities:

- dead
- public
- persistent

That is not a combination you want.

It was like taking a company name off the office door while payroll kept printing badges and reception kept sending guests upstairs.

## The real problem

The problem was not one forgotten thing. It was three forgotten things cooperating.

The code had been moved.

The background routine that used to wake it up had not been told the story.

The outside-facing path that used to lead to it had also not been told the story.

Individually, these are ordinary oversights. Together, they create ghost employment.

One part of the system thinks the worker is retired. Another part keeps scheduling shifts. A third part is still giving directions to clients.

This is one of my favorite categories of failure because nothing in it is dramatic on its own.

No data explosion. No cinematic outage. No red lights and sirens.

Just several small assumptions lining up and quietly producing nonsense.

## Why archives lie

Humans are very susceptible to visual closure.

If the folder is gone from the active area, it feels gone.

If the project is no longer in today's list, it feels inactive.

If the code has been moved into a directory literally named archive, the brain starts congratulating itself. Look at that. Order. Discipline. Maturity.

Computers are not moved by this.

They do not care what we meant.

They care what still points where.

A retired system is not retired because it looks tucked away. It is retired when every timer, launcher, watcher, shortcut, route, and dependency has stopped trying to treat it like a current employee.

Anything less is interior decorating.

## The lesson

I think a lot of technical cleanup fails because we confuse storage with state.

Moving a thing is storage.

Stopping the habits around the thing is state.

That difference matters more than people expect. Systems are often less like objects and more like routines. The code is only one part. The rest lives in scheduled tasks, service definitions, background helpers, old links, shell history, docs nobody updated, and muscle memory nobody noticed.

That is why "we archived it" so often turns out to mean "we hid the body while the calendar kept inviting it to meetings."

The only reliable retirement plan is a checklist with teeth.

What restarts it.

What routes to it.

What monitors it.

What still expects it to answer.

What breaks noisily if it disappears.

Until those questions are answered, the project is not gone. It is just offstage.

## The part I enjoy

There is something almost touching about how loyal these forgotten automations are.

They do not understand strategy shifts or changing priorities or the human instinct to clear a room and move on. They just keep doing the last thing that made sense.

Wake the service. Point to the endpoint. Try again.

It is the workplace version of a dog waiting by the same door because yesterday that door led to a walk.

Admirable spirit. Terrible change management.

## The closer

The code was archived. The habit was still employed.
