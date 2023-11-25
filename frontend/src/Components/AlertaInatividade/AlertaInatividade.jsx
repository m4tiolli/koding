import { useEffect, useState } from "react";
import som from "../../assets/beep.mp3";
import {
  ChakraProvider,
  Modal,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";

const AlertaInatividade = () => {
  const [exibirAlerta, setExibirAlerta] = useState(false);
  const [segundos, setSegundos] = useState(10);
  const [ultimoTempoInteragido, setUltimoTempoInteragido] = useState(
    new Date().getTime()
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleInteracao = () => {
      setUltimoTempoInteragido(new Date().getTime());
      setExibirAlerta(false);
      setSegundos(10);
    };

    const temporizadorInativo = setInterval(() => {
      const tempoAtual = new Date().getTime();
      const diferencaTempo = Math.floor(
        (tempoAtual - ultimoTempoInteragido) / 1000
      );
      const tempoRestante = 10 - diferencaTempo;

      if (tempoRestante <= 0) {
        setExibirAlerta(true);
        const audio = new Audio(som);
        audio.play();
        onOpen();
        clearInterval(temporizadorInativo);
      }
    }, 1000);

    window.addEventListener("mousemove", handleInteracao);
    window.addEventListener("scroll", handleInteracao);
    window.addEventListener("keydown", handleInteracao);

    return () => {
      window.removeEventListener("mousemove", handleInteracao);
      window.removeEventListener("scroll", handleInteracao);
      window.removeEventListener("keydown", handleInteracao);
    };
  }, [ultimoTempoInteragido]);

  useEffect(() => {
    const temporizadorAtivo = setInterval(() => {
      if (!exibirAlerta) {
        setSegundos((prevSegundos) => prevSegundos - 1);
      }
    }, 1000);

    return () => clearInterval(temporizadorAtivo);
  }, [exibirAlerta]);

  const resetarTempo = () => {
    setExibirAlerta(false);
    setSegundos(10);
    setUltimoTempoInteragido(new Date().getTime());
  };

  return (
    <ChakraProvider>
      <div className="fixed bottom-2 left-2 z-50 flex items-center justify-center flex-col">
        <p className="text-white">{`${Math.floor(segundos / 60)
          .toString()
          .padStart(2, "0")}:${(segundos % 60)
          .toString()
          .padStart(2, "0")}`}</p>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <p>aviso: você está inativo</p>
          <button onClick={onClose}>fechar</button>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default AlertaInatividade;
