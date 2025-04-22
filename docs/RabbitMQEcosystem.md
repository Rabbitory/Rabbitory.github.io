---
sidebar_label: "The RabbitMQ Ecosystem"
sidebar_position: 2
---

import ManagedBrokerFeatures from '@site/src/components/ManagedBrokerFeatures';

# The RabbitMQ Ecosystem

Developers wanting to leverage a message queue in their software architecture have multiple options. One popular option is <a href="https://www.rabbitmq.com/" target="_blank">RabbitMQ</a>, an open-source message-queuing software that acts as an intelligent middleman for routing messages. RabbitMQ is a compelling choice for teams that need support for multiple protocols, advanced messaging features, or fine-grained control over their messaging environment.

## RabbitMQ – “One broker to queue them all”

Most accurately, RabbitMQ is considered a message broker. This means it can act as a traditional message queue, but it can also support other message routing patterns, including the publish-subscribe model, routing based on topics, and fan-out delivery.

Just as a post office routes letters to mailboxes, RabbitMQ uses <a href="https://www.rabbitmq.com/docs/exchanges" target="_blank">exchanges</a> to route messages to the appropriate queues for consumption. Managing the logic and transport of messages, RabbitMQ uses message queues to reliably route messages between producers and consumers. While RabbitMQ is feature-rich, it is also a lightweight option that can be self-hosted via containers or virtual machines.

[ Post Office / RabbitMQ Diagram ? ]

For these reasons, RabbitMQ is beloved by the developer community. It’s used by companies ranging from small startups to large enterprises like Reddit, Shopify, and Mozilla to power their asynchronous workflows.

## Challenges with Managing RabbitMQ

Although RabbitMQ is a powerful choice for a message queue, running it in a production environment can be complex. RabbiMQ places much of the operational burden on the developer. This includes provisioning, configuring, securing, networking, persisting, scaling, and monitoring RabbitMQ servers. Managing these operational tasks can quickly become tedious when a message queue is just one of many parts of your software ecosystem.

For teams wanting to abstract away this management overhead, a do-it-yourself solution is to build internal tooling and infrastructure to handle RabbitMQ deployment and upkeep themselves. This can involve writing custom scripts for provisioning, setting up dashboards for monitoring, and maintaining backup and recovery systems. While this do-it-yourself approach offers flexibility and full control, it can be costly in engineering hours and can increase the risk of misconfiguration or downtime, especially as systems scale.

## RabbitMQ-as-a-Service

In response to the challenges of managing RabbitMQ instances in production, services began emerging to simplify the experience. These services are known as <strong>managed message brokers</strong>. Managed message broker services allow developers to treat RabbitMQ instances more like a Software-as-a-Service. Effectively, these platforms deliver RabbitMQ-as-a-Service. Managed message broker platforms are popular because they abstract away operational overhead, allowing developers to focus on using the RabbitMQ broker in their applications.

The two most notable solutions in this space are <a href="https://www.cloudamqp.com/" target="_blank">CloudAMQP</a> and <a href="https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome.html" target="_blank">AmazonMQ</a>. Other popular managed message brokers for RabbitMQ include A2 Hosting, Stackhero, Elestio, ScaleGrid, and Northflank. Managed message broker solutions frequently include the following helpful features:

<ManagedBrokerFeatures />

## Limitations of Existing Solutions

While these platforms solve common RabbitMQ challenges, they come with drawbacks. The most glaring issue with using these existing services is their opaque and high pricing.

For example, CloudAMQP’s pricing scales based on several factors: instance size, number of connections, messages per second, and included features. Similarly, AmazonMQ offers less price transparency than other AWS resources, making cost forecasting more difficult. AmazonMQ charges per broker instance-hour, per gigabyte of storage, and per data transfer, meaning costs can spike alongside usage. With both of these dominant managed message broker services, teams often pay for much more than they use.

Another drawback for developers is the limited transparency and control of their message queue infrastructure. These platforms create a black-box wrapper around RabbitMQ instances, limiting granular debugging and configuration when needed. This black-box approach comes with its own price tag, as platforms often charge for customer support to debug issues that developers can’t access or fully observe.
