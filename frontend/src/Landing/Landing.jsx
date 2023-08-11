import Html from "../assets/html.png";
import './Landing.css'
import BackgroundLanding from "../assets/BackgroundLanding";
import Header from "../Header/Header";
import { FaAngleRight } from 'react-icons/fa'

function Landing() {
  return (
    <div className="absolute w-full overflow-x-hidden" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}>
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <BackgroundLanding />
        <Header />

        {/* group aprenda */}


        <div className="flex flex-col gap-8 items-center justify-center relative">
          <h1 className="text-center text-7xl w-4/5 text-cinza">Aprenda a programar!</h1>
          <h1 className="text-center text-2xl w-5/6 text-cinza">Conheça os conceitos básicos para iniciar sua jornada dev!</h1>
          <button className=" text-center uppercase bg-[#EE9765] w-1/4 h-14 rounded-xl shadow-md text-white flex justify-evenly items-center relative">Comece agora <FaAngleRight className="text-2xl" /></button>
        </div>

      </div>

      {/* group ensinos */}

      <div className="bg-purple-700 p-16 flex space-x-16">
        <h1 className="pl-10 text-5xl text-white mt-10">O que você irá aprender?</h1>
        <div className="w-2/5 bg-orange-600 p-10 rounded-2xL flex space-x-32 card">
          <img src={Html} />
          <ul className="text-white tracking-wide">
            <li>estrutura</li>
            <li>tags</li>
            <li>links</li>
            <li>mais...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Landing;
