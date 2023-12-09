import { useEffect, useState } from "react";
import BackgroundCircles from "../../Components/BackgroundCircles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsPlusCircle } from "react-icons/bs";
import { Spinner } from "@chakra-ui/react";
const classes = {
  one: "lg:scale-[.5] lg:-top-[7rem] lg:-left-[10rem]",
  two: "lg:scale-[.5] lg:-bottom-[6rem] lg:-left-[10rem]",
  three: "lg:scale-[.5] lg:-right-[6rem] lg:-bottom-[8rem]",
};
import "./SelectCrianca.css";
import boy1 from "../../assets/boy1.jpg";
import boy2 from "../../assets/boy2.jpg";
import boy3 from "../../assets/boy3.jpg";
import girl1 from "../../assets/girl1.jpg";
import girl2 from "../../assets/girl2.jpg";
import girl3 from "../../assets/girl3.jpg";


export default function SelectCrianca() {
  const navigate = useNavigate();

  const [criancas, setCriancas] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(atob(localStorage.user));
  const userId = parseInt(user.id);

  useEffect(() => {
    const storedCriancas = localStorage.getItem("criancas");
    if (storedCriancas && Array.isArray(storedCriancas)) {
      setCriancas(storedCriancas);
      setLoading(false);
    } else {
      axios
        .get(`https://tcckoding.azurewebsites.net/criancaR/${userId}`)
        .then((response) => setCriancas(response.data))
        .then(() => setLoading(false))
        .catch((err) => console.error(err));
    }
  }, []);
  return (
    <div className="w-screen h-screen grid place-items-center bg-[#c4f1d6] fixed">
      <BackgroundCircles isResponsavel={true} className={classes} />
      <div className="w-2/3 h-4/6 bg-[#efefef] shadow-xl rounded-2xl relative flex flex-col items-center justify-center">
        <h1 className="absolute top-6 text-3xl font-bold text-cinza">
          Selecione uma criança abaixo:
        </h1>
        <div className="w-[95%] h-fit flex justify-evenly items-center">
          {loading ? (
            <Spinner width={30} height={30} color="rgb(50,50,50)" />
          ) : (
            criancas.map((crianca, index) => {
              var img;
              switch (crianca.imagem) {
                case "boy1":
                  img = boy1;
                  break;
                case "boy2":
                  img = boy2;
                  break;
                case "boy3":
                  img = boy3;
                  break;
                case "girl1":
                  img = girl1;
                  break;
                case "girl2":
                  img = girl2;
                  break;
                default:
                  img = girl3;
                  break;
              }
              return (
                <Card crianca={crianca} img={img} key={index} />
              )
            })
          )}
          <button
            onClick={() => navigate("/pais/criar-conta")}
            className="flex flex-col gap-4 items-center justify-center hover:opacity-60 hover:cursor:pointer"
          >
            <span className="">
              <BsPlusCircle size={"4rem"} color="rgb(50,50,50)" />
            </span>
            <p className="text-cinza font-bold select-none">adicionar nova</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export function Card({ crianca, img }) {
  const navigate = useNavigate();
  const Navegar = (kid) => {
    console.log(kid);
    localStorage.setItem("dadosCrianca", btoa(JSON.stringify(kid)));
    navigate("/pais/home");
  };
  return (
    <button
      onClick={() => Navegar(crianca)}
      className="flex flex-col items-center justify-center gap-4 hover:opacity-70 netflix"
    >
      <img
        src={img}
        className="rounded-full w-[5rem] h-[5rem] lg:w-[10rem] lg:h-[10rem] object-cover"
        alt=""
      />
      <p className="font-regular text-xl text-slate-900">
        {crianca.NomeCrianca}
      </p>
    </button>
  );
}
