import React, { useState } from "react";
import { ArrowSmallLeftIcon , ArrowSmallRightIcon} from '@heroicons/react/24/outline'
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/6192558/pexels-photo-6192558.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3571334/pexels-photo-3571334.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2760848/pexels-photo-2760848.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowSmallLeftIcon className="heroicon"/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowSmallRightIcon className="heroicon"/>
        </div>
      </div>
    </div>
  );
};

export default Slider;
