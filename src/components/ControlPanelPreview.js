import useBaseUrl from "@docusaurus/useBaseUrl";
import { Carousel } from "react-responsive-carousel";
import React, { useRef, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // default styles

const videos = [
  "Create-Instance.mp4",
  "Notification.mp4",
  "Management-Ui.mp4",
  "Configuration.mp4",
  "Plugins.mp4",
  "Backups.mp4",
  "Firewall.mp4",
  "Logs.mp4",
  "Alarms.mp4",
];

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
        <h2 className="text--center">
          The Rabbitory Control Panel manages your instance creation
        </h2>
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
