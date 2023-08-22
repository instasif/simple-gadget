import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../assets/images/sliders/camera.jpg"
import img2 from "../../assets/images/sliders/doors.jpg"
import img3 from "../../assets/images/sliders/hiSpeed.jpg"

const Carousel = () => {
    const settings = {
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      };
    return (
        <div className="overflow-hidden">
        <Slider {...settings}>
          <div className="w-full">
            <img className="w-[1320px] lg:h-[440px]" src={img1} alt="" />
          </div>
          <div className="w-full">
          <img className="w-[1320px] lg:h-[440px]" src={img2} alt="" />
          </div>
          <div className="w-full">
          <img className="w-[1320px] lg:h-[440px]" src={img3} alt="" />
          </div>
        </Slider>
      </div>
    );
};

export default Carousel;