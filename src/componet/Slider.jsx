
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Car = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1
      };


  return (
    <div>
          <Slider {...settings}>
      <div>
        <h1>Hey</h1>
      </div>
      <div>
        <h1>Bye</h1>
      </div>
      <div>
        <h1>Welcome</h1>
      </div>
    </Slider>
    </div>
  )
}

export default Car