import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import { FaLinkedin, FaGithub, FaGlobe, FaEnvelope } from "react-icons/fa";

const TeamList = [
  {
    title: "Jaqueline",
    image: "/img/cli-graphic.svg",
    description: (
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          fontSize: "1.5rem",
        }}
      >
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:you@example.com">
          <FaEnvelope />
        </a>
      </div>
    ),
  },
  {
    title: "Mason",
    image: "/img/rabbitmq-graphic.svg",
    description: (
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          fontSize: "1.5rem",
        }}
      >
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:you@example.com">
          <FaEnvelope />
        </a>
      </div>
    ),
  },
  {
    title: "Laren",
    image: "/img/EC2.svg",
    description: (
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          fontSize: "1.5rem",
        }}
      >
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:you@example.com">
          <FaEnvelope />
        </a>
      </div>
    ),
  },
  {
    title: "Zijin",
    image: "/img/EC2.svg",
    description: (
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          fontSize: "1.5rem",
        }}
      >
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://yourwebsite.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="mailto:you@example.com">
          <FaEnvelope />
        </a>
      </div>
    ),
  },
];

function Member({ image, title, description }) {
  return (
    <div className="team-item">
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
const Team = () => {
  return (
    <Layout>
      <div className="features-section">
        <div className="container">
          <div className="text--center padding-horiz--md">
            <Heading as="h1">Meet the Team</Heading>
            <p>We are a group of passionate developers and engineers.</p>
          </div>
          <div className="features-row">
            {TeamList.map((props, idx) => (
              <Member key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
