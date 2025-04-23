import useBaseUrl from "@docusaurus/useBaseUrl";
import { Sparkles } from "lucide-react";

export default function CliPreview() {
  const videoUrl = useBaseUrl("/img/rabbitory-deploy-timelapse.mp4");

  return (
    <div className="cli-preview">
      <h2>
        Your Rabbitory stack. Automagically provisioned
        <Sparkles size={24} color="#63eef0" style={{ marginLeft: "0.5rem" }} />
      </h2>

      <div className="cli-preview-container">
        <div className="cli-video-box">
          <video loop autoPlay playsInline muted>
            <source src={videoUrl}></source>
          </video>
        </div>

        <div className="cli-text">
          <h3>With just a few clicks of the CLI, deploy:</h3>
          <ul>
            <li>list of resources here</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
