export default function CliPreview() {
  return (
    <div className="container">
      <div className="cli-preview-container">
        <div className="cli-video-box">
          {/* Replace this div with your <video> when ready */}
          <div className="video-placeholder">CLI Video Preview Placeholder</div>
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
