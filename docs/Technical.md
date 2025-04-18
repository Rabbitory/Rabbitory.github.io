---
sidebar_label: "Technical Decisions & Challenges"
sidebar_position: 5
---

# Technical Decisions & Challenges

Automating the AWS Cloud infrastructure and designing the Control Panel for Rabbitory came with its own set of unique considerations and challenges. Below is a summary of the most salient decisions we made as a team and what challenges we encountered in building this tool.

## AWS EC2 vs ECS

The first technical decision our team needed to make was on whether to host RabbitMQ servers in containers managed by ECS (Elastic Container Service) or on EC2 (Elastic Compute Cloud) instances. Choosing the ECS option would make deployments faster and scaling easier by abstracting infrastructure and managing containers for you. However, it would introduce complexity for stateful apps like RabbitMQ, and give developers less direct access to things like storage, networking, and system-level configurations. On the other hand, the EC2 option provides users full control over their servers, making it ideal for managing RabbitMQ’s configuration, plugins, and storage directly. The tradeoff of using EC2 is more manual setup and maintenance, with slower provisioning and scaling as compared to containers.

Rabbitory prioritizes transparency, infrastructure ownership, and simplicity in a single-instance, self-hosted context. EC2 offers the right balance of control and familiarity for users who want to own their setup without diving deep into the complexities of container orchestration. If Rabbitory expands to support RabbitMQ clustering, ECS might become a more compelling option. But for now, the EC2 option best matches Rabbitory’s philosophy and needs.

## AWS SDK vs. CDK

When deploying and interacting with AWS cloud resources, developers have the following options:

- AWS Command-Line Interface
- AWS SDK - Software Development Kits
- AWS CloudFormation
- AWS CDK- Cloud Development Kit
- Terraform

[ Chart here if possible]

All of these options can call the AWS API to deploy resources, while the CLI and SDK can be used for AWS resource interactions. Because we wanted to automate AWS provisioning, our team considered the following two paths:

(1) AWS Typescript SDK for both deployment and resource interactions
(2) AWS Typescript CDK for deployment + SDK for resource interactions

Our team ended up choosing the first option, exclusively using the AWS SDK in our project, for infrastructure flexibility and quicker development. This approach removed the overhead of CloudFormation stacks and CDK bootstrapping, allowing Rabbitory to be both lightweight and customizable. The tradeoffs are that Rabbitory takes on more responsibility for infrastructure modeling, permission management, and avoiding configuration drift.

## RabbitMQ Server Interactions

RabbitMQ comes with a large set of utility features that allow users to customize their queues. Allowing users to access and enable these specialized features from a centralized place, like our Control Panel, is essential. To enable these features, users often need to interact with the RabbitMQ server directly. Since the Rabbitory Control Panel runs on a separate EC2 instance than the RabbitMQ EC2 instances, we needed a method for remotely controlling and configuring the RabbitMQ EC2.

One straightforward solution would be to create a custom API on each RabbitMQ instance that would accept requests and execute corresponding actions. However, running a persistent API on each RabbitMQ instance would force the instance to share system resources with other processes. According to RabbitMQ documentation, this is considered poor practice. We quickly recognized the need for an alternative approach that would avoid additional server load on the broker instance.

Another possible solution was to download RabbitMQ’s CLI tools onto the Control Panel EC2 instance to communicate with the RabbitMQ instances. This would allow the Control Panel to perform remote operations on each RabbitMQ instance without compromising the RabbitMQ instances’ system performance. However, this solution would shift the system resource burden onto the Control Panel EC2 and introduce additional dependencies. This method also creates redundancy, as the CLI tools already exist on each RabbitMQ broker instance.

Instead, we wanted a solution that enables remote access to these tools without duplicating infrastructure. AWS SSM Session Manager addressed this need by allowing users to initiate secure, remote shell sessions directly to EC2 instances. Using IAM permissions, users can safely run bash commands on remote instances without the need for persistent APIs or additional dependencies, preserving both performance and system simplicity. In Rabbitory, we utilize AWS SSM to change RabbitMQ configurations, enable plugins, and open protocol ports for individual RabbitMQ instances.

## Control Panel Decisions & Challenges

