---
sidebar_label: "The Control Panel"
sidebar_position: 3
---

import AnimatedSvgEmbed from '@site/src/components/AnimatedSvgEmbed';

# The Control Panel

The Rabbitory Control Panel enables Rabbitory to function as a RabbitMQ-as-a-Service solution. It provides a centralized interface for provisioning, configuring, and managing RabbitMQ instances, as well as the underlying EC2 infrastructure of each instance. Designed for flexibility and ease of use, the Control Panel streamlines complex server management tasks into a smooth and accessible user experience. Here are the key features:

## One-Click Provisioning

The Control Panel lets users provision new RabbitMQ instances with just a click. Once the user inputs the necessary details, the system automatically generates an EC2 instance running RabbitMQ, complete with all required dependencies. This dynamic provisioning process leverages the AWS SDK, which retrieves a region-specific Ubuntu AMI, assigns a dedicated IAM role with the appropriate permissions, and configures security groups to control network access.

The instance is created using a custom, base64-encoded user data script that automates the installation and configuration of the latest version of RabbitMQ. It also enables essential plugins, sets up the configuration file, and creates a management user. Additional AWS features, such as tagging for resource identification and EBS volume configuration for storage, are incorporated to ensure efficient management of resources.

While provisioning runs in the background, users are not locked on the instance creation page. They are free to explore other instances within the Control Panel. A polling function continuously checks the instance’s status and sends a notification once the RabbitMQ server is fully up and ready to use. By leveraging asynchronous actions, Rabbitory abstracts the complexity of server setup and provides a seamless, robust deployment experience.

## Notification System for All Changes

Rabbitory incorporates a notification system that alerts users to all significant RabbitMQ instance events. This includes updates on provisioning status, configuration changes, and other system events. As changes are made to RabbitMQ configurations, plugins, or backups, the system continuously communicates with the frontend to provide real-time feedback to users, ensuring they are always up-to-date on the status of their infrastructure.

## RabbitMQ Configuration, Plugins, and Backups

Rabbitory supports full control over RabbitMQ configurations, plugins, and backups directly from the Control Panel. Rather than needing to SSH into your instance and manage settings manually via CLI tools, Rabbitory provides a user-friendly interface that translates common configuration actions into shell commands, executed remotely via AWS SSM Session Manager. This includes enabling or disabling plugins, editing configuration files, and restarting the broker when needed.

Plugins and configuration settings affect the behavior and functionality of the broker, ensuring production-level requirements are met. The Control Panel supports a wide range of configuration options and plugin toggles to reflect the flexibility that RabbitMQ users expect. Some teams may require features like Federation or Shovel, while others might rely on Prometheus metrics or the Consistent Hash Exchange. We don’t try to guess which of these users need — instead, we offer full access so the broker behaves exactly how users prefer.

In addition to configuration and plugin management, Rabbitory also supports instance-level backups. Backups in Rabbitory are snapshots of RabbitMQ "definitions," which include crucial configuration details like exchanges, queues, bindings, and permissions. These definitions ensure that even if an instance is restarted or re-created, it can be restored to its original state without manual intervention. Rabbitory backups are exported as JSON files and provide a reliable record of the instance’s configuration for easy restoration when needed. This ensures that environments can be restored or migrated easily.

## Hardware Choice and Updates

Rabbitory allows users to configure the hardware of the RabbitMQ instances, including the EC2 instance type and disk space allocation. This flexibility tailors RabbitMQ to meet the specific performance and reliability needs of the queue’s traffic demands. We’ve balanced this flexibility with common defaults, helpful recommendations, concise descriptions, and links to external documentation where appropriate. This approach supports a wide range of workflows and accommodates users with advanced configuration needs.

## Firewall Settings

To protect RabbitMQ instances from unwanted network access, each one is secured behind a dedicated firewall. In AWS, this is implemented using security groups, which act as virtual firewalls. Rabbitory creates a unique security group for each RabbitMQ instance with a name that corresponds to the instance’s name. This provides users with precise control over the inbound and outbound traffic of each RabbitMQ broker instance. Additionally, RabbitMQ uses ports to manage a variety of features, including its Management UI and the different message queue protocols it offers. RabbitMQ offers the following message queuing protocols: AMQP, MQTT, STOMP, and STREAM. By default, RabbitMQ uses plugins to enable these protocols. Since these protocols require dedicated ports, it’s crucial to not only enable the corresponding protocol plugins but also to open up the corresponding ports on the instance’s security group. Rabbitory’s Firewall page, available for each instance, allows developers to configure both AWS security group rules and RabbitMQ ports in one place.

<AnimatedSvgEmbed svgName="firewall.svg" altText="Firewall Demonstration" />

## Monitoring with Alarms and Logs

Rabbitory integrates monitoring features that help users track the health and performance of RabbitMQ instances. From the Control Panel, users can view logs, configure alarms, and receive alerts based on specific thresholds or failure conditions. This visibility ensures that any potential issue, such as memory pressure, queue build-up, or connection timeouts, can be identified and addressed promptly.

A dedicated Logs page displays logs from the EC2 instance running RabbitMQ. These logs are fetched using AWS SSM and are useful for debugging broker-level issues without requiring manual SSH access. The page is designed for readability, with timestamps, scrollable output, and a copy button for easier troubleshooting. In addition to log monitoring, users can configure alarm conditions and receive real-time notifications. Alerts are delivered through a Slack bot that users set up during onboarding, making it easy to route important messages to the appropriate team channels and integrate Rabbitory into existing incident workflows.
