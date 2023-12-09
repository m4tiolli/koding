import { useEffect, useState } from "react";
import { MdDevices } from "react-icons/md";
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
  return pc ? (
    <div className="fixed w-screen h-screen p-8 z-50 bg-darkcinza text-white flex flex-col items-center justify-center gap-4">
      <MdDevices className="text-[10em]" />
      <p className="text-xl text-center">
        Para uma melhor experiência acesse nossa plataforma por um computador.
      </p>
    </div>
  ) : (
    ""
  );
}

export default VerificaPC;
