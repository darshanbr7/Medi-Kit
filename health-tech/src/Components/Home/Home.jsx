import React from 'react'
import SimpleImageSlider from "react-simple-image-slider"
import "./Home.css"


const Home = () => {
  const [imageNum, setImageNum] = React.useState(1);
  const sliderImages = [
     {
        url: "https://assets.thehansindia.com/h-upload/2023/04/30/1349187-nlem.webp",
     },
     {
        url: "https://banner.myupchar.com/assets/1238/DHT_1_new.jpg",
     },
     {
        url: "https://meds.myupchar.com/31/175617.jpg",
     },
     {
        url: "https://meds.myupchar.com/17063/calutide-500.jpg",
     },

  ];


  return (
    <React.Fragment>
      <div className='home'>
         <div id='slider'>
          <SimpleImageSlider
              height={300}
              width={600}
              images={sliderImages}
              showBullets={true}
              showNavs={false}
              autoPlay={true} 
              onStartSlide = {(index) => {
                setImageNum(index);
              }}
                autoPlayDelay = {4}
        />   
    </div>
</div>
</React.Fragment>

  )
}

export default Home