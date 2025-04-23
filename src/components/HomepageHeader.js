import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="header-section">
      <div className="header-content">
        <Heading as="h1" className="header-title">
          Managing RabbitMQ, Made Easy.
        </Heading>
        <p className="header-subtitle">
          The self-hosted RabbitMQ-as-a-Service solution for your message queue
          needs.
        </p>
        <div className="header-button-wrapper">
          <Link
            className="button button--secondary button--lg"
            to="/docs/Background"
          >
            Case Study
          </Link>
        </div>
      </div>
    </header>
  );
}

/*
Manage Your RabbitMQ. Simple, Powerful, Self-Hosted

"Self-Hosted RabbitMQ, Simplified.
Managing RabbitMQ, Made Easy.
RabbitMQ-as-a-Service, Fully Managed.
Managed Message Queue. Managed 



A self-hosted platform for easy deployment and management of RabbitMQ, with seamless integration into your AWS environment."
Easily deploy, manage, and scale your RabbitMQ instances on AWS, with full control over your infrastructure."

The self-hosted RabbitMQ-as-a-Service solution for your message queue needs. 
Own your infrastructure. Own your queue.
*/
