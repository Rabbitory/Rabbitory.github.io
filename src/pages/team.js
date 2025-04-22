import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import { FaLinkedin, FaGithub, FaGlobe, FaEnvelope } from "react-icons/fa";

function Member({ image, title, description }) {
  return (
    <div className="team-item">
      <div className="text--center">
        <img className="feature-svg" src={useBaseUrl(image)} alt={title} />
      </div>
      <div className="text--center padding-horiz--sm">
        <Heading as="h3">{title}</Heading>
        {description}
      </div>
    </div>
  );
}
const Team = () => {
  const TeamList = [
    {
      title: "Jaqueline Amherst",
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
      title: "Mason Abruzzesse",
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
      title: "Laren Cozart",
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
      title: "Zijin (Jim) Gong",
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

  return (
    <Layout>
      <div className="features-section">
        <div className="container">
          <div className="text--center padding-horiz--md padding-top--xl">
            <Heading as="h1">Meet the Team</Heading>
            <p>
              Rabbitory is built and maintained by group of passionate
              developers and engineers.
            </p>
            <p>
              Have questions or want to know more? Reach out to us anytime on
              our socials.
            </p>
          </div>
          <div className="features-row">
            {TeamList.slice(0, 2).map((props, idx) => (
              <Member key={idx} {...props} />
            ))}
          </div>
          <div className="features-row">
            {TeamList.slice(2).map((props, idx) => (
              <Member key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
