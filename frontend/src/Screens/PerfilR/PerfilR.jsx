import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import MenuR from "../../Components/MenuR/MenuR";

import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../Components/ColorBlind";

function Perfil() {
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

  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [imagem, setImagem] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagem(file)
  };

  const handleSubmit = async () => {
    const id = JSON.parse(localStorage.user).id
    const body = { nome, cpf, telefone, email, senha, imagem }
    try {
      const response = await axios.put(`http://localhost:3000/responsavel/${id}`, body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Usuário cadastrado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <div
      className="flex h-full w-full"
      style={{
        background: "linear-gradient(108deg, #C6D6FF 0%, #FFFFFF 100%)",
      }}
    >
      <MenuR />

      <main className="w-full h-full laptop:h-screen xl:gap-x-32 gap-x-16 ml-[208px] mt-10 overflow-hidden dark:text-white font-semibold dark:bg-darkfundoR">
        <div className="mt-16 ml-10">
          <span className="text-3xl font-semibold dark:text-white">
            Gerenciar Perfil - Criança
          </span>
        </div>

        {/* Dados */}

        <div className="flex flex-col xl:flex-row xl:gap-x-32 laptop:flex-row laptop:gap-x-20 justify-center items-center -mt-10 mb-20">
          <container className="flex flex-col items-center justify-center w-72 h-96 xl:mt-40 mt-16 gap-y-5">
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

          <span className="flex justify-center xl:text-3xl text-2xl font-semibold dark:text-white">
            Alterar Dados
          </span>

          <div className="w-2/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
            <div className="w-full dark:text-white">
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

          <div className="w-2/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
            <div className="w-full dark:text-white">
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

          <div className="w-2/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
            <div className="w-full dark:text-white">
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

          <div className="w-2/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
            <div className="w-full dark:text-white">
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

          <div className="w-2/5 lg:w-[440px] flex flex-col lg:flex-row items-center">
            <div className="w-full dark:text-white">
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

            <label>
              <input
                className="ml-8 p-2 rounded-xl border-solid border-black outline-none shadow-lg"
                style={{ background: "#efefef" }}
                name="password"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <div className="flex items-center justify-center mt-12 mb-14 laptop:ml-[500px] xl:ml-[500px]">
            <button
              className="w-auto h-10 p-3 mt-5 lg:mt-0 flex items-center rounded-xl shadow-lg text-white"
              style={{ background: Color(mode, "#22C55E") }}
              onClick={handleSubmit}
            >
              Salvar Alterações
            </button>
          </div>
        </div>
      </main >
    </div >
  );
}

export default Perfil;
