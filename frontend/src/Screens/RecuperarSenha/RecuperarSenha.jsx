import { IoArrowBack, IoMailUnreadOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import BackgroundCircles from "../../Components/BackgroundCircles";

const RecuperarSenha = ({ length = 6 }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState(Array(length).fill(""));
  const inputRefs = Array(length)
    .fill()
    .map((_, i) => useRef(null));

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length <= 1 && !isNaN(value)) {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      if (value && inputRefs[index + 1]) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain").slice(0, length);
    const newValues = pasteData
      .split("")
      .map((char) => (isNaN(char) ? "" : char));
    setValues(newValues);
  };

  const getCode = () => {
    const code = values.slice(0, length).join("").padEnd(length, "0");
    return parseInt(code, 10);
  };

  const [email, setEmail] = useState("");
  const [valorFluxo, setValorFluxo] = useState(0);

  const [isPassVisible, setPassVisible] = useState(false);
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  const [nivel, setNivel] = useState("");

  const TogglePassVisible = () => {
    setPassVisible(!isPassVisible);
  };

  const fluxoDeTelas = [
    <Componente1
      navigate={navigate}
      setValorFluxo={setValorFluxo}
      valorFluxo={valorFluxo}
      email={email}
      setEmail={setEmail}
      key={1}
    />,
    <Componente2
      navigate={navigate}
      inputRefs={inputRefs}
      handleChange={handleChange}
      handlePaste={handlePaste}
      setValorFluxo={setValorFluxo}
      valorFluxo={valorFluxo}
      values={values}
      email={email}
      getCode={getCode}
      key={2}
      nivel={nivel}
      setNivel={setNivel}
    />,
    <Componente3
      navigate={navigate}
      isPassVisible={isPassVisible}
      senha={senha}
      setSenha={setSenha}
      TogglePassVisible={TogglePassVisible}
      confirmSenha={confirmSenha}
      setConfirmSenha={setConfirmSenha}
      setValorFluxo={setValorFluxo}
      valorFluxo={valorFluxo}
      email={email}
      key={3}
      nivel={nivel}
    />,
  ];

  return fluxoDeTelas[valorFluxo];
};

export default RecuperarSenha;

const Componente1 = ({
  navigate,
  valorFluxo,
  setValorFluxo,
  email,
  setEmail,
}) => {
  return (
    <div
      className="dark:bg-darkcinza bg-[#efefef] w-full h-screen p-40 relative flex flex-col justify-evenly items-center overflow-hidden "
      style={{
        background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
      }} 
      >
      <BackgroundCircles />
      <div className="flex absolute top-8 gap-6">
        <IoArrowBack
          className="text-3xl cursor-pointer text-cinza dark:text-white"
          onClick={() => navigate(-1)}
        />
        <p className="text-cinza dark:text-white text-2xl font-semibold">
          Recuperar senha
        </p>
      </div>

      <p className="dark:text-white text-cinza text-xl font-regular">
        Digite seu e-mail abaixo:
      </p>
      <input
        type="text"
        className=" px-4 py-4 rounded-xl w-[24rem] ring-2 outline-2 bg-white outline-none shadow-xl ring-transparent"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={() => {
          setValorFluxo(valorFluxo + 1);
        }}
        className="bg-green-500 text-white w-40 py-4 rounded-xl shadow-xl"
      >
        Avançar
      </button>
    </div>
  );
};

