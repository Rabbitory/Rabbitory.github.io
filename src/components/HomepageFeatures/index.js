import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";

const FeatureList = [
  {
    title: "Automated Deployment via the Rabbitory CLI",
    image: "/img/cli-graphic.svg",
  },
  {
    title: "First-class support for RabbitMQ",
    image: "/img/rabbitmq-graphic.svg",
  },
  {
    title: "Powered by Amazon EC2.\nSimple, Powerful, Fast",
    image: "/img/EC2.svg",
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
      </div>
    </section>
  );
}