The first challenge the team ran into was determining the smallest viable EC2 instance type for hosting the Control Panel. Our initial choice for our instance type was the t2.micro. It seemed ideal from a cost perspective, but in practice, it failed to reliably serve the application. The combination of building the Next.js app and running it with PM2 consistently overworked the instance’s limited resources and caused the server to crash silently. This made the EC2 endpoint to our Control Panel unreachable. After testing alternatives, we found that upgrading the Control Panel EC2 instance to a t3.small provided enough CPU and memory to build and serve the application reliably, while still being cost-effective for a self-hosted setup.

When building the notification UI for our Control Panel, the application needed a way to deliver real-time alerts to the frontend without requiring a page refresh. While websockets are a common choice for this kind of communication, they require a persistent server to keep the connection open. Since Next.js uses a serverless architecture, this approach wasn't a good fit. Instead, we implemented the system using server-sent events, which work well in a serverless environment and allow for efficient one-way communication from the server to the client.

Another challenge we encountered was accurately representing the status of RabbitMQ instances on the Control Panel homepage. AWS natively provides useful EC2 instance states like “pending,” “running,” “stopped,” and “shutting-down”. However, we found that the EC2 “running” status didn’t reliably reflect the readiness of the RabbitMQ server itself. Rather, the EC2 instance would report as “running” even though the RabbitMQ service was still initializing and not yet ready for configuration. To address this, we implemented our own server status check that continuously polls the EC2 instance after creation to verify that the RabbitMQ server is fully initialized and that the relevant configuration data has been successfully written to DynamoDB. Only after both checks pass do we mark the instance as “running” on the Control Panel homepage. Until then, we display a “pending” state and prevent users from accessing the instance details page to avoid confusion or premature interactions.

When creating the Alarms Page, we wanted to allow users to integrate memory and storage alarms with their team’s workplace Slack environment. However, we ran into a significant hurdle when trying to integrate Rabbitory with Slack Notifications. Because Rabbitory is self-hosted, we couldn’t rely on a single centralized Slack bot to send alerts, as any bot tied to our infrastructure wouldn’t persist across user deployments. Our solution was to shift the responsibility of creating a Slack bot to the user. After deploying their infrastructure and accessing the Control Panel, users who want to create an alarm for their RabbitMQ instance are guided to set up their own Slack bot and provide its credentials. Although this adds manual setup work for our users, this approach aligns with Rabbitory’s self-hosted model and allows users the convenience of receiving a Slack notification when memory and storage issues arise.

Currently, alarms are tied to the lifecycle of the Control Panel, as they are managed using node-cron on the Control Panel’s EC2 instance. To support persistence beyond the Control Panel’s uptime, future work for Rabbitory could include integrating with Amazon EventBridge for more robust and decoupled alarm management.

## Providing an HTTPS Option

Our team later decided to give users the option to configure their Control Panel with either HTTP or HTTPS when deploying infrastructure using the Rabbitory CLI. HTTPS, the secure version of HTTP, encrypts communication between the browser and server to protect data and improve web security. Many self-hosted SaaS tools default to HTTP, placing the responsibility of enabling HTTPS on the user. While this simplifies initial deployment, it requires users to manually secure their application later.

For example, Grafana, a real-time monitoring and visualization tool, ships with HTTP out of the box and provides documentation that guides users on configuring HTTPS. Enabling HTTPS typically involves setting up DNS records, obtaining and installing security certificates, and configuring a reverse proxy with tools such as NGINX. Each of these steps depends on the successful execution of the preceding one, making the process both challenging and time-consuming. Moreover, DNS propagation may be inconsistent, as various domain servers resolve names at different speeds based on their hierarchical positions.

Our team recognized the need to automate this process to reduce engineering overhead during deployment. Rabbitory simplifies HTTPS setup by automating it during deployment. If users choose HTTPS for their Control Panel, the CLI prompts them to provide a domain they've already purchased. Rabbitory uses AWS Route53 to handle DNS. Whether the domain is registered with Route53 or another domain provider, the CLI handles the necessary updates. The CLI automatically creates a hosted zone with two A-records pointing to the Control Panel’s IP address, issues certificates via Certbot, and configures NGINX as a reverse proxy. By automating this setup, Rabbitory provides a secure, production-ready environment with minimal manual effort.
