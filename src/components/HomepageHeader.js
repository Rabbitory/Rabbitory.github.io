import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="header-section">
      <div className="header-content">
        <Heading as="h1" className="header-title">
          {siteConfig.title}
        </Heading>
        <p className="header-subtitle">{siteConfig.tagline}</p>
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
