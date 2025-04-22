---
sidebar_label: "Meet Rabbitory"
sidebar_position: 2
---

# Meet Rabbitory

Concerns around cost inflation and limited transparency are common in the managed message broker space. This is where Rabbitory steps in.

Rabbitory is a self-hosted RabbitMQ-as-a-Service platform that offers the streamlined experience of a managed message broker without the cost or complexity of existing services. Rabbitory is built for developers on small to mid-sized teams who want the convenience of a managed RabbitMQ without giving up cost control or infrastructure ownership.

![Competition Comparison](../static/img/comparison.svg)

## RabbitMQ-as-a-Service

Like other managed message broker services, Rabbitory’s core feature is letting users easily create and manage their RabbitMQ instances. Users do this through a web-based Control Panel hosted on its own EC2 instance. The Rabbitory Control Panel lets developers quickly create preset instances of RabbitMQ, complete with the most important plugins and features. Once created, developers can view instance information, access the RabbitMQ Management UI, configure settings, and monitor with logs and alarms.

## Transparent Pricing & Infrastructure Ownership

The Rabbitory Control Panel is a self-hosted platform for provisioning and managing RabbitMQ instances. Self-hosting allows Rabbitory users to have two features that existing solutions can’t offer: transparent pricing and infrastructure ownership.

Many managed service providers obscure the details of the hardware they offer. Instead of showing what kind of machine you're getting, they charge based on abstract performance tiers, like handling a fixed number of requests per second. This approach also obscures pricing, since the flat rate often exceeds the actual cost of the underlying hardware. In contrast, Rabbitory’s cost is always transparent, as it reflects AWS’s EC2 and DynamoDB pricing models. Additionally, when creating a RabbitMQ instance, users choose exactly what EC2 instance type and storage size fit their use case. We provide helpful hardware recommendations based on throughput and expected message size, but users remain in control of their hardware.

Another major benefit of self-hosting Rabbitory is that users own their infrastructure and data. With CloudAMQP, you don’t own the infrastructure you use. Instead, you pay CloudAMQP a flat rate to manage RabbitMQ for you on infrastructure that they provision and control. You can pick a region and hardware plan, but you don’t have root access to the server, full environment control, or ownership of the underlying cloud resources. Similarly, with AmazonMQ —a larger competitor — you can choose regions, instance types, and virtual private networks, but you do not get direct access to the EC2 instances. Rather, it’s as if you are renting a RabbitMQ EC2 instance within a sandbox that AWS controls.

Rabbitory, by contrast, allows developers to run RabbitMQ on EC2 instances they own, provisioned within their AWS account. With this ownership, they retain full access to the instance. Infrastructure ownership matters because it allows for transparent pricing, customizability, and the ability to integrate directly with your existing AWS environment.

Transparent pricing and infrastructure ownership are unique in RabbitMQ management. Rabbitory users know what hardware they are running, where their instances are running, and can accurately predict platform costs.

## Custom Command-Line Interface

To simplify self-hosting, Rabbitory offers a custom CLI tool to deploy the base infrastructure of the managed RabbitMQ platform. The Rabbitory CLI is an npm package that interacts with the configurations preset in each user’s AWS CLI environment. Further, it automates the provisioning of all necessary AWS resources, including IAM roles, security groups, and policy permissions, so that the Rabbitory infrastructure works seamlessly after deployment.
