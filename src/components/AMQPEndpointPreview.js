import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import { Copy } from "lucide-react";

export default function AMPQEndpointPreview() {
  const videoUrl = useBaseUrl("/img/amqp-code-demo.mp4");

  return (
    <div className="amqp-endpoint-preview">
      <h2>
        Start using your message queue in{" "}
        <span className="gradient-text">seconds</span>.
      </h2>
      <div className="amqp-endpoint-preview-container">
        <div className="amqp-text">
          <h3>
            <Copy style={{ marginRight: "8px", color: "#63eef0" }} />
            Just copy, paste, and connect.
          </h3>
          <p>
            Rabbitory Connection URLs are designed to integrate seamlessly with
            your producer and consumer code.
          </p>
          <p>
            Copy the URL from the Control Panel, paste it into your code, and
            start messaging.
          </p>
          <p>
            For more info on using your instance, check out our{" "}
            <Link
              style={{ color: "#63eef0", textDecoration: "underline" }}
              href="docs/ArchitectureOverview#3-rabbitmq-instances"
            >
              docs
            </Link>{" "}
            .
          </p>
        </div>
        <div className="amqp-video-box">
          <video loop autoPlay playsInline muted>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
