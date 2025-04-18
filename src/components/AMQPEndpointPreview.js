export default function AMPQEndpointPreview() {
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
        <div className="amqp-video-box">
          {/* Replace this div with your <video> when ready */}
          <div className="video-placeholder">CLI Video Preview Placeholder</div>
        </div>
      </div>
    </div>
  );
}
