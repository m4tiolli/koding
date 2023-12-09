import { useState, useEffect } from "react";
import BackgroundCircles from "../../Components/BackgroundCircles";
import Logo from "../../Components/Logo";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function CadastroCrianca() {
  const [isPassVisible, setPassVisible] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [shake, setShake] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

  const TogglePassVisible = () => {
    setPassVisible(!isPassVisible);
  };

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [notSenhas, setNotSenhas] = useState(false);

  const [isResponsive, setResponsive] = useState();

  useEffect(() => {
    const handleResize = () => {
      setResponsive(window.innerWidth > 1279);
    };

    handleResize(); // Set initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Cadastrar = (e) => {
    if (invalid) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 1000);
      return;
    }
    e.preventDefault();
    if (emailExists) {
      return;
    }

    if (
      nome === "" ||
      username === "" ||
      email === "" ||
      senha === "" ||
      confirmarSenha === ""
    ) {
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
      return;
    } else if (senha !== confirmarSenha) {
      toast.error("As senhas não coincidem!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    } else {
      const local = JSON.parse(atob(localStorage.getItem("user")));
      const responsavel = local.id;
      const body = { nome, username, email, senha, responsavel };
      axios
        .post("https://tcckoding.azurewebsites.net/crianca", body)
        .then(() => {
          toast.success("Conta criada!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setTimeout(() => {
            navigate("/pais/selecionar");
          }, 3000);
        })
        .catch((error) => {
          console.log(error);
          alert("Erro ao cadastrar usuário");
        });
    }
  };

  const verificaEmail = async () => {
    try {
      const response = await fetch(
        `https://tcckoding.azurewebsites.net/email/${email}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.exists) {
          setEmailExists(true);
        } else {
          setEmailExists(false);
        }
      } else {
        console.log("Email ok!", response.status);
      }
    } catch (error) {
      console.error("Erro no servidor:", error);
    }
  };

  //aqui da pra adicionar verificacao melhor de senha
  const handleInput = (e) => {
    if (
      e.target.type === "password" &&
      e.target.value.length < 8 &&
      e.target.value.length > 0
    ) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  };
  const handleInvalid = () => {
    if (invalid) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 1000);
      return;
    }
  };
  const handleSenhas = () => {
    if (senha !== confirmarSenha) {
      setNotSenhas(true);
    } else {
      setNotSenhas(false);
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

  return (
    <div
      className={`${
        dark ? "bg-[#173032]" : "bg-[#c4e1d5]"
      } absolute w-full h-screen xl:h-full z-20 flex flex-col-reverse xl:flex-row xl:justify-between gap-4 items-start justify-start xl:overflow-hidden`}
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
      <BackgroundCircles isResponsavel={true} />
      <div className="z-20 h-full w-full flex items-end justify-center flex-col relative">
        <div className="flex items-center justify-evenly flex-col h-full w-full">
          <div
            className={`${
              dark
                ? "before:bg-[#21393B] bg-[#00224A]"
                : "before:bg-verdeclaro bg-verde"
            } z-10 relative w-4/5 md:w-3/5 rounded-2xl flex flex-col justify-center items-center gap-4 before:block before:content-[' '] before:w-full before:absolute before:top-0 before:h-full before:rotate-[-8deg] before:radius-x before:-z-20 before:shadow-lg shadow-lg before:rounded-2xl h-fit py-4`}
          >
            <h1 className="text-cinza dark:text-white font-bold text-2xl xl:text-3xl mt-3">
              Cadastre seu filho!
            </h1>
            <div className="flex flex-col gap-3 items-center w-full">
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="bg-input px-4 py-1 w-3/4 placeholder:opacity-70 rounded-lg text-lg placeholder:text-black my-1 outline-0 text-cinza"
                placeholder="Nome"
              />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-input px-4 py-1 w-3/4 placeholder:opacity-70 rounded-lg text-lg placeholder:text-black my-1 outline-0 text-cinza"
                placeholder="Username"
              />
              <input
                type="text"
                onBlur={verificaEmail}
                onInvalid={handleInvalid}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`${emailExists ? "bg-red-400" : "bg-input"} ${
                  shake ? "invalid" : ""
                } px-4 py-1 w-3/4 placeholder:opacity-70 rounded-lg text-lg placeholder:text-black my-1 outline-0 text-cinza relative`}
                placeholder="E-mail"
              />
              <p
                className={`${
                  emailExists ? "opacity-1" : "opacity-0"
                } w-3/4 font-medium text-xs text-red-600 h-0 absolute bottom-[18.5em]`}
              >
                *Este email já está em uso.
              </p>
              <div
                className={`${invalid ? "bg-red-400" : "bg-input"} ${
                  shake ? "invalid" : ""
                } relative px-4 py-1 w-3/4 my-1 placeholder:opacity-70 rounded-lg text-lg flex items-center justify-between`}
              >
                <input
                  type={isPassVisible ? "text" : "password"}
                  className="w-4/5 outline-0 bg-transparent placeholder:opacity-70 placeholder:text-black text-cinza"
                  placeholder="Senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  onBlur={handleInput}
                  onInvalid={handleInvalid}
                  minLength={8}
                />
                {isPassVisible ? (
                  <AiFillEyeInvisible
                    className="text-2xl text-cinza cursor-pointer"
                    onClick={TogglePassVisible}
                  />
                ) : (
                  <AiFillEye
                    className="text-2xl text-cinza cursor-pointer"
                    onClick={TogglePassVisible}
                  />
                )}
              </div>
              <p
                className={`${
                  invalid ? "opacity-1" : "opacity-0"
                } w-3/4 text-xs font-medium text-red-600 absolute bottom-[12.5em]`}
              >
                *Digite uma senha válida.
              </p>
              <div
                className={`${notSenhas ? "bg-red-400" : "bg-input"} ${
                  shake ? "invalid" : ""
                } px-4 py-1 w-3/4 my-1 placeholder:opacity-70 rounded-lg text-lg flex items-center justify-between`}
              >
                <input
                  type={isPassVisible ? "text" : "password"}
                  className="w-5/6 outline-0 bg-transparent placeholder:opacity-70 placeholder:text-black text-cinza"
                  placeholder="Confirmar senha"
                  onBlur={handleSenhas}
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                />
                {isPassVisible ? (
                  <AiFillEyeInvisible
                    className="text-2xl text-cinza cursor-pointer"
                    onClick={TogglePassVisible}
                  />
                ) : (
                  <AiFillEye
                    className="text-2xl text-cinza cursor-pointer"
                    onClick={TogglePassVisible}
                  />
                )}
              </div>
              <p
                className={`${
                  notSenhas ? "opacity-1" : "opacity-0"
                } w-3/4 text-xs font-medium text-red-600 absolute bottom-[8em]`}
              >
                *As senhas não coincidem.
              </p>
              <button
                className={`${
                  !dark ? "bg-[#4259CF]" : "bg-[#00224A]"
                }  dark:shadow-none rounded-lg shadow-md shadow-gray-400 w-3/5 h-12 my-4 text-xl text-white hover:opacity-70 active:shadow-inner active:translate-y-1`}
                onClick={Cadastrar}
              >
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="z-20 h-1/4 xl:h-fit w-full xl:w-2/3 m-auto flex items-start justify-center gap-0 flex-col">
        <Logo
          isResponsavel={true}
          isDark={dark}
          className={"scale-[.50] -ml-20 lg:-ml-6 xl:scale-[.60] "}
        />
        <p
          className={`text-2xl xl:text-6xl w-4/5 ml-4 xl:ml-0 font-bold text-cinza md:text-3xl ${
            isResponsive ? "titleregister bg-gradient1" : ""
          }`}
        >
          {isResponsive
            ? "Junte-se a nós e faça a diferença!"
            : "Faça seu cadastro"}
        </p>
      </div>
    </div>
  );
}

export default CadastroCrianca;
