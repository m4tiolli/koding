import kodingLogo from "../assets/kodingLogo.png";
import Html from "../assets/html.png";
import './Landing.css'

function Landing() {
  return (
    <div className="bg-purple-100"> 
      <header className="flex flex-row">
        <img className="h-12 m-10" src={kodingLogo} />
        <div className="flex justify-center items-center space-x-10 w-full mt-5">
          <button className="bg-red-100 rounded-2xl p-2 font-bold drop-shadow-md">Login</button>
          <button className="bg-purple-200 rounded-2xl p-2 font-bold drop-shadow-md">Cadastro</button>
        </div>
      </header>

    {/* group aprenda */}

      <div className="flex flex-col mb-10">
        <h1 className="text-center mt-20 pb-5 text-7xl">Aprenda a programar!</h1> 
        <h1 className="text-center text-2xl">Conheça os conceitos básicos para iniciar sua jornada dev!</h1> 
        <button className=" text-center uppercase m-10 ">Comece agora</button>
      </div>

    {/* group ensinos */}

      <div className="bg-purple-700 p-16 flex space-x-16">
        <h1 className="pl-10 text-5xl text-white mt-10">O que você irá aprender?</h1>
        <div className="w-2/5 bg-orange-600 p-10 rounded-2xL flex space-x-32 card">
          <img src={Html}/>
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
