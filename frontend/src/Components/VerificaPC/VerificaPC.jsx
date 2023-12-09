import { useEffect, useState } from "react";
import { MdDevices } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function VerificaPC() {
  const [pc, setPc] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setPc(window.innerWidth < 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();

  const Sair = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("nivel");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return pc ? (
    <div className="fixed w-screen h-screen p-8 z-50 bg-darkcinza text-white flex flex-col items-center justify-center gap-4">
      <MdDevices className="text-[10em]" />
      <p className="text-xl text-center">
        Para uma melhor experiência acesse nossa plataforma por um computador.
      </p>
      <button
        onClick={Sair}
        className="bg-white  text-darkcinza w-3/5 py-6 my-4 rounded-xl text-2xl"
      >
        Sair
      </button>
    </div>
  ) : (
    ""
  );
}

export default VerificaPC;
