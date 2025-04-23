import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";
const FeatureList = [
  {
    title: "Automated Deployment",
    image: "/img/cli-graphic.svg",
    description: <>via the Rabbitroy CLI</>,
  },
  {
    title: "RabbitMQ-as-a-Service",
    image: "/img/rabbitmq-graphic.svg",
    description: (
      <>
        First-class support for RabbitMQ, one of the most widely used message
        brokers.
      </>
    ),
  },
  {
    title: "Powered by Amazon EC2",
    image: "/img/EC2.svg",
    description: <>Something here</>,
  },
];

function Feature({ image, title, description }) {
  return (
    <div className="feature-item">
      <div className="text--center">
        <img className="feature-svg" src={useBaseUrl(image)} alt={title} />
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
          <Feature {...FeatureList[2]} />
        </div>
        {/* <div className="features-row center-single">
          
        </div> */}
      </div>
    </section>
  );
}
