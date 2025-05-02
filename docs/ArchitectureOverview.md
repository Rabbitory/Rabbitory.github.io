---
sidebar_label: "Architecture"
sidebar_position: 6
description: "Architecture"
---

import AnimatedSvgEmbed from '@site/src/components/AnimatedSvgEmbed';
import CreatedResources from '@site/src/components/CreatedResources';

# Architecture Overview

Rabbitory follows a modular, self-hosted architecture deployed entirely within the user’s AWS account. The system is composed of four main components:

1. A Custom CLI Tool (NPM package)

2. A Control Panel (EC2 Instance)

3. RabbitMQ Instances (EC2 Instances)

4. A Metadata Store (DynamoDB)

<AnimatedSvgEmbed className="rabbitory-animation" svgName="rabbitory-overall.svg" altText="Architecture Animation" />

Below, we’ll explore each of these architectural components in depth to showcase how Rabbitory is structured and how each part contributes to its overall functionality.

## (1) Custom CLI

The Rabbitory command-line interface (CLI) is a globally installed npm package that serves as the entry point to the entire Rabbitory system. After installation, users can run a single command to deploy or destroy all the AWS infrastructure needed to run the Control Panel and manage RabbitMQ instances. Deployment requires users to be authenticated through the AWS CLI, to provide a preferred deployment region and, optionally, to provide a custom domain for HTTPS. If a custom domain is provided, the CLI also configures DNS and automatically sets up an SSL certificate using Let's Encrypt, enabling secure HTTPS access.
Running `rabbitory deploy` provisions the following core infrastructure:

<CreatedResources />

<AnimatedSvgEmbed className="rabbitory-animation" svgName="cli-deployment.svg" altText="Command Line Deployment" />

When users no longer need the infrastructure, running `rabbitory destroy` cleanly tears down all resources provisioned during deployment, including the DynamoDB table, the Control Panel instance, all managed RabbitMQ broker instances, and supporting AWS resources.

## (2) The Control Panel

The Rabbitory Control Panel communicates directly with all RabbitMQ instances to handle creating new instances, making configuration changes, and performing deletions. Rabbitory is hosted on a t3.small EC2 instance. Hosting the Control Panel on an EC2 allows for custom IAM roles, security groups, and cohesive communication with other RabbitMQ EC2s in the Rabbitory environment.

![Control Panel Diagram](../static/img/control-panel-diagram.svg)

The Control Panel is built entirely with Next.js, which powers both the backend server and the frontend UI, while Tailwind CSS is used for styling. Using Next.js allowed the entire app to run on a single EC2 instance, instead of relying on separate static file hosting services like AWS S3 Bucket. With Next.js, we can serve dynamic content, handle server-side rendering, and manage API requests all from a single EC2 instance. This simplifies deployment and enables the Control Panel to be more integrated and responsive.

## (3) RabbitMQ Instances

Once the Control Panel is deployed, users can create individual RabbitMQ instances, each running on its own dedicated EC2 instance. During creation, users choose the instance type and storage size, allowing them to scale each broker according to its expected workload. Each instance is provisioned with an IAM role for permissions and a dedicated security group to customize its network access. Each instance can also be configured independently, with support for custom plugins, configuration files, and firewall settings tailored to its specific use case.

After deployment, the Control Panel displays the instance’s AMQP connection endpoint under <strong> General > Instance Info</strong>. This endpoint is what users plug into their producer or consumer code when building queue logic.

To illustrate, here's how you might use this connection endpoint in a producer application written in TypeScript:

```javascript
// producer.ts
import amqp from "amqplib";

// RabbitMQ connection URL
const amqpUrl = "amqp://username:password@your-endpoint";
const queue = "my-queue";

async function sendMessage() {
  let connection, channel;
  try {
    connection = await amqp.connect(amqpUrl);
    channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: true });

    const message = "Hello from producer!";
    channel.sendToQueue(queue, Buffer.from(message));
    console.log(`Sent: ${message}`);
  } catch (error) {
    console.error("Error sending message:", error);
  } finally {
    if (channel) await channel.close();
    if (connection) await connection.close();
  }
}

sendMessage();
```

And here's how a corresponding consumer might use the connection URL:

```javascript
// consumer.ts
import amqp from "amqplib";

// RabbitMQ connection URL
const amqpUrl = "amqp://username:password@your-endpoint";
const queue = "my-queue";

async function receiveMessages() {
  try {
    const connection = await amqp.connect(amqpUrl);
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: true });

    console.log(`Waiting for messages in ${queue}...`);
    channel.consume(queue, (msg) => {
      if (msg !== null) {
        console.log(`Received: ${msg.content.toString()}`);
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error("Error receiving messages:", error);
  }
}

receiveMessages();
```

These examples demonstrate how to connect to your RabbitMQ instance using the provided AMQP endpoint, send messages to a queue, and consume them. User replace the value of the variable `ampqURL` with their unique endpoint.

## (4) Metadata Store

Rabbitory uses DynamoDB to track and persist metadata about each RabbitMQ instance. This metadata allows the Control Panel to accurately reflect the state and configuration of each RabbitMQ instance. For every instance created, DynamoDB stores key data such as:

- Instance ID: A unique identifier for the instance
- Instance Name: The user-defined name
- Encrypted username/password: Credentials for accessing the RabbitMQ Management UI
- Alarms: User-defined memory or storage thresholds
- Backups: Snapshots of RabbitMQ configurations including policies, exchanges, users, permissions, and queues

DynamoDB plays a key role in Rabbitory’s architecture by storing core configuration, the RabbitMQ Management UI credentials, instance backups, and alarm data. Since RabbitMQ instances aren’t persistent, an EC2 reboot wipes messages and assigns a new IP address. DynamoDB ensures that configuration data survives through restarts. Users can also create backups at any time, stored as JSON in DynamoDB and downloadable from the Control Panel.

The Control Panel itself runs on a persistent EC2 instance using PM2 to handle restarts. Because of this, it can always reconnedct to DynamoDB and serve accurate instance data after a reboot.
