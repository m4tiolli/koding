import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";

export function SalvarJWT(jwtData) {
  const userData = jwt(jwtData);

  localStorage.setItem("jwt", jwtData);
  localStorage.setItem("userData", JSON.stringify(userData));
}

export function HeaderRequisicao() {
  const usuarioLogado = ChecarLoginUsuario();
  const navigate = useNavigate();

  if (usuarioLogado == false) {
    navigate("/login");
  }

  const token = localStorage.getItem("jwt");
  return new Headers({
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  });
}

export function ChecarLoginUsuario() {
  const token = localStorage.getItem("jwt");
  if (!token) {
    return false;
  }

  const userData = JSON.parse(localStorage.getItem("userData"));
  const actualDate = Date.parse(new Date()) / 1000;

  if (actualDate > userData.exp) {
    //usuario expirado
    localStorage.removeItem("jwt");
    return false;
  }

  return true;
}

export function DadosUsuario() {
  return JSON.parse(localStorage.getItem("userData"));
}
