import { Box, Container } from "@mui/material";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const heroCarouselImages = [
  "../public/hero/best-men-jeans-apc-luxe-digital.jpg.webp",
  "../public/hero/best-men-jeans-balmain-luxe-digital.jpg.webp",
  "../public/hero/best-men-jeans-brands-luxe-digital@2x-1536x768.jpg.webp",
  "../public/hero/best-men-jeans-diesel-luxe-digital.jpg.webp",
  "../public/hero/best-men-jeans-polo-ralph-lauren-luxe-digital.jpg.webp",
  "../public/hero/nudie-jeans-men-luxe-digital.jpg.webp",
];

const buttonCss = {
  fontSize: "3rem",
  background: "rgba(0,0,0,0.5)",
  borderRadius: "40px",
  padding: "10px",
};

const HeroCarousel = () => {
  return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={heroCarouselImages.length - 1}
        visibleSlides={1}
        // isPlaying
        // interval={5000}
        infinite
        style={{ position: "relative" }}
      >
        <Slider style={{ maxHeight: "800px" }}>
          {heroCarouselImages.map((eachImg, index) => {
            return (
              <Slide index={index} key={index} sx={{ paddingBottom: "0" }}>
                <Image
                  src={`/${eachImg}`}
                  width={1200}
                  height={800}
                  alt="heroCarousel"
                />
              </Slide>
            );
          })}
        </Slider>
        <ButtonBack
          style={{
            position: "absolute",
            top: "50%",
            background: "transparent",
            border: 0,
            left: 0,
            color: "white",
          }}
        >
          <ArrowBackIcon style={buttonCss} />
        </ButtonBack>
        <ButtonNext
          style={{
            position: "absolute",
            top: "50%",
            background: "transparent",
            border: "0",
            right: 0,
            color: "white",
          }}
        >
          <ArrowForwardIcon style={buttonCss} />
        </ButtonNext>
      </CarouselProvider>
  );
};

export default HeroCarousel;
