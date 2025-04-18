import useBaseUrl from "@docusaurus/useBaseUrl";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // default styles

const images = ["instances-page.png", "instance-details.png"];

export default function ControlPanelPreview() {
  return (
    <section className="control-panel-preview">
      <div className="container text--center">
        <h2 className="text--center">The Rabbitory Control Panel</h2>
        <p>
          A streamlined interface for managing your instances - all in one place
        </p>
        <Carousel
          showArrows
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          autoPlay={false}
          emulateTouch
          className="control-panel-carousel"
        >
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={useBaseUrl(`/img/control-panel/${img}`)}
                alt={`Screenshot ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
