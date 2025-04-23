import useBaseUrl from "@docusaurus/useBaseUrl";

export default function AMPQEndpointPreview() {
  const videoUrl = useBaseUrl("/img/amqp-code-demo.mp4");

  return (
    <div className="container">
      <div className="amqp-endpoint-preview">
        <div className="amqp-text">
          <h3>AMQP ENDPOINT PREVIEW:</h3>
          <ul>
            <li>AWS IAM Roles & Instance Profiles</li>
            <li>AWS Control Panel EC2 Instance</li>
            <li>AWS Control Panel Security Group</li>
            <li>AWS DynamoDB Metadata Store</li>
          </ul>
        </div>
        <div className="ampq-preview-container">
          <div className="amqp-video-box">
            <video loop autoPlay playsInline muted width={600}>
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
