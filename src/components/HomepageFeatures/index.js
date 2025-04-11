import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Rabbitory is a simple and easy-to-use self hosted RabbitMQ management
        tool. It is designed to be user-friendly and intuitive, making it easy
        for anyone to deploy and manage their RabbitMQ servers on AWS.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Features a easy to use dashboard that allows you to monitor and manage
        your RabbitMQ servers with ease.
      </>
    ),
  },
  {
    title: "Automated Deployment",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Rabbitory comes with a CLI tool that allows you to deploy RabbitMQ
        servers on AWS with just a few simple commands. This makes it easy to
        get started and deploy your RabbitMQ servers quickly and efficiently. It
        also automate setting up https, simply provide a domain, we handle the
        rest.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
