import som from "../../assets/beep.mp3";
import {
  ChakraProvider,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Countdown from "react-countdown";
import { useState, useRef, useEffect } from "react";
import { LuAlertTriangle } from "react-icons/lu";

const AlertaInatividade = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const audio = useRef(new Audio(som));
  const [countdownKey, setCountdownKey] = useState(Date.now());
  const countdownRef = useRef(null);
  let timer;

  const handleUserActivity = () => {
    clearTimeout(timer);
    setCountdownKey(Date.now());
    timer = setTimeout(() => {
      audio.current.play();
      onOpen();
    }, 120000);
  };

  const handleVisibilityChange = () => {
    if (!document.hidden) {
      handleUserActivity();
    }
  };

  useEffect(() => {
    handleUserActivity();

    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(timer);
    };
  }, []);

  const Fechar = () => {
    onClose();
    handleUserActivity();
  };

  return (
    <ChakraProvider>
      <div className="fixed bottom-2 left-2 z-50 flex items-center justify-center flex-col">
        <p className="text-cinza dark:text-white">
          <Countdown
            key={countdownKey}
            date={Date.now() + 120000}
            autoStart={true}
            ref={countdownRef}
            renderer={renderer}
          />
          <Modal isOpen={isOpen} onClose={Fechar} motionPreset="scale">
            <ModalOverlay />
            <ModalContent
              borderRadius={1000}
              w={"fit-content"}
              h={"fit-content"}
              top={"20vh"}
            >
              <div className="bg-red-800 flex flex-col items-center justify-center rounded-2xl px-20 py-4 gap-4">
                <div className="text-center">
                  <LuAlertTriangle color="rgb(248, 113, 113)" size={100} />
                  <p className="text-white font-bold text-xl">Aviso</p>
                </div>
                <p className="text-white">Você está inativo.</p>
                <button
                  className="bg-white text-red-800 font-semibold w-2/3 h-10 rounded-lg hover:opacity-70"
                  onClick={Fechar}
                >
                  Fechar
                </button>
              </div>
            </ModalContent>
          </Modal>
        </p>
      </div>
    </ChakraProvider>
  );
};

const renderer = ({ minutes, seconds }) => {
  return (
    <span>{`${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`}</span>
  );
};

export default AlertaInatividade;
