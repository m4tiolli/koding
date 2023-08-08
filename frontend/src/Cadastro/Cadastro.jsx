import "./Cadastro.css";
import logo from "../assets/logo.png";
import elipse1 from "../assets/elipse1.png";
import elipse2 from "../assets/elipse2.png";
import elipse3 from "../assets/elipse3.png";
import logoa from "../assets/logoa.png";
import elipse1a from "../assets/elipse1a.png";
import elipse2a from "../assets/elipse2a.png";
import elipse3a from "../assets/elipse3a.png";
import { useState } from "react";

function Cadastro() {
    const [isResponsavel, setIsResponsavel] = useState(false);

    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [telefone, setTelefone] = useState(" ")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const Cadastrar = (e) => {
        e.preventDefault();

        if (nome === '' || cpf === '' || telefone === '' || email === '' || senha === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        } else {
            const body = { nome, cpf, telefone, email, senha };
            fetch('http://localhost:3005/responsavel', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
                .then((response) => {
                    alert('Usuário cadastrado com sucesso');
                })
                .catch((error) => {
                    console.log(error);
                    alert('Erro ao cadastrar usuário');
                });
        }
    };
    return (
        <div
            className="container"
            style={{
                backgroundImage: isResponsavel
                    ? "linear-gradient(108deg, #C6D6FF 0%, #FFF 100%)"
                    : "linear-gradient(108deg, #e5c6ff 0%, #fff 100%)",
            }}
        >
            <img
                className="svg topleft"
                src={isResponsavel ? elipse2a : elipse2}
                alt=""
            />
            <img
                className="svg botleft"
                src={isResponsavel ? elipse1a : elipse1}
                alt=""
            />
            <img
                className="svg botright"
                src={isResponsavel ? elipse3a : elipse3}
                alt=""
            />
            <div className="logotitle">
                <img src={isResponsavel ? logoa : logo} alt="" className="logo" />
                <p className="titlelogo">Junte-se a nós e faça a diferença!</p>
                <p className="sublink">
                    Voltar ao
                    <a
                        href=""
                        className={
                            isResponsavel ? "link linkresponsavel" : "link linkcrianca"
                        }
                    >
                        Login
                    </a>
                </p>
            </div>
            <div className="block">
                <div className="buttons">
                    <button
                        className={
                            isResponsavel ? "button btnresponsavel" : "button btncrianca"
                        }
                        onClick={() => setIsResponsavel(false)}
                    >
                        Criança
                    </button>
                    <button
                        className={
                            isResponsavel ? "button btnresponsavel" : "button btncrianca"
                        }
                        onClick={() => setIsResponsavel(true)}
                    >
                        Responsável
                    </button>
                </div>
                <div className={isResponsavel ? "form responsavel" : "form crianca"}>
                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="input" placeholder="Nome" />
                    <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} className="input" placeholder="CPF" />
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="E-mail" />
                    <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)} className="input" placeholder="Senha" />
                    <input type="text" className="input" placeholder="Confirmar senha" />

                    <button className="buttonform" onClick={Cadastrar}>Cadastrar</button>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
