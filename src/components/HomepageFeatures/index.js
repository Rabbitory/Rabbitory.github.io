import Heading from "@theme/Heading";

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
    title: "Powered by Amazon EC2",
    Svg: require("@site/static/img/EC2.svg").default,
    description: <>Something here</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className="feature-item">
      <div className="text--center">
        <Svg className="feature-svg" role="img" />
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
    <section className="features-section">
      <div className="container">
        <div className="features-row">
          <Feature {...FeatureList[0]} />
          <Feature {...FeatureList[1]} />
        </div>
        <div className="features-row center-single">
          <Feature {...FeatureList[2]} />
        </div>
      </div>
    </section>
  );
}
