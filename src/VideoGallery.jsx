import React from "react";
import { Carousel } from "react-bootstrap";
import "./VideoGallery.css";

const videoData = [
  {
    src: "https://www.youtube.com/embed/seSIJf5mhPE",
    title: "MEU MALVADO FAVORITO 4 - Trailer Oficial (Universal Pictures) HD",
  },
  {
    src: "https://www.youtube.com/embed/yAZxx8t9zig",
    title: "Divertida Mente 2 | Trailer Oficial Dublado",
  },
  {
    src: "https://www.youtube.com/embed/X23XCFgdh2M",
    title: "Doutor Estranho no Multiverso da Loucura | Marvel Studios",
  },
  {
    src: "https://www.youtube.com/embed/K6lJSJXSdfI",
    title: "Deadpool & Wolverine | Trailer 3 Oficial Legendado",
  },
  {
    src: "https://www.youtube.com/embed/Cb4WV4aXBpk",
    title:
      "SUPER MARIO BROS - O FILME | Trailer Oficial (Universal Pictures) HD",
  },
  {
    src: "https://www.youtube.com/embed/giXco2jaZ_4?si=A_HYIGTH5jSq6spU",
    title: "op Gun: Maverick | NEW Official Trailer",
  },
  {
    src: "https://www.youtube.com/embed/DGr41XWZSJQ",
    title:
      "Kung Fu Panda 4 | Trailer Oficial Legendado (Universal Pictures) - HD",
  },
  {
    src: "https://www.youtube.com/embed/0LwUksasjrQ",
    title:
      "Os Fantasmas Ainda Se Divertem: Beetlejuice Beetlejuice | Trailer Oficial #2 Dublado",
  },
];

const VideoGallery = () => {
  return (
    <section className="video-gallery">
      <h2>Trailers dos Filmes</h2>
      <div className="carousel-container">
        <Carousel>
          {videoData.map((video, index) => (
            <Carousel.Item key={index}>
              <iframe
                width="50%"
                height="300"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default VideoGallery;
