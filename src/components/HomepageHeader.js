import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function HomepageHeader() {
  return (
    <header className="header-section">
      {/* <video className="header-video" autoPlay muted loop playsInline>
        <source
          src={useBaseUrl("/video/envelope-animation.webm")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}
      <div className="header-content">
        <Heading as="h1" className="header-title">
          Managing RabbitMQ, Made Easy.
        </Heading>
        <p className="header-subtitle">
          The self-hosted, RabbitMQ-as-a-Service solution for all your message
          queue needs
        </p>
        <div className="header-button-wrapper">
          <Link
            className="button button--secondary button--lg"
            to="/docs/Introduction"
          >
            Case Study
          </Link>
        </div>
      </div>
    </header>
  );
}
