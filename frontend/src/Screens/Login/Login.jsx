import { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import BackgroundCircles from "../../Components/BackgroundCircles";
import Logo from "../../Components/Logo";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [isResponsavel, setIsResponsavel] = useState(false);
  const [isPassVisible, setPassVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  const TogglePassVisible = () => {
    setPassVisible(!isPassVisible);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `http://localhost:3005/${isResponsavel ? "responsavel" : "crianca"}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, senha }),
        }
      );

      if (response.ok) {
        navigate("/");
      } else {
        const data = await response.json();
        setLoginError(data.error);
        toast.error(data.error, {
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
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };


  const [dark, setDark] = useState(false)
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true)
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false)
    }
  }, []);

  return (
    <div
      className={`absolute w-full h-screen z-20 overflow-hidden lg:flex lg:flex-row lg:items-center lg:justify-between ${isResponsavel ? 'bg-verdeclaro' : 'bg-roxoclaro'} ${dark && isResponsavel ? 'bg-[#173032]' : dark && !isResponsavel ? 'bg-[#2A0C42]' : !dark && isResponsavel ? 'bg-[#c4e1d5]' : 'bg-[#e1cbf4]'}`}
    >
      <BackgroundCircles isResponsavel={isResponsavel} />
      <div className="w-full h-1/4 lg:w-1/4">
        <div className="flex items-start text-start justify-center flex-col relative">
          <Logo
            isResponsavel={isResponsavel}
            isResponsive={false}
            className={"scale-[.60] lg:-ml-6 xl:scale-[.80] xl:ml-2"}
            isDark={dark}
          />

          <p className="text-3xl w-4/5 text-cinza dark:text-white font-bold pl-16 lg:text-6xl lg:w-96 xl:text-7xl lg:pl-10">
            Faça seu login
          </p>
        </div>
      </div>
      {loginError && (
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
      )}
      <div className="z-20 h-3/4 w-full lg:w-3/5 flex items-center justify-evenly flex-col relative">
        <div className="justify-center w-3/4 flex items-center">
          <button
            className={`text-2xl font-bold text-cinza dark:text-white hover:opacity-80 active:translate-y-1 active:shadow-inner px-3 py2 rounded-2xl after:content-[' '] after:block after:w-4/5 after:h-[1px] after:m-auto ${!isResponsavel ? "after:bg-cinza dark:after:bg-white" : "after:bg-transparent"
              }`}
            onClick={() => setIsResponsavel(false)}
          >
            Criança
          </button>
          <button
            className={`text-2xl font-bold text-cinza dark:text-white hover:opacity-80 active:translate-y-1 active:shadow-inner px-3 py2 rounded-2xl after:content-[' '] after:block after:w-4/5 after:h-[1px] after:m-auto ${isResponsavel ? "after:bg-cinza dark:after:bg-white" : "after:bg-transparent"
              }`}
            onClick={() => setIsResponsavel(true)}
          >
            Responsável
          </button>
        </div>
        <div
          className={`${isResponsavel && dark ? 'before:bg-[#21393B] bg-[#00224A]' : isResponsavel && !dark
            ? "before:bg-verdeclaro bg-verde"
            : !isResponsavel && !dark ? "before:bg-roxoclaro bg-roxo" : "bg-[#4A2766] before:bg-[#301545] "
            } z-10 relative w-5/6 xl:w-4/6 h-3/4 lg:h-5/6 rounded-2xl flex flex-col items-center justify-center before:block before:absolute before:top-0 before:content-[' '] before:w-full before:h-full before:rotate-[-8deg] before:radius-x before:-z-50 before:shadow-lg shadow-lg before:rounded-2xl`}
        >
          <input
            type="text"
            className="bg-input px-10 my-8 py-5 w-3/4 placeholder:opacity-70 rounded-lg text-xl placeholder:text-black outline-0 text-cinza"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="bg-input  px-10 py-5 w-3/4 placeholder:opacity-70 placeholder:font-regular rounded-lg text-xl flex items-center justify-between">
            <input
              type={isPassVisible ? "text" : "password"}
              className="w-4/5 outline-0 bg-transparent placeholder:opacity-70 placeholder:text-black text-cinza"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
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
          <button
            className={`rounded-xl font-regular uppercase shadow-md shadow-gray-400 w-2/5 h-16 my-8 text-xl text-white hover:opacity-70 active:shadow-inner active:translate-y-1 ${isResponsavel ? "bg-[#4259CF]" : "bg-[#7E1AD4]"}`}
            onClick={handleLogin}
          >
            Entrar
          </button>
          <p className="text-md md:text-xl font-semibold text-cinza">
            Não tem conta?
            <Link
              to={"/criar-conta"}
              className={`${isResponsavel ? "linkresponsavel" : "linkcrianca"
                } cursor-pointer font-bold hover:opacity-70`}
            >
              &nbsp;Registre-se
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
