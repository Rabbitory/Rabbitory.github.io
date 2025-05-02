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
      title: "Jacqueline Amherst",
      image: "/img/team/jacquelineamherst.svg",
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
            href="https://www.linkedin.com/in/jacqueline-amherst-kemps-362409336/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          {/* <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe />
          </a> */}
          <a
            href="https://github.com/jq-ln"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="mailto:jacqueline.amherst@icloud.com">
            <FaEnvelope />
          </a>
        </div>
      ),
    },
    {
      title: "Mason Abbruzzese",
      image: "/img/team/masonabbruzzese.svg",
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
            href="https://www.linkedin.com/in/masonabbruzzese/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          {/* <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe />
          </a> */}
          <a
            href="https://github.com/Ovaculos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="mailto:masonderolo@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      ),
    },
    {
      title: "Laren Cozart",
      image: "/img/team/larencozart.svg",
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
          {/* <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe />
          </a> */}
          <a
            href="https://github.com/larencozart"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="mailto:larencozart@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      ),
    },
    {
      title: "Zijin (Jim) Gong",
      image: "/img/team/zijingong.svg",
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
            href="https://www.linkedin.com/in/zijin-gong-5a8681255/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          {/* <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGlobe />
          </a> */}
          <a
            href="https://github.com/zijin1994"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="mailto:zijin@ualberta.ca">
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
          <div className="team text--center padding-horiz--md padding-top--sm">
            <Heading as="h1">
              Meet the <span className="gradient-text">Team</span>
            </Heading>
            <p>
              Rabbitory is developed by a dedicated team of engineers committed
              to building reliable, open-source tools.
            </p>
            <p>
              We’re always looking for opportunites to build. Feel free to
              connect with us on our socials.
            </p>
          </div>
          <div className="features-row">
            {TeamList.map((props, idx) => (
              <Member key={idx} {...props} />
            ))}
          </div>
          {/* <div className="features-row">
            {TeamList.slice(2).map((props, idx) => (
              <Member key={idx} {...props} />
            ))}
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Team;