const Componente2 = ({
  navigate,
  values,
  inputRefs,
  handleChange,
  handlePaste,
  setValorFluxo,
  valorFluxo,
  email,
  nivel,
  setNivel,
}) => {
  const [randomNumber, setRandomNumber] = useState("");

  useEffect(() => {
    const min = 100000;
    const max = 999999;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(num.toString());
    const body = { email, codigo: num.toString() };
    axios
      .post("https://tcckoding.azurewebsites.net/redefinir/", body)
      .then((response) => setNivel(response.data))
      .catch((err) => console.error(err));
  }, []);

  const Verificar = () => {
    const filledValues = values.filter((value) => value !== "");

    if (filledValues.length === 6) {
      const code = parseInt(filledValues.join(""), 10);
      if (code == randomNumber) {
        setValorFluxo(valorFluxo + 1);
      } else {
        toast.error("Código inválido!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } else {
      toast.error("Preencha todos os campos!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="dark:bg-darkcinza bg-[#efefef] w-full h-screen p-40 relative flex flex-col justify-evenly items-center">
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
      <div className="flex absolute top-8 gap-6">
        <IoArrowBack
          className="text-3xl cursor-pointer text-cinza dark:text-white"
          onClick={() => setValorFluxo(valorFluxo - 1)}
        />
        <p className="text-cinza dark:text-white text-2xl font-semibold">
          Recuperar senha
        </p>
      </div>
      <div className="flex flex-col items-center mb-8 -mt-8">
        <IoMailUnreadOutline className="text-cinza dark:text-white text-[6rem]" />
        <p className="text-cinza dark:text-white">
          Caso o e-mail exista, verifique sua caixa de entrada.
        </p>
      </div>
      <p className="text-cinza dark:text-white">Digite o código abaixo:</p>
      <div>
        {values.map((value, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(e, index)}
            onPaste={handlePaste}
            className="w-14 h-14 text-2xl mx-2 my-8 text-center rounded-md shadow-xl text-cinza bg-white dark:text-white dark:bg-darkcinzaclaro"
          />
        ))}
      </div>
      <button
        onClick={Verificar}
        className="bg-green-500 text-white w-40 py-4 rounded-xl shadow-xl"
      >
        Confirmar
      </button>
      <p className="italic dark:text-white text-cinza my-4">
        Email errado?{" "}
        <span
          onClick={() => setValorFluxo(valorFluxo - 1)}
          className="text-blue-800 dark:text-blue-400 underline cursor-pointer"
        >
          Voltar
        </span>
      </p>
    </div>
  );
};

const Componente3 = ({
  navigate,
  isPassVisible,
  senha,
  setSenha,
  TogglePassVisible,
  confirmSenha,
  setConfirmSenha,
  setValorFluxo,
  valorFluxo,
  email,
  nivel,
}) => {
  const Alterar = () => {
    const body = { senha };
    axios
      .put(
        `https://tcckoding.azurewebsites.net/redefinir/${nivel}/${email}`,
        body
      )
      .then(
        toast.success("Senha alterada!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      )
      .then(
        setTimeout(() => {
          navigate("/login");
        }, 4000)
      )
      .catch((err) => console.error(err));
  };

  return (
    <div className="dark:bg-darkcinza bg-[#efefef] w-full h-screen p-40 relative flex flex-col justify-evenly items-center">
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
      <div className="flex absolute top-8 gap-6">
        <IoArrowBack
          className="text-3xl cursor-pointer text-cinza dark:text-white"
          onClick={() => setValorFluxo(valorFluxo - 1)}
        />
        <p className="text-cinza dark:text-white text-2xl font-semibold">
          Criar nova senha
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="dark:text-white text-cinza text-xl font-regular">
          Digite uma nova senha abaixo:
        </p>
        <div
          className={`px-10 py-5 w-[24rem] placeholder:opacity-70 placeholder:font-regular rounded-lg text-xl flex items-center justify-between bg-white dark:bg-darkcinzaclaro shadow-xl`}
        >
          <input
            type={isPassVisible ? "text" : "password"}
            className="w-4/5 outline-0 bg-transparent placeholder:opacity-70 placeholder:text-cinza dark:placeholder:text-white text-cinza dark:text-white"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {isPassVisible ? (
            <AiFillEyeInvisible
              className="text-2xl text-cinza dark:text-white cursor-pointer"
              onClick={TogglePassVisible}
            />
          ) : (
            <AiFillEye
              className="text-2xl text-cinza dark:text-white cursor-pointer"
              onClick={TogglePassVisible}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 my-4">
        <p className="dark:text-white text-cinza text-xl font-regular">
          Confirme a senha:
        </p>
        <div
          className={`px-10 py-5 w-[24rem] placeholder:opacity-70 placeholder:font-regular rounded-lg text-xl flex items-center justify-between bg-white dark:bg-darkcinzaclaro shadow-xl`}
        >
          <input
            type={isPassVisible ? "text" : "password"}
            className="w-4/5 outline-0 bg-transparent placeholder:opacity-70 placeholder:text-cinza dark:placeholder:text-white text-cinza dark:text-white"
            placeholder="Senha"
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
          />
          {isPassVisible ? (
            <AiFillEyeInvisible
              className="text-2xl text-cinza dark:text-white cursor-pointer"
              onClick={TogglePassVisible}
            />
          ) : (
            <AiFillEye
              className="text-2xl text-cinza dark:text-white cursor-pointer"
              onClick={TogglePassVisible}
            />
          )}
        </div>
      </div>
      <button
        onClick={Alterar}
        className="bg-green-500 text-white w-40 py-4 my-4 rounded-xl shadow-xl"
      >
        Confirmar
      </button>
    </div>
  );
};
