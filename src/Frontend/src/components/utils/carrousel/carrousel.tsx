import Carousel from "react-bootstrap/Carousel";

interface ImageCarouselProps {
  images: string[];
  width?: string;
  height?: string;
  interval?: number; 
}

export default function ImageCarousel({
  images,
  width = "100%",
  height = "500px",
  interval = 0,
}: ImageCarouselProps) {
  const finalInterval = interval && interval > 0 ? interval : 9999999999999;

  return (
    <div style={{ width, height, position: "relative", overflow: "hidden" }}>
      <Carousel interval={finalInterval} controls indicators style={{ height: "100%" }}>
        {images.map((src, idx) => (
          <Carousel.Item key={idx} style={{ height: "100%" }}>
            <img
              src={src}
              alt={`slide-${idx}`}
              className="d-block w-100"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
