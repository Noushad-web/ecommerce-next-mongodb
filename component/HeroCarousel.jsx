import { Box } from '@mui/material';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const HeroCarousel = () => {
  return (
    <Box>
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0} sx="background-color: red;">I am the first Slide.</Slide>
          <Slide index={1} sx="background-color: blue;">I am the second Slide.</Slide>
          <Slide index={2} sx="background-color: yellow;">I am the third Slide.</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
    </Box>
  );
};

export default HeroCarousel;
