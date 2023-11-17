import { IoArrowBack } from "react-icons/io5";

import Menu from "../../Components/Menu/Menu";
import { useNavigate } from "react-router-dom";

import {
  protanomaly,
  tritanomaly,
  deuteranomaly,
} from "./../../Components/ColorBlind";

function Conteudo() {
  useEffect(() => {
    localStorage.nivel == "responsavel"
      ? navigate("/pais/home")
      : localStorage.nivel == "crianca"
      ? navigate("/home")
      : navigate("/");
  }, [navigate]);

  const navigate = useNavigate();

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

  return (
    <div
      className="flex h-full w-full"
      style={{
        background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)",
      }}
    >
      <Menu />

      <main className="w-full ml-52 overflow-hidden dark:bg-darkcinzaclaro dark:text-white">
        <IoArrowBack
          onClick={() => navigate(-1)}
          className="flex mt-28 ml-8 text-3xl cursor-pointer dark:text-white"
        />
        <div className="flex flex-col ml-20 mt-16">
          <span className="text-4xl font-semibold">
            Aula 00 - Estrutura HTML
          </span>

          <div className="flex w-10/12 mt-10 mb-10 gap-x-10">
            {/* Conteudo */}
            <div className="">
              <div>
                <h1
                  className="text-2xl font-semibold mb-3"
                  style={{ color: Color(mode, "#BB5E7E") }}
                >
                  1. Introdução ao HTML
                </h1>
                <span className="">
                  Imagine que a web é como um livro gigante, e o HTML é a
                  linguagem que usamos para escrever esse livro. Ele permite que
                  você estruture o conteúdo de uma página da web de forma
                  organizada para que os navegadores possam exibi-la
                  corretamente.
                </span>
              </div>

              <div className="flex flex-col w-10/12 mt-10 mb-10">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#BB5E7E") }}
                  >
                    2. Tags HTML
                  </h1>
                  <span className="">
                    As "tags" HTML são como os tijolos da web. Elas fornecem
                    instruções para o navegador sobre como exibir o conteúdo.
                    Uma tag HTML é composta por um nome entre colchetes
                    angulares "&lt;&gt;", por exemplo:
                  </span>
                </div>
                <div className="mb-5">
                  <div
                    className="relative h-16 pt-3 pl-10 pb-5 rounded-md text-md leading-6 text-gray-700"
                    style={{ background: Color(mode, "#CEC8D3") }}
                  >
                    <div
                      className="h-full text-right absolute top-0 left-0 text-white pt-3 pl-2 pr-2"
                      style={{ background: Color(mode, "#A692B8") }}
                    >
                      1 <br /> 2 <br />
                    </div>
                    <pre className="m-0">
                      <span className="">
                        &lt;p&gt;Isso é um parágrafo.&lt;/p&gt;
                      </span>
                    </pre>
                  </div>
                </div>
                <span className="">
                  Neste exemplo, "&lt;p&gt;" é a tag de parágrafo.
                </span>
              </div>

              <div className="flex flex-col w-10/12 mt-10 mb-10">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#BB5E7E") }}
                  >
                    3. Elementos HTML
                  </h1>
                  <span className="">
                    Os elementos HTML são compostos por uma tag de abertura,
                    conteúdo e uma tag de fechamento. O conteúdo é o que aparece
                    na página da web. Vamos ver um exemplo com a tag de título:
                  </span>
                </div>
                <div className="mb-5">
                  <div
                    className="relative h-16 pt-3 pl-10 pb-5 rounded-md text-md leading-6 text-gray-700"
                    style={{ background: Color(mode, "#CEC8D3") }}
                  >
                    <div
                      className="h-full text-right absolute top-0 left-0 text-white pt-3 pl-2 pr-2"
                      style={{ background: Color(mode, "#A692B8") }}
                    >
                      1 <br /> 2 <br />
                    </div>
                    <span className="">
                      &lt;h1&gt;Este é um título.&lt;/h1&gt;
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-10/12 mt-10 mb-10">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#BB5E7E") }}
                  >
                    4. Estrutura básica de uma página HTML
                  </h1>
                  <span className="">
                    Toda página da web começa com uma estrutura básica. Imagine
                    isso como o esqueleto da página. Aqui está como se parece:
                  </span>
                </div>
                <div className="mb-5">
                  <div className="mb-5">
                    <div
                      className="relative h-68 pt-3 pl-10 pb-5 rounded-md text-md leading-6 text-gray-700"
                      style={{ background: Color(mode, "#CEC8D3") }}
                    >
                      <div
                        className="h-full text-right absolute top-0 left-0 text-white pt-3 pl-2 pr-2"
                        style={{ background: Color(mode, "#A692B8") }}
                      >
                        1 <br /> 2 <br /> 3 <br /> 4 <br /> 5 <br /> 6 <br /> 7
                        <br /> 8 <br /> 9 <br /> 10
                      </div>
                      <pre>
                        &lt;!DOCTYPE html&gt; <br />
                        <span className="">
                          &lt;html&gt; <br />
                          &emsp;&lt;head&gt; <br />
                          &emsp;&ensp;&lt;title&gt;Minha Página&lt;/title&gt;{" "}
                          <br />
                          &emsp;&lt;/head&gt; <br />
                          &emsp;&lt;body&gt; <br />
                          &emsp;&ensp;&lt;h1&gt;Olá, Mundo!&lt;/h1&gt; <br />
                          &emsp;&ensp;&lt;p&gt;Bem-vindo à minha
                          página.&lt;/p&gt; <br />
                          &emsp;&lt;/body&gt; <br />
                          &lt;/html&gt;
                        </span>
                      </pre>
                    </div>
                  </div>
                </div>
                <span className="">
                  &lt;!DOCTYPE html&gt;: Declara o tipo de documento HTML.{" "}
                  <br />
                  &lt;html&gt;: É o elemento raiz que contém todo o conteúdo da
                  página. <br />
                  &lt;head&gt;: Contém metadados, como o título da página.{" "}
                  <br />
                  &lt;title&gt;: Define o título da guia do navegador. <br />
                  &lt;body&gt;: Contém o conteúdo visível da página, como texto,
                  imagens, etc.
                </span>
              </div>

              <div className="flex flex-col w-10/12 mt-10 mb-10">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#BB5E7E") }}
                  >
                    5. Atributos HTML
                  </h1>
                  <span className="">
                    As tags HTML podem ter atributos que fornecem informações
                    adicionais sobre a tag. Por exemplo, a tag de imagem
                    &lt;img&gt; pode ter um atributo "src" para especificar o
                    arquivo de imagem a ser exibido:
                  </span>
                </div>
                <div className="">
                  <div
                    className="relative h-16 pt-3 pl-10 pb-5 rounded-md text-md leading-6 text-gray-700"
                    style={{ background: Color(mode, "#CEC8D3") }}
                  >
                    <div
                      className="h-full text-right absolute top-0 left-0 text-white pt-3 pl-2 pr-2"
                      style={{ background: Color(mode, "#A692B8") }}
                    >
                      1 <br /> 2 <br />
                    </div>
                    <span className="">
                      &lt;img src="imagem.jpg" alt="Minha Imagem"&gt;
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-10/12 mt-10 mb-10">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#BB5E7E") }}
                  >
                    6. Aninhamento
                  </h1>
                  <span className="">
                    As tags HTML podem ser aninhadas umas dentro das outras,
                    criando uma hierarquia de elementos. Por exemplo:
                  </span>
                </div>
                <div className="mb-5">
                  <div
                    className="relative h-32 pt-3 pl-10 pb-5 rounded-md text-md leading-6 text-gray-700"
                    style={{ background: Color(mode, "#CEC8D3") }}
                  >
                    <div
                      className="h-full text-right absolute top-0 left-0 text-white pt-3 pl-2 pr-2"
                      style={{ background: Color(mode, "#A692B8") }}
                    >
                      1 <br /> 2 <br /> 3 <br /> 4 <br />
                    </div>
                    <span className="">
                      &lt;ul&gt; <br />
                      &lt;li&gt;tem 1&lt;/li&gt; <br />
                      &lt;li&gt;tem 2&lt;/li&gt; <br />
                      &lt;/ul&gt;
                    </span>
                  </div>
                </div>
                <span className="">
                  Neste exemplo, &lt;ul&gt; é uma lista não ordenada que contém
                  dois itens de lista &lt;li&gt;.
                </span>
              </div>

              <div className="flex flex-col w-10/12 mt-10 mb-10" id="div7">
                <div className="mb-5">
                  <h1
                    className="text-2xl font-semibold mb-3"
                    style={{ color: Color(mode, "#BB5E7E") }}
                  >
                    7. Exemplo completo
                  </h1>
                  <span className="">
                    Vamos juntar tudo em um exemplo completo de página HTML:
                  </span>
                </div>
                <div className="mb-5">
                  <div
                    className="relative h-96 pt-3 pl-10 pb-5 rounded-md text-md leading-6 text-gray-700"
                    style={{ background: Color(mode, "#CEC8D3") }}
                  >
                    <div
                      className="h-full text-right absolute top-0 left-0 text-white pt-3 pl-2 pr-2"
                      style={{ background: Color(mode, "#A692B8") }}
                    >
                      1 <br /> 2 <br /> 3 <br /> 4 <br /> 5 <br /> 6 <br /> 7
                      <br /> 8 <br /> 9 <br /> 10 <br /> 11 <br /> 12 <br /> 13
                      <br /> 14 <br /> 15
                    </div>
                    <pre>
                      &lt;!DOCTYPE html&gt; <br />
                      <span className="">
                        &lt;html&gt; <br />
                        &lt;head&gt; <br />
                        &lt;title&gt;Minha Página&lt;/title&gt; <br />
                        &lt;/head&gt; <br />
                        &lt;body&gt; <br />
                        &lt;h1&gt;Olá, Mundo!&lt;/h1&gt; <br />
                        &lt;p&gt;Bem-vindo à minha página.&lt;/p&gt; <br />
                        &lt;img src="imagem.jpg" alt="Minha Imagem"&gt; <br />
                        &lt;ul&gt; <br />
                        &lt;li&gt;tem 1&lt;/li&gt; <br />
                        &lt;li&gt;tem 2&lt;/li&gt; <br />
                        &lt;/ul&gt; &lt;/body&gt; <br />
                        &lt;/html&gt;
                      </span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="flex w-64 h-32">
              <div className="border-l-2 h-32 border-black/50 dark:border-white"></div>
              <div className="flex flex-col space-y-5 justify-center ml-5">
                <div className="hover:bg-[#CE9FF5] rounded-md p-2 cursor-pointer">
                  O que é
                </div>
                <div className="hover:bg-[#E08A98] rounded-md p-2 cursor-pointer">
                  Propriedades
                </div>
                <div className="hover:bg-[#e4a079] rounded-md p-2 cursor-pointer">
                  Na prática
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Conteudo;
