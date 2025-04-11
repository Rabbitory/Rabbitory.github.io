---
sidebar_label: "Technical Decisions & Tradeoffs"
description: "Technical Decisions & Tradeoffs"
sidebar_position: 4
---

# Technical Decisions & Tradeoffs

- AWS SDK vs Cloudformation ⇒ Future
- AWS EC2 vs Docker
- Giving users more options - less lock in
- What Config Features we offer
  - we chose the most important
- Security Model:
  - What we do and don’t do
  - https
  - no login
  - firewall control for rabbitmq instance
  - no easy firewall control for control panel
- UI/UX for Control Panel
  - user centric design
  - using next
    - having one server for front and backend
    - we didnt have to use s3
    - simplified development and deployment
- SSM vs Custom API:
  - Interactions with Rabbitmq server
