---
sidebar_label: "Background"
sidebar_position: 1
---

import AnimatedSvgEmbed from '@site/src/components/AnimatedSvgEmbed';

# Background

Rabbitory is an open-source, self-hosted message queue management tool built specifically for RabbitMQ, one of the most widely used message brokers in modern software systems. Rabbitory simplifies the deployment and configuration of RabbitMQ instances on AWS while maintaining visibility into cost and infrastructure setup.

To understand why a tool like Rabbitory matters, let’s first explore what message queues are, how RabbitMQ fits into that domain, and why these tools are so valuable in modern distributed systems.

## Synchronous vs. Asynchronous Communication

In many applications, communication between internal services relies on the request-response cycle. This cycle is a form of <strong>synchronous communication</strong>. In this communication pattern, one service sends a request to another and waits until the other service responds. This pattern is instrumental in many scenarios as it provides immediate feedback on the success or failure of a response.

Yet, there are scenarios where synchronous communication can fall short. Imagine you're signing up for a new service online. As part of the sign-up process, the system sends you a welcome email to confirm your account and introduce you to the platform. After creating your account, you ideally expect to see a confirmation message on the page right away. But with a synchronous request-response cycle, your sign-up confirmation could be delayed until that email is composed and successfully handed off or delivered. In system design, this kind of direct dependency, where one service waits on another to succeed, is known as <strong>tight coupling</strong>, and it can lead to delays and unexpected failures if something goes wrong.

[ Diagram of request-response issue for email ex ]

Instead of using the synchronous request-response cycle, in this scenario, we can leverage a pattern of <strong>asynchronous communication</strong>. With an asynchronous pattern, you, as the customer, receive a quick confirmation that your account sign-up has been processed while the rest of the work of sending the email can happen quietly in the background. In this pattern, the sign-up confirmation becomes decoupled from the email task. This pattern is specifically used to make the response quicker.

## Message Queues

A widely used tool for implementing an asynchronous communication pattern is a <strong>message queue</strong>. A message queue is like a mailbox. Services that want to send messages to other services can place their messages inside a message queue, just like you would place mail inside a mailbox. This allows the sending service to complete its task, not needing to wait or worry about when or whether the message is received. And likewise, the receiving service doesn’t need to wait for the sender either. Receiving services can periodically check the mailbox to see if there are any messages inside to be processed.

<AnimatedSvgEmbed className="rabbitory-animation" svgName="message-queue.svg" altText="Message Queue Demonstration" />

In our email example, the sign-up system would simply drop a message into a connected message queue to request that a welcome email be sent. Then, a separate email service would pick up the request later to handle the actual delivery of the email without slowing down the sign-up process. Notably, this allows the user signing up on our platform to receive a much quicker sign-up confirmation, not stuck waiting for an email to be processed and sent.

[ Diagram of message queue solution for email ex ]

The service that sends a message is often called a <strong>producer</strong>, and the service that receives the message is called a <strong>consumer</strong>. In essence, a message queue allows software systems to decouple the actions of the producer from those of the consumer. This results in a snappier user experience. Additionally, if either the producer or consumer application goes down temporarily, any messages sent in the meantime are safely stored in the queue until they can be processed. This is one of the key ways message queues help make systems more resilient and fault-tolerant.
