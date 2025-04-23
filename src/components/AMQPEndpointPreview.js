import useBaseUrl from "@docusaurus/useBaseUrl";

export default function AMPQEndpointPreview() {
  const videoUrl = useBaseUrl("/img/amqp-code-demo.mp4");

  return (
    <div className="amqp-endpoint-preview">
      <h2>
        Connect to your queue in <span className="gradient-text">seconds</span>.
      </h2>
      <div className="amqp-endpoint-preview-container">
        <div className="amqp-text">
          <h3>Just copy and paste.</h3>
          <ul>
            <li>something here</li>
          </ul>
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
