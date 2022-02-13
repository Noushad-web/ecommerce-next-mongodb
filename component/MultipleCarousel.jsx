import { Container } from "@mui/material";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import React from "react";
import ProductCard from "./Card";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const buttonCss = {
  fontSize: "3rem",
  background: "rgba(0,0,0,0.5)",
  borderRadius: "40px",
  padding: "10px",
};

const MultipleCarousel = ({ products }) => {
  
  return (
    <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={products.length - 1}
        visibleSlides={3}
        isPlaying
        interval={5000}
        infinite
        style={{ position: "relative" }}
      >
        <Slider style={{ maxHeight: "400px" }}>
          {products.map((eachProduct, index) => {
            return (
              <Slide index={index} key={index} sx={{ paddingBottom: "0" }}>
                <ProductCard product={eachProduct}/>
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

export default MultipleCarousel;