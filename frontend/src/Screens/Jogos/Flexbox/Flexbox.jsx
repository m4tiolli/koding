import "../Flexbox/Flexbox.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { IoHelpCircleOutline } from "react-icons/io5";
import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../../Components/ColorBlind";

import { useDisclosure } from "@chakra-ui/react";
import { Modal, ModalContent } from "@chakra-ui/react";

function Flexbox() {
  const mode = localStorage.getItem("theme");

  const { isOpen, onOpen, onClose } = useDisclosure();

  function Color(mode, color) {
    var newcolor;
    if (mode === "protanomaly") {
      newcolor = protanomaly(color);
    } else if (mode === "deuteranomaly") {
      newcolor = deuteranomaly(color);
    } else if (mode === "tritanomaly") {
      newcolor = tritanomaly(color);
    } else newcolor = color;
    return newcolor;
  }

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const [disabled, setDisabled] = useState(true);
  function addCSS(e) {
    const css = e;
    const Frente = document.querySelector("#frente");
    Frente.style.cssText = css;
    if (
      css.includes("flex-direction: column") &&
      css.includes("flex-wrap: wrap")
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  const [inputValue, setInputValue] = useState("");
  const [timer, setTimer] = useState(null);

  const inputChanged = (e) => {
    setInputValue(e.target.value);

    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      addCSS(inputValue);
    }, 100);

    setTimer(newTimer);
  };

  const navigate = useNavigate();

  const Verificar = () => {
    if (!disabled) {
      toast.success("Você acertou!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      var local = parseInt(localStorage.pontuacao);
      local = local + 100;
      localStorage.setItem("pontuacao", local);
      setTimeout(() => navigate("/flexbox/nivel2"), 3000);
    }
  };

  return (
    <div
      className="flex h-full w-full dark:bg-darkcinzaclaro"
      style={{
        background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={2000}
        limit={3}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* Instruções */}

      <section className="w-3/5 p-10 dark:bg-darkcinzaclaro dark:text-white">

        <div className="flex items-center justify-center z-0 h-10 text-gray-600 dark:text-white space-x-[600px]">
          <AiOutlineClose
            title="Fechar"
            onClick={() => navigate(-1)}
            className="flex text-3xl cursor-pointer dark:text-white"
          />
          <IoHelpCircleOutline
            title="Ajuda"
            onClick={onOpen}
            className="flex text-4xl cursor-pointer"
          />
        </div>

        <h1 className="text-3xl uppercase font-semibold text-gray-600 dark:text-white mt-10">
          Flexbox
        </h1>
        <p className="font-sans mb-5">
          Ajude a alinhar 3 (três) colunas usando uma combinação de{" "}
          <span
            className="border-b-2 border-purple-500 border-solid codigo dark:text-black"
            style={{ background: Color(mode, "#FDBA74") }}
          >
            flex-direction
          </span>{" "}
          e{" "}
          <span
            className="border-b-2 border-purple-500 border-solid codigo dark:text-black"
            style={{ background: Color(mode, "#FDBA74") }}
          >
            flex-wrap
          </span>
          .
        </p>

        {/* Editor */}

        <div
          className="relative h-72 pt-3 pl-10 pb-5 rounded-md text-md leading-6 text-gray-700"
          style={{ background: Color(mode, "#CEC8D3") }}
        >
          <div
            className="h-full text-right absolute top-0 left-0 text-white pt-3 pl-2 pr-2"
            style={{ background: Color(mode, "#A692B8") }}
          >
            1 <br /> 2 <br /> 3 <br /> 4 <br /> 5 <br /> 6 <br /> 7 <br /> 8{" "}
            <br /> 9 <br /> 10
          </div>
          <pre className="m-0">
            #code &#123; <br />
            <span className="ml-5">display: flex;</span>
          </pre>
          <textarea
            className="w-11/12 h-12 text ml-5 border-none outline-none resize-none overflow-auto"
            value={inputValue}
            onChange={inputChanged}
          ></textarea>
          <pre className="m-0">&#125;</pre>
          <button
            className="border-none disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed rounded-md text-white p-2 landing-6 absolute right-7 bottom-5"
            onChange={addCSS}
            id="avancar"
            disabled={disabled}
            style={{ background: Color(mode, "#BE175D") }}
            onClick={Verificar}
          >
            Próximo
          </button>
        </div>
      </section>

      {/* Jogo */}

      <section
        className="relative w-50vw h-screen overflow-hidden min-w-[380px] min-h-[380px]"
        style={{ background: Color(mode, "#E79D67") }}
      >
        {/* sapos */}
        <div
          className="flex justify-center items-center absolute frente top-0"
          id="frente"
        >
          {/* sapo container */}
          <div className="sp-container">
            {/* sapo verde */}
            <div className="sp verde"></div>
          </div>
          <div className="sp-container">
            <div className="sp verde"></div>
          </div>
          <div className="sp-container">
            <div className="sp verde"></div>
          </div>
          <div className="sp-container">
            <div className="sp verde"></div>
          </div>
          <div className="sp-container">
            <div className="sp verde"></div>
          </div>

          {/* sapo container */}
          <div className="sp-container">
            {/* sapo vermelho */}
            <div className="sp vermelho"></div>
          </div>
          <div className="sp-container">
            <div className="sp vermelho"></div>
          </div>
          <div className="sp-container">
            <div className="sp vermelho"></div>
          </div>
          <div className="sp-container">
            <div className="sp vermelho"></div>
          </div>
          <div className="sp-container">
            <div className="sp vermelho"></div>
          </div>

          {/* sapo container */}
          <div className="sp-container">
            {/* sapo amarelo */}
            <div className="sp amarelo"></div>
          </div>
          <div className="sp-container">
            <div className="sp amarelo"></div>
          </div>
          <div className="sp-container">
            <div className="sp amarelo"></div>
          </div>
          <div className="sp-container">
            <div className="sp amarelo"></div>
          </div>
          <div className="sp-container">
            <div className="sp amarelo"></div>
          </div>
        </div>

        {/* vrs */}

        <div className="flex flex-col items-center flex-wrap absolute tras left-0 top-0">
          {/* vr container */}
          <div className="vr-container">
            {/* vr verde */}
            <div
              className="vr verde"
              style={{ transform: "scale(0.88)", rotate: "322deg" }}
            ></div>
          </div>
          <div className="vr-container">
            <div
              className="vr verde"
              style={{ transform: "scale(0.95)", rotate: "10deg" }}
            ></div>
          </div>

          <div className="vr-container">
            <div
              className="vr verde"
              style={{ transform: "scale(0.99)", rotate: "34deg" }}
            ></div>
          </div>

          <div className="vr-container">
            <div
              className="vr verde"
              style={{ transform: "scale(0.81)", rotate: "67deg" }}
            ></div>
          </div>

          <div className="vr-container">
            <div
              className="vr verde"
              style={{ transform: "scale(0.83)", rotate: "90deg" }}
            ></div>
          </div>

          <div className="vr-container">
            {/* vr vermelho */}
            <div
              className="vr vermelho"
              style={{ transform: "scale(0.82)", rotate: "221deg" }}
            ></div>
          </div>

          <div className="vr-container">
            <div
              className="vr vermelho"
              style={{ transform: "scale(0.94)", rotate: "122deg" }}
            ></div>
          </div>

          <div className="vr-container">
            <div
              className="vr vermelho"
              style={{ transform: "scale(0.88)", rotate: "190deg" }}
            ></div>
          </div>

          <div className="vr-container">
            <div
              className="vr vermelho"
              style={{ transform: "scale(0.97)", rotate: "70deg" }}
            ></div>
          </div>

          <div className="vr-container">
            <div
              className="vr vermelho"
              style={{ transform: "scale(0.90)", rotate: "145deg" }}
            ></div>
          </div>

          <div className="vr-container">
            {/* vr amarelo */}
            <div
              className="vr amarelo"
              style={{ transform: "scale(0.89)", rotate: "269deg" }}
            ></div>
          </div>

          <div className="vr-container">
            <div
              className="vr amarelo"
              style={{ transform: "scale(0.82)", rotate: "20deg" }}
            ></div>
          </div>

          <div className="vr-container">
            <div
              className="vr amarelo"
              style={{ transform: "scale(0.91)", rotate: "98deg" }}
            ></div>
          </div>

          <div className="vr-container">
            <div
              className="vr amarelo"
              style={{ transform: "scale(0.88)", rotate: "321deg" }}
            ></div>
          </div>

          <div className="vr-container">
            <div
              className="vr amarelo"
              style={{ transform: "scale(0.96)", rotate: "108deg" }}
            ></div>
          </div>
        </div>

        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalContent
            w="30vw"
            h="10vw"
            display="flex"
            background="#A555F7"
            borderRadius="0.9em"
            zIndex={1}
            marginLeft={"22vw"}
            marginTop={"7vw"}
          >
            <div className="flex flex-col w-full p-3 justify-center text-center items-center space-y-2 text-white">
              <div>
                <div className="">flex-direction</div>
                <div className="flex space-x-2">
                  <div className="bg-zinc-500/100 rounded-md p-1 text-sm">
                    row
                  </div>
                  <div className="bg-zinc-500/100 rounded-md p-1 text-sm">
                    row-reverse
                  </div>
                  <div className="bg-zinc-500/100 rounded-md p-1 text-sm">
                    column
                  </div>
                  <div className="bg-zinc-500/100 rounded-md p-1 text-sm">
                    column-reverse
                  </div>
                </div>
              </div>

              <div>
                <div className="">flex-wrap</div>
                <div className="flex space-x-2">
                  <div className="bg-zinc-500/100 rounded-md p-1 text-sm">
                    no-wrap
                  </div>
                  <div className="bg-zinc-500/100 rounded-md p-1 text-sm">
                    wrap
                  </div>
                  <div className="bg-zinc-500/100 rounded-md p-1 text-sm">
                    wrap-reverse
                  </div>
                </div>
              </div>
            </div>
          </ModalContent>
        </Modal>
      </section>
    </div>
  );
}

export default Flexbox;
