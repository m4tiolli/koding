import "./Landing.css";
import {
  BackgroundLanding1,
  BackgroundLanding2,
} from "../../Components/BackgroundLanding";
import Header from "../../Components/Header/Header";
import { FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCarousel from "../../Components/CardCarousel";
import svgs from "../../Components/SvgLanding";
import Logo from "../../Components/Logo";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import grafico from "../../assets/grafico.png";
import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "../../Components/ColorBlind";
import ModalCookies from "../../Components/ModalCookies/ModalCookies";

const settings = {
  dots: true,
  infinite: true,
  speed: 1300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3500,
};

function Landing() {
  let mode = localStorage.theme;

  function Color(mode, color) {
    var newcolor;
    if (mode === "protanomalia") {
      newcolor = protanomaly(color);
      localStorage.theme = "protanomalia";
    } else if (mode === "deuteranomalia") {
      newcolor = deuteranomaly(color);
      localStorage.theme = "deuteranomalia";
    } else if (mode === "tritanomalia") {
      newcolor = tritanomaly(color);
      localStorage.theme = "tritanomalia";
    } else {
      newcolor = color;
    }
    return newcolor;
  }

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.nivel == "responsavel"
      ? navigate("/pais/home")
      : localStorage.nivel == "crianca"
      ? navigate("/home")
      : navigate("/");
  }, [navigate]);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function checkActiveClass(mutationsList) {
    mutationsList.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class" &&
        mutation.target.classList.contains("slick-active")
      ) {
        const buttons = document.querySelectorAll(".slick-dots li button");
        buttons.forEach((button, index) => {
          if (button.parentElement.classList.contains("slick-active")) {
            const colors = ["#E88D59", "#4A90E2", "#F2D237", "#5D6CC2"];
            document.documentElement.style.setProperty(
              "--color",
              colors[index]
            );
          }
        });
      }
    });
  }

  const targetNode = document.querySelector(".slick-dots");
  const observer = new MutationObserver(checkActiveClass);
  const config = { attributes: true, subtree: true };

  if (targetNode) {
    observer.observe(targetNode, config);
  } else {
    console.error("Elemento não encontrado com o seletor fornecido.");
  }

  return (
    <div className="absolute w-full h-fit overflow-hidden bg-[#e5c6ff] dark:bg-darkcinzaclaro">
      <div className="h-screen w-full flex flex-col items-center justify-center relative z-auto">
        <ModalCookies />
        <BackgroundLanding1 />
        <Header />

        {/* group aprenda */}

        <div className="flex flex-col gap-6 md:gap-8 xl:gap-10 items-center justify-center relative">
          <h1 className="text-center text-4xl md:text-6xl xl:text-[5rem] w-4/5 text-cinza dark:text-white font-semibold">
            Aprenda a programar!
          </h1>
          <h1 className="text-center text-lg md:text-xl xl:text-3xl md:w-4/5 w-7/8 text-cinza dark:text-[#cacaca] font-semibold">
            Conheça os conceitos básicos para iniciar sua jornada dev!
          </h1>
          <button
            onClick={() => navigate("/criar-conta")}
            className=" text-center uppercase w-fit h-14 rounded-xl shadow-md text-white flex justify-evenly items-center relative my-2 px-2 text-xs md:text-lg xl:text-2xl xl:px-4 font-semibold"
            style={{ backgroundColor: Color(mode, "#EE9765") }}
          >
            Comece agora <FaAngleRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* group ensinos */}

      <div
        className="dark:bg-[#5F357F] h-[28rem] py-20 flex flex-col lg:flex-row items-center justify-evenly z-50 relative"
        style={{ backgroundColor: Color(mode, "#8654AD") }}
      >
        <h1 className="text-3xl lg:leading-[3.5rem] lg:text-5xl lg:w-1/4 text-white text-center font-semibold">
          O que você irá aprender?
        </h1>
        <div className="w-screen lg:w-2/4">
          <Slider {...settings}>
            <CardCarousel props={svgs.html} />
            <CardCarousel props={svgs.css} />
            <CardCarousel props={svgs.js} />
            <CardCarousel props={svgs.php} />
          </Slider>
        </div>
      </div>

      {/* group processo  */}

      <div className="h-[120vh] flex flex-col lg:flex-row lg:w-full lg:justify-between items-center justify-evenly w-full relative">
        <BackgroundLanding2 />

        <div className="w-4/5 lg:w-2/5 flex lg:ml-10 flex-col gap-5 lg:relative">
          <h1 className="text-[#AD3347] font-bold text-2xl lg:text-3xl w-full">
            Nosso processo
          </h1>
          <p className="font-bold text-[1.65rem] lg:text-4xl leading-8 dark:text-white">
            Seguimos um modelo simples e prático para a sua aprendizagem!
          </p>
        </div>

        <div
          className="w-full lg:w-1/2 lg:rounded-l-xl h-[18em]"
          style={{ backgroundColor: Color(mode, "#C16574") }}
        >
          <div className="w-full flex justify-evenly h-1/2 relative">
            <div className="bg-[#EFE6E6] w-[45%] h-[130%] lg:w-[25%] rounded-2xl absolute -top-16 left-2 lg:left-28 xl:left-[6rem] xl:w-[25%] flex flex-col justify-between">
              <p className="bg-[#D9D9D9] w-[2em] h-[2em] grid place-items-center font-bold ml-2 mt-2 rounded-full p-2">
                1
              </p>
              <div className="flex flex-col items-center justify-center w-full py-3 gap-3 leading-4">
                <p className="w-full px-2 text-md font-bold">
                  Escolha sua linguagem preferida
                </p>
                <p className="w-full px-2 text-xs font-bold text-[#811CD7]">
                  Inicie pelas mais simples se não tiver conhecimento
                </p>
              </div>
            </div>
            <div className="bg-[#EFE6E6] w-[45%] h-[130%] lg:w-[25%] rounded-2xl absolute -top-16 right-2 lg:right-28 xl:right-[6rem] xl:w-[25%] flex flex-col justify-between">
              <p className="bg-[#D9D9D9] w-[2em] h-[2em] grid place-items-center font-bold ml-2 mt-2 rounded-full p-2">
                2
              </p>
              <div className="flex flex-col items-center justify-center w-full py-3 gap-3 leading-4">
                <p className="w-full px-2 text-md font-bold">
                  Procure um tema para iniciar a aula
                </p>
                <p className="w-full px-2 text-xs font-bold text-[#811CD7]">
                  Estruturas e variáveis são ótimos temas para se iniciar!
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-evenly h-1/2 relative">
            <div className="bg-[#EFE6E6] w-[45%] h-[130%] lg:w-[25%] rounded-2xl absolute -bottom-16 left-2 lg:left-28 xl:left-[6rem] xl:w-[25%] flex flex-col justify-between">
              <p className="bg-[#D9D9D9] w-[2em] h-[2em] grid place-items-center font-bold ml-2 mt-2 rounded-full p-2">
                3
              </p>
              <div className="flex flex-col items-center justify-center w-full py-3 gap-3 leading-4">
                <p className="w-full px-2 text-md font-bold">
                  Siga nossos tutoriais para aprender
                </p>
                <p className="w-full px-2 text-xs font-bold text-[#811CD7]">
                  Anote para garantir que entendeu tudo!
                </p>
              </div>
            </div>
            <div className="bg-[#EFE6E6] w-[45%] h-[130%] lg:w-[25%] rounded-2xl absolute -bottom-16 right-2 lg:right-28 xl:right-[6rem] xl:w-[25%] flex flex-col justify-between">
              <p className="bg-[#D9D9D9] w-[2em] h-[2em] grid place-items-center font-bold ml-2 mt-2 rounded-full p-2">
                4
              </p>
              <div className="flex flex-col items-center justify-center w-full py-3 gap-3 leading-4">
                <p className="w-full px-2 text-md font-bold">
                  Pratique por meio de jogos
                </p>
                <p className="w-full px-2 text-xs font-bold text-[#811CD7]">
                  A prática leva a perfeição! Pratique de forma lúdica
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/login")}
          className=" text-center w-fit h-14 rounded-xl shadow-md text-white flex justify-evenly items-center my-2 px-2 text-xl xl:text-2xl xl:px-4 font-regular absolute bottom-0 lg:left-10 xl:left-[8.5rem] lg:bottom-[20%]"
          style={{ backgroundColor: Color(mode, "#8654AD") }}
        >
          Ver mais <FaAngleRight className="text-2xl" />
        </button>
      </div>

      <div
        className="dark:bg-[#3C7693] w-full h-[80vh] flex flex-col lg:flex-row-reverse items-center relative z-[100] justify-evenly"
        style={{ backgroundColor: Color(mode, "#53A6D1") }}
      >
        <p className="text-white font-regular w-4/5 lg:w-2/5 text-center text-2xl">
          Acompanhe o desempenho do usuário por meio de gráficos
        </p>
        <img
          src={grafico}
          alt=""
          className="w-11/12 h-auto rounded-xl shadow-xl lg:w-2/5"
        />
        <button
          onClick={() => navigate("/login")}
          className="absolute bottom-2 lg:right-[10rem] lg:bottom-[10rem] xl:right-[18.5rem] text-center xl:bottom-[20%] w-fit h-14 rounded-xl shadow-md text-white flex justify-evenly items-center my-2 px-2 text-xl xl:text-2xl xl:px-4 font-regular"
          style={{ backgroundColor: Color(mode, "#4BC2A6") }}
        >
          Ver mais <FaAngleRight className="text-2xl" />
        </button>
      </div>

      <div className="relative w-full h-[100vh] flex flex-col gap-5 items-center justify-center z-10">
        <BackgroundLanding1 />
        <div className="text-center flex flex-col gap-2 w-4/5">
          <h1 className="font-semibold text-cinza dark:text-white text-4xl">
            Comece já
          </h1>
          <p className="text-cinza dark:text-[#cacaca] font-semibold text-2xl">
            Junte-se a nós e faça a diferença
          </p>
        </div>
        <button
          onClick={() => navigate("/criar-conta")}
          className=" text-center uppercase w-fit h-14 rounded-xl shadow-md text-white flex justify-evenly items-center relative my-2 px-2 text-md md:text-lg xl:text-2xl xl:px-4 font-semibold"
          style={{ backgroundColor: Color(mode, "#EE9765") }}
        >
          Comece agora <FaAngleRight className="text-2xl" />
        </button>
      </div>

      <div className="w-full h-[20vh] shadow-inner bg-[#ECD5FF] relative flex flex-col gap-1 justify-center items-center text-cinza font-light text-sm">
        <Logo isResponsive={true} />
        <p>Koding 2023</p>
        <p>Todos os direitos reservados</p>
      </div>
    </div>
  );
}

export default Landing;
