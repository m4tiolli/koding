import { useState } from "react";
import Cookies from 'js-cookie';

function ModalCookies() {
  const [estadoModal, setEstadoModal] = useState(true);

  const Recusar = () => {
    setEstadoModal(false);
  };

  const Aceitar = () => {
    Cookies.set('cookie', 'ok', { expires: 1})
    setEstadoModal(false);
  };

  console.log(Cookies.get("cookie"))

  return Cookies.get("cookie") == "ok" ? (
    <></>
  ) : (
    <div
      className={`${
        estadoModal == true ? "block" : "hidden"
      } bg-white z-[10000] p-4 fixed bottom-2 left-2 w-[80%] h-1/5 lg:w-[35vw] lg:h-[25vh] rounded-xl grid place-items-center`}
    >
      <p className="text-left">
        Este site utiliza cookies de terceiros para melhorar sua experiência no
        site.
      </p>
      <div className="w-4/5 flex justify-evenly items-center">
        <button
          onClick={Aceitar}
          className="bg-cinza text-white px-8 py-2 rounded-md hover:opacity-70"
        >
          Aceitar
        </button>
        <button
          onClick={Recusar}
          className="text-cinza px-8 py-2 rounded-md border-2 hover:border-cinza"
        >
          Recusar
        </button>
      </div>
    </div>
  );
}
export default ModalCookies;
