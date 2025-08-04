// components/ImageSlider.jsx
import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/logo-1.png";
import img2 from "../../assets/images/logo-4.png";
import img3 from "../../assets/images/logo-5.png";
import img4 from "../../assets/images/logo-6.png";
import img5 from "../../assets/images/logo-7.png";
const ImageSlider = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,

  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-[1306px]  mx-auto py-25">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              className="w-[223px] h-[42px] object-cover rounded-lg "
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
