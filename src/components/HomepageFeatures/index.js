import clsx from "clsx";
import Heading from "@theme/Heading";
// import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Automated Deployment",
    Svg: require("@site/static/img/cli-graphic.svg").default,
    description: <>via the Rabbitroy CLI</>,
  },
  {
    title: "RabbitMQ-as-a-Service",
    Svg: require("@site/static/img/rabbitmq-graphic.svg").default,
    description: (
      <>
        First-class support for RabbitMQ, one of the most widely used message
        brokers.
      </>
    ),
  },
  {
    title: "Powered by Amazon EC2}",
    Svg: require("@site/static/img/EC2.svg").default,
    description: <>Something here</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className="">
      <div className="text--center">
        <Svg className="" role="img" />
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
    <section className="">
      <div className="container">
        <div className="">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
