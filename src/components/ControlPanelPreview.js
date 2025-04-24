import useBaseUrl from "@docusaurus/useBaseUrl";
import { Carousel } from "react-responsive-carousel";
import React, { useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // default styles

const videos = [
  "Create-Instance.mp4",
  "Configuration.mp4",
  "Plugins.mp4",
  "Backups.mp4",
  "Firewall.mp4",
  "Logs.mp4",
  "Alarms.mp4",
  "Notification.mp4",
  "Management-Ui.mp4",
];

const videoLabels = {
  "Create-Instance.mp4": "instance provisioning",
  "Configuration.mp4": "configurations",
  "Plugins.mp4": "plugins",
  "Backups.mp4": "backups",
  "Firewall.mp4": "firewall rules",
  "Logs.mp4": "logs",
  "Alarms.mp4": "alarms",
  "Notification.mp4": "in-app events",
  "Management-Ui.mp4": "RabbitMQ Management UI",
};

export default function ControlPanelPreview() {
  const [current, setCurrent] = useState(0);

  const videoRefs = useRef([]);

  const onSlideChange = (index) => {
    setCurrent(index);
    videoRefs.current.forEach((vid, i) => {
      if (!vid) return;
      if (i === index) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  };

  return (
    <section className="control-panel-preview">
      <div className="container text--center">
        <h2 className="text--center control-panel-heading">
          Confidently manage your{" "}
          <span
            key={videoLabels[videos[current]]}
            className="animated-word gradient-text"
          >
            {videoLabels[videos[current]]}
          </span>
        </h2>
        {/* <p>
          With the Rabbitory Control Panel, there's no need to become a RabbitMQ
          sys admin. We got you covered with automated support for your RabbitMQ
          in the cloud.
        </p> */}
        <Carousel
          showArrows
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          autoPlay={false}
          emulateTouch
          onChange={onSlideChange}
          selectedItem={current}
          className="control-panel-carousel"
        >
          {videos.map((video, idx) => (
            <video
              key={video}
              width={800}
              loop
              muted
              autoPlay={idx === 0}
              ref={(el) => (videoRefs.current[idx] = el)}
              style={{ display: "block", margin: "0 auto" }}
            >
              <source src={useBaseUrl(`/video/${video}`)} type="video/mp4" />
              Your browser doesn’t support HTML5 video.
            </video>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
