import useBaseUrl from "@docusaurus/useBaseUrl"; // Import useBaseUrl

export default function CliPreview() {
  const videoUrl = useBaseUrl("/img/rabbitory-deploy-timelapse.mp4");

  return (
    <div className="cli-preview">
      <h2>Some Title</h2>

      <div className="cli-preview-container">
        <div className="cli-video-box">
          <video loop autoPlay playsInline muted>
            <source src={videoUrl}></source>
          </video>
        </div>

        <div className="cli-text">
          <h3>With just a few clicks of the CLI, deploy:</h3>
          <ul>...</ul>
        </div>
      </div>
    </div>
  );
}
