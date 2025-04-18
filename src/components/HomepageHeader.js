import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "../pages/index.module.css";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title text--center">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
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
