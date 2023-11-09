import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    'si.jpeg',
    'ReflectionsinBeauty.jpeg',
    'MomentsMemories.jpeg',
    'sixteen.jpeg',
    'softpink.jpeg',
    'Sunrise Serenity.jpeg',
    'Untitled.jpeg',
    'Complement.jpeg',
    'ReflectionsinBeauty.jpeg',
    'MomentsMemories.jpeg', 
  ];
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
         <img src={require(`./styles/${image}`)} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
