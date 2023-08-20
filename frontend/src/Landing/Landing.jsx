import './Landing.css'
import BackgroundLanding from "../assets/BackgroundLanding";
import Header from "../Header/Header";
import { FaAngleRight } from 'react-icons/fa'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCarousel from "../assets/CardCarousel";

import svgs from '../assets/SvgLanding';

const settings = {
  dots: false,
  infinite: true,
  speed: 1300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3500
};

function Landing() {
  return (
    <div className="absolute w-full overflow-x-hidden" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}>
      <div className="h-screen w-full flex flex-col items-center justify-center relative z-0">
        <BackgroundLanding />
        <Header />

        {/* group aprenda */}


        <div className="flex flex-col gap-8 items-center justify-center relative">
          <h1 className="text-center text-7xl w-4/5 text-cinza">Aprenda a programar!</h1>
          <h1 className="text-center text-2xl w-5/6 text-cinza">Conheça os conceitos básicos para iniciar sua jornada dev!</h1>
          <button className=" text-center uppercase bg-[#EE9765] w-1/4 h-14 rounded-xl shadow-md text-white flex justify-evenly items-center relative my-2">Comece agora <FaAngleRight className="text-2xl" /></button>
        </div>

      </div>

      {/* group ensinos */}

      <div className="bg-[#8654AD] h-fit py-20 flex items-center justify-around z-50 relative">
        <h1 className="pl-10 text-6xl leading-[5rem]  text-white mt-10 text-center">O que você<br /> irá aprender?</h1>
        <div className='w-1/3'>
          <Slider {...settings}>
            <CardCarousel props={svgs.html} />
            <CardCarousel props={svgs.css} />
            <CardCarousel props={svgs.js} />
            <CardCarousel props={svgs.php} />
          </Slider>
        </div>
      </div>

      {/* group processo  */}

      <div>

      </div>

    </div>
  );
}

export default Landing;
