---
sidebar_label: "Technical Decisions"
description: "Technical Decisions"
sidebar_position: 4
---

# Technical Decisions

## AWS Integration and Resources

- AWS EC2 vs Docker
- AWS SDK vs Cloudformation ⇒ Future
- Using SSM vs Custom API for interactions with Rabbitmq server

## Control Panel Features (3 paragraphs)

- Giving users more options - less lock in
- What Config Features we offer
  - we chose the most important
- UI/UX for Control Panel
  - user centric design
  - using next
    - having one server for front and backend
    - we didnt have to use s3
    - simplified development and deployment

## Security Model

- Offering semi-automated https for control panel website
- Firewall for Rabbitmq instances: Ease of configuration, automated rabbitmq port opening
- No login for Control Panel Website
- No automated firewall customization for control panel
