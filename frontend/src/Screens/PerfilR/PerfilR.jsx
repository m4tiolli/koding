import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import MenuR from "../../Components/MenuR/MenuR";
import Navbar from "../../Components/Navbar/Navbar";

import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../Components/ColorBlind";

function Perfil() {
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setResponsive(window.innerWidth < 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mode = localStorage.getItem("theme");

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

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  const handleSubmit = async () => {
    const id = JSON.parse(localStorage.user).id;
    const body = { nome, cpf, telefone, email, senha };
    try {
      const response = await axios.put(
        `http://localhost:3000/responsavel/${id}`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Usuário cadastrado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };

  return (
    <div
      className="flex min-h-screen w-full"
      style={{
        background: "linear-gradient(108deg, #C6D6FF 0%, #FFFFFF 100%)",
      }}
    >
      <MenuR />

      <main className="w-full h-full laptop:h-screen lg:flex lg:flex-col lg:ml-20 xl:gap-x-32 gap-x-16 overflow-hidden dark:text-white font-semibold dark:bg-darkfundoR">
      {responsive ? <Navbar /> : ""}
        
        <div className="mt-20 lg:mt-24 text-center">
          <span className="text-3xl font-semibold dark:text-white">
            Gerenciar Perfil - Criança
          </span>
        </div>

        {/* Dados */}

        <div className="flex flex-col md:flex-row md:gap-x-16 xl:flex-row xl:gap-x-32 laptop:flex-row laptop:gap-x-20 justify-center items-center md:mt-5 mt-20 mb-20">
          <container className="flex flex-col items-center justify-center w-72 h-96 md:-mt-36 lg:-mt-2 xl:mt-6 lg:ml-32 -mt-10 gap-y-5">
            <span className="xl:text-3xl text-2xl font-semibold dark:text-white">
              Dados
            </span>

            <div className="flex items-center justify-center xl:p-1 xl:w-60 w-56 rounded-lg text-left border-2 border-solid border-black leading-none hover:bg-white/50 dark:border-white">
              <div className="inline-flex items-center gap-5">
                <AiFillStar className="xl:text-5xl text-4xl"></AiFillStar>
                <div className="w-20 text-center flex flex-col items-center justify-center">
                  <span className="xl:text-3xl text-2xl">100</span>
                  <span className="xl:text-md text-sm text-black/75 dark:text-white">
                    Total XP
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center xl:p-1 xl:w-60 w-56 rounded-lg text-left border-2 border-solid border-black leading-none hover:bg-white/50 dark:border-white">
              <div className="inline-flex items-center gap-5">
                <AiFillHeart className="xl:text-5xl text-4xl"></AiFillHeart>
                <div className="w-20 text-center flex flex-col items-center justify-center">
                  <span className="xl:text-3xl text-2xl">5</span>
                  <span className="xl:text-md text-sm text-black/75 dark:text-white">
                    Vidas Restantes
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center xl:p-1 xl:w-60 w-56 rounded-lg text-left border-2 border-solid border-black leading-none hover:bg-white/50 dark:border-white">
              <div className="inline-flex items-center gap-5">
                <FaPencilAlt className="xl:text-4xl text-3xl"></FaPencilAlt>
                <div className="w-20 text-center flex flex-col items-center justify-center">
                  <span className="xl:text-3xl text-2xl">5</span>
                  <span className="xl:text-md text-sm text-black/75 dark:text-white">
                    Exercícios feitos
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center xl:p-1 xl:w-60 w-56 rounded-lg text-left border-2 border-solid border-black leading-none hover:bg-white/50 dark:border-white">
              <div className="inline-flex items-center gap-5">
                <FaPencilAlt className="xl:text-4xl text-3xl"></FaPencilAlt>
                <div className="w-20 text-center flex flex-col items-center justify-center">
                  <span className="xl:text-3xl text-2xl">2</span>
                  <span className="xl:text-md text-sm text-black/75 dark:text-white">
                    Linguagens aprendidas
                  </span>
                </div>
              </div>
            </div>
          </container>

          {/*Alterar Dados */}

          <div className="flex flex-col mt-10 items-center lg:text-left">
            <span className="flex justify-center xl:text-3xl lg:ml-16 text-2xl font-semibold dark:text-white">
              Alterar Dados
            </span>

            <div className="flex flex-col items-center lg:text-left -ml-10 lg:-ml-28 gap-y-7 lg:mt-10 mt-5">
              <div className="w-2/5 lg:w-[410px] flex flex-col lg:flex-row items-center text-center ml-3">
                <div className="w-full dark:text-white ml-5">
                  <span>Nome</span>
                </div>

                <label className="">
                  <input
                    className="ml-8 p-2 w-42 rounded-xl border-solid border-black outline-none shadow-lg"
                    style={{ background: "#efefef" }}
                    name="name"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </label>
              </div>

              <div className="w-2/5 lg:w-[410px] flex flex-col lg:flex-row items-center text-center ml-3">
                <div className="w-full dark:text-white ml-5">
                  <span>Username</span>
                </div>

                <label>
                  <input
                    className="ml-8 p-2 rounded-xl border-solid border-black outline-none shadow-lg"
                    style={{ background: "#efefef" }}
                    name="username"
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                </label>
              </div>

              <div className="w-2/5 lg:w-[410px] flex flex-col lg:flex-row items-center text-center ml-3">
                <div className="w-full dark:text-white ml-5">
                  <span>E-mail</span>
                </div>

                <label>
                  <input
                    className="ml-8 p-2 rounded-xl border-solid border-black outline-none shadow-lg"
                    style={{ background: "#efefef" }}
                    name="email"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </label>
              </div>

              <div className="w-2/5 lg:w-[410px] flex flex-col lg:flex-row items-center text-center ml-3">
                <div className="w-full dark:text-white ml-5">
                  <span>Senha</span>
                </div>

                <label>
                  <input
                    className="ml-8 p-2 rounded-xl border-solid border-black outline-none shadow-lg"
                    style={{ background: "#efefef" }}
                    name="password"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>

              <div className="w-2/5 lg:w-[410px] flex flex-col lg:flex-row items-center text-center ml-3 lg:mb-5">
                <div className="w-full dark:text-white ml-5">
                  <span>Confirmar senha</span>
                </div>

                <label>
                  <input
                    className="ml-8 p-2 rounded-xl border-solid border-black outline-none shadow-lg"
                    style={{ background: "#efefef" }}
                    name="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </label>
              </div>
            </div>

            <div className="w-2/5 lg:w-[410px] flex flex-col lg:flex-row justify-center items-center">
              <button
                className="w-auto h-12 lg:h-auto lg:p-2 p-5 mt-10 lg:mt-0 lg:ml-20 flex items-center rounded-xl shadow-lg text-white"
                style={{ background: Color(mode, "#22C55E") }}
                onClick={handleSubmit}
              >
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Perfil;
