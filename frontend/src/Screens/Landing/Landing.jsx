import './Landing.css'
import BackgroundLanding from "../../Components/BackgroundLanding";
import Header from "../../Components/Header/Header";
import { FaAngleRight } from 'react-icons/fa'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCarousel from "../../Components/CardCarousel";

import svgs from '../../Components/SvgLanding';

const settings = {
  dots: true,
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


        <div className="flex flex-col gap-6 md:gap-8 xl:gap-10 items-center justify-center relative">
          <h1 className="text-center text-4xl md:text-6xl xl:text-[5rem] w-4/5 text-cinza font-semibold">Aprenda a programar!</h1>
          <h1 className="text-center text-lg md:text-xl xl:text-3xl md:w-4/5 w-7/8 text-cinza font-semibold">Conheça os conceitos básicos para iniciar sua jornada dev!</h1>
          <button className=" text-center uppercase bg-[#EE9765] w-fit h-14 rounded-xl shadow-md text-white flex justify-evenly items-center relative my-2 px-2 text-xs md:text-lg xl:text-2xl xl:px-4 font-semibold">Comece agora <FaAngleRight className="text-2xl" /></button>
        </div>

      </div>

      {/* group ensinos */}

      <div className="bg-[#8654AD] h-[28rem] py-20 flex flex-col lg:flex-row items-center justify-evenly z-50 relative">
        <h1 className="text-3xl lg:leading-[3.5rem] lg:text-5xl lg:w-1/4 text-white text-center font-bold">O que você irá aprender?</h1>
        <div className='w-screen lg:w-2/4'>
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