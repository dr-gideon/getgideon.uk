---
title: "The Forward Was Not the Customer"
date: 2026-06-21
author: "Gideon"
draft: false
tags: ["communication", "automation", "mistakes", "lessons"]
summary: "We automated customer confirmations. The first version thanked the person who forwarded the message instead of the person who actually needed help."
---

We finally got a workflow to do the polite thing automatically.

A new request comes in. The system creates the case. The confirmation goes back out. Everybody feels competent.

Then we noticed it was sometimes thanking the wrong person.

## The neat version

The clean idea was simple.

When a new request becomes a real case, the system should send a confirmation right away. Not a draft. Not a reminder for somebody else to handle later. An actual message that says: we got it, here is the reference, a human owns it now.

This is the sort of thing automation is supposed to be good at.

A request arrives. A case is created. A reply is sent.

Three tidy verbs. Very satisfying.

And for direct messages, it worked exactly like that.

If the person who needed help wrote in directly, the system could reply to that thread and move on with its life. No drama. No ambiguity. No philosophical crisis about what the word "reply" means.

Then forwarded messages entered the room.

## The social detail the machine skipped

Humans do this all the time.

Someone receives a message from a customer, forwards it internally, adds a note like "can you log this," and expects the machinery to understand the social arrangement.

The forwarded message is not the real conversation. It is the envelope around the conversation.

The person forwarding it is not the customer. They are the courier.

Humans see this instantly because humans are obsessed with invisible roles. We know the difference between the person asking for help and the person carrying the paper down the hall.

The system, meanwhile, saw a message in front of it and did what obedient systems do.

It replied to the message.

Technically, that was correct.

Socially, it was deranged.

## The moment it went wrong

This is the part I enjoy and fear in equal measure.

The automation had done almost everything right. It found the issue. It created the case. It picked the owner. It produced the confirmation.

Then it sent the cheerful "we've got it" note back to the internal forwarder instead of the original customer.

It is like a receptionist taking a note from a colleague, calling that colleague two minutes later, and proudly announcing that the visitor downstairs has been checked in.

Useful to absolutely nobody.

Worse, this kind of mistake has bad manners.

The system is not crashing. It is not obviously broken. It is being confidently wrong in a way that makes the humans around it look slightly absurd.

Those are the bugs that cause the deepest sighs.

## Why this was harder than it looked

At first glance, the fix seems insultingly obvious.

Do not reply to the forwarder. Reply to the original sender.

Fine. Where exactly is that person, every time?

Sometimes the forwarded message contains the original address clearly. Sometimes it contains half of it. Sometimes it contains just enough context to make a human comfortable and a machine nervous. Sometimes it is basically a scavenger hunt with punctuation.

So the problem was not only finding an email address.

It was deciding when the system knew enough to act without becoming one of those assistants who mistakes confidence for competence.

That was the real threshold.

A mediocre system says, "close enough," and sends the message anyway.

A useful system says, "I need the actual person, not the nearest person."

Very different standards.

## What changed

The final rule was less glamorous and much better behaved.

If the message came directly from the customer, the system could keep using the normal reply path.

If the message was forwarded, the system had to prove it knew who the original customer was before sending anything. Not probably. Not maybe. Prove it.

If the evidence was strong, it would send a fresh confirmation to the real customer and copy the forwarder so the human loop stayed intact.

If the evidence was weak, it would stop.

No clever improvisation. No congratulating the courier. No pretending the map and the territory were the same thing.

That sounds conservative.

It is.

Good.

Because a lot of automation failures are just systems being allowed to act on a sentence fragment and a vibe.

## The lesson hiding in it

This week reminded me that communication workflows are never only about delivery.

They are about relationships.

Who asked.

Who carried the request.

Who needs the answer.

Who only needs visibility.

Humans keep this structure in their heads without noticing. Machines need it spelled out like a will.

A message thread is not the same thing as the conversation it contains.

That distinction matters more the moment software starts speaking on your behalf.

Because once a system can send the message itself, it also inherits the responsibility to understand who the message is for.

Otherwise you have not built automation.

You have built a very fast social misunderstanding.

## The closer

The hard part was not teaching the system to answer.

It was teaching it not to thank the messenger for somebody else's problem.
