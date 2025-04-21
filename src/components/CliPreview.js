import useBaseUrl from "@docusaurus/useBaseUrl"; // Import useBaseUrl

export default function CliPreview() {
  const videoUrl = useBaseUrl("/img/rabbitory-deploy-timelapse.mp4");

  return (
    <div className="container">
      <div className="cli-preview-container">
        <div className="cli-video-box">
          <video loop autoPlay playsInline muted width={600}>
            <source src={videoUrl}></source>
          </video>
        </div>

        <div className="cli-text">
          <h3>With just a few clicks of the CLI, deploy:</h3>
          <ul>
            <li>AWS IAM Roles & Instance Profiles</li>
            <li>AWS Control Panel EC2 Instance</li>
            <li>AWS Control Panel Security Group</li>
            <li>AWS DynamoDB Metadata Store</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
