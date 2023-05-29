import React, { useEffect, useState } from "react";
import HeroSlider, { Slide } from "hero-slider";
import logo1 from "../../assets/enza_21.gif";
import logo2 from "../../assets/enza_8346.jpg";
import logo3 from "../../assets/enza_8664.jpg";

const Carousel = () => {
  const images = [logo1, logo2, logo3];
 
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSLide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      className="slider"
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoPlay: true,
        shouldDisplayButtons: true,
        autoPlayDuration: 5000,
        height: "90vh",
      }}
    >
      {images.map((image, index) => (
        <Slide
          key={index}
          background={{
            backgroundImageSrc: image,
            backgroundAttachment: "fixed",
          }}
        />
      ))}
    </HeroSlider>
  );
};
export default Carousel;
