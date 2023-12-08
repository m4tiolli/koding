import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function BotaoDesbloquear({ linguagem, capitulo, numeroaula }) {
  const navigate = useNavigate();
  const DesbloquarProximo = () => {
    if (numeroaula == 2) {
      const num = 0;
      const cap = capitulo + 1;
      const body = { linguagem, capitulo: cap, numeroaula: num };
      axios
        .put("https://tcckoding.azurewebsites.net/desbloquear", body)
        .then(
          toast.success("Aula finalizada!", {
            position: "bottom-right",
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
            navigate("/aulas", { state: { origem: "aulas" } });
          }, 3000)
        );
    } else {
      const num = numeroaula + 1;
      const body = { linguagem, capitulo, numeroaula: num };
      axios
        .put("https://tcckoding.azurewebsites.net/desbloquear", body)
        .then(
          toast.success("Aula finalizada!", {
            position: "bottom-right",
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
            navigate("/aulas", { state: { origem: "aulas" } });
          }, 3000)
        );
    }
  };

  return (
    <>
      <button
        onClick={DesbloquarProximo}
        className="bg-green-500 w-40 py-4 rounded-xl shadox-xl text-xl hover:opacity-70 active:translate-y-1 cursor-pointer"
      >
        Finalizar
      </button>
      <ToastContainer
        position="bottom-right"
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
    </>
  );
}

export default BotaoDesbloquear;
