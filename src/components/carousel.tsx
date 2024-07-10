import { Character, characters } from "./characters";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useState } from "react";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleNext = () => {
    setCurrentSlide((prevSlide) => {
      console.log(prevSlide);

      return prevSlide === characters.length - 1 ? 0 : prevSlide + 1;
    });
  };

  const handleBack = () => {
    setCurrentSlide((prevSlide) => {
      console.log(prevSlide);
      return prevSlide === 0 ? characters.length - 1 : prevSlide - 1;
    });
  };
  const handleChoose = (character: Character) => {
    localStorage.setItem("character", JSON.stringify(character));
    // Optionally, you can also navigate to another page or perform other actions here.
  };
  return (
    <CarouselProvider
      naturalSlideWidth={800}
      naturalSlideHeight={1000}
      totalSlides={characters.length}
      currentSlide={currentSlide}
    >
      <Slider className="w-[500px]">
        {characters.map((character, index) => (
          <Slide key={index} index={index} className="w-full h-full">
            <div className="flex flex-col items-center w-full gap-5">
              <div className="max-h-[400px] overflow-hidden">
                <Image
                  hasMasterSpinner
                  className="h-full w-full "
                  src={character.media.src}
                  alt={character.media.alt}
                />
              </div>
              <p className="mt-6 text-6xl">{character.class}</p>
              <button
                className="bg-white text-black px-5 text-3xl rounded"
                onClick={() => handleChoose(character)}
              >
                Choose
              </button>
            </div>
          </Slide>
        ))}
      </Slider>
      <div className="flex justify-between mt-4">
        <ButtonBack
          onClick={handleBack}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={false}
        >
          Back
        </ButtonBack>
        <ButtonNext
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={false}
        >
          Next
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};
