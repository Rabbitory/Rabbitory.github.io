---
sidebar_label: "Introduction"
sidebar_position: 1
---

# Introduction

Rabbitory is an open-source, self-hosted message queue management tool built specifically for RabbitMQ, one of the most widely used message brokers in modern software systems. Rabbitory simplifies the deployment and configuration of RabbitMQ instances on AWS while maintaining visibility into cost and infrastructure setup. To understand why a tool like Rabbitory matters, let’s first explore what message queues are, how RabbitMQ fits into that domain, and why these tools are so valuable in modern distributed systems.

## Message Queues

In many applications, communication between internal services relies on the request-response cycle. This cycle is a form of synchronous communication. In this communication pattern, one service sends a request to another and waits until the other service responds. This pattern is extremely useful in many scenarios as it provides immediate success or failure feedback along with clear flow control.

Yet, there are scenarios where synchronous communication can fall short. Imagine you are using an e-commerce site. As a customer placing an order, you likely want an immediate order confirmation rather than waiting for background tasks like payment processing and inventory updates to complete. With a synchronous request-response cycle, you would be left waiting for these background tasks to process and succeed before getting that order confirmation. In system design, relying on another service’s response and success is called tight coupling.

Instead of using the synchronous request-response cycle, in this scenario, we can leverage a pattern of asynchronous communication. With an asynchronous pattern, you, as the customer, receive a quick confirmation while the rest of the work can happen quietly in the background. A widely used tool for implementing asynchronous communication is a message queue.

**[ Message Queue Diagram Here]**

A message queue is like a mailbox, where senders can place letters in the mailbox without waiting for recipients to receive the mail. In our example, our e-commerce site wants to send a letter to a third-party payment processor. Our e-commerce site places this “letter”, a request to process a payment, into a message queue for safekeeping. When the payment processor is available, it checks the “mailbox” for any pending payment requests. In this way, the sender (our e-commerce site) no longer needs to wait or worry about when or whether the message is received. The sender of a message is often called the producer, and the receiver is called the consumer. In essence, a message queue allows software systems to decouple the actions of the producer from those of the consumer. This results in a snappier user experience and more fault-tolerant systems.

## RabbitMQ

Developers wanting to leverage a message queue in their software architecture have multiple options. One popular option is RabbitMQ, an open-source message-queuing software that acts as an intelligent middleman for routing messages. RabbitMQ is a compelling choice for teams that need support for multiple protocols, advanced messaging features, or fine-grained control over their messaging environment.
Most accurately, RabbitMQ is considered a message broker. This means it can act as a traditional message queue, but it can also support other message routing patterns, including the publish-subscribe model, routing based on topics, and fan-out delivery.

Just as a post office routes letters to mailboxes, RabbitMQ routes messages to exchanges, which then direct those messages to the appropriate queues for consumption. Managing the logic and transport of messages, RabbitMQ uses message queues to reliably route messages between producers and consumers. While RabbitMQ is feature-rich, it is also a lightweight option that can be self-hosted via containers or virtual machines.

Although RabbitMQ is a powerful choice for a message queue, running it in a production environment can be complex. RabbiMQ places much of the operational burden on the developer. This includes provisioning, configuring, securing, networking, persisting, scaling, and monitoring RabbitMQ servers. When a message queue is just one of many parts of your software ecosystem, the effort of managing these operational tasks can quickly become tedious and inefficient.

## Moving Towards a Managed Message Broker – RabbitMQ as a Service

In response to the challenges of managing RabbitMQ instances in production, services began emerging to simplify the experience. These services are known as managed message brokers. Managed message broker services allow developers to treat RabbitMQ instances more like a Software-as-a-Service. In this way, we can even say they offer RabbitMQ-as-a-Service. Managed message broker services are popular because they abstract away operational overhead, allowing developers to focus on using the RabbitMQ broker in their applications.

They frequently include the following helpful features:

- Cloud-hosted RabbitMQ instances
- One-click provisioning
- Automated default configurations
- Managed Firewalls
- Server backups
- Automatic upgrading
- Geographic deployment
- Autoscaling
- Monitoring + Dashboard

The two most notable competitors in this space are CloudAMQP and AmazonMQ. Other popular managed message brokers for RabbitMQ include A2 Hosting, Stackhero, Elestio, ScaleGrid, and Northflank.

While these platforms solve common RabbitMQ challenges, they come with drawbacks. The most glaring issue with using these existing services is their opaque and high pricing.

For example, CloudAMQP’s pricing scales based on several factors: instance size, number of connections, messages per second, and included features. Similarly, AmazonMQ offers less price transparency than other AWS resources, making cost forecasting more difficult. AmazonMQ charges per broker instance-hour, per gigabyte of storage, and per data transfer, meaning costs can spike alongside usage. With both of these dominant managed message broker services, teams often pay for much more than they use.

Another drawback for developers is the limited transparency and control of their message queue infrastructure. These platforms create a black-box wrapper around RabbitMQ instances, limiting granular debugging and configuration when needed. This black-box approach comes with its own price tag, as platforms often charge for customer support to debug issues that developers can’t access or fully observe.
