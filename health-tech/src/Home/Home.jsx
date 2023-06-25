import React from 'react'
import "./Home.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
       <Slider {...settings}>
      <div className='slider'>
        <img src={`./Images/image1.jpeg `} alt=" not found" />
      </div>
      <div className='slider'>
        <h3>Slide 2</h3>
      </div>
      <div className='slider'>
        <h3>Slide 3</h3>
      </div>
      {/* Add more slides as needed */}
    </Slider>

    </div>
  )
}

export default Home