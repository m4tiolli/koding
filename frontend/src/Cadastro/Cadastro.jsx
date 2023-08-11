import { useState } from "react";
import BackgroundCircles from './../assets/BackgroundCircles';
import Logo from './../assets/Logo';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from "react-router-dom";

function Cadastro() {
    const [isResponsavel, setIsResponsavel] = useState(false);
    const [isPassVisible, setPassVisible] = useState(false);

    const TogglePassVisible = () => {
        setPassVisible(!isPassVisible)
    }

    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [username, setUsername] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const Cadastrar = (e) => {
        e.preventDefault();
        if (isResponsavel) {
            if (nome === '' || cpf === '' || telefone === '' || email === '' || senha === '') {
                alert('Por favor, preencha todos os campos.');
                return;
            } else {
                const bodyresponsavel = { nome, cpf, telefone, email, senha };
                const bodycrianca = { nome, username, email, senha };
                const body = isResponsavel ? bodyresponsavel : bodycrianca;
                fetch(`http://localhost:3005/${isResponsavel ? "responsavel" : "crianca"}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                })
                    .then(() => {
                        alert('Usuário cadastrado com sucesso');
                    })
                    .catch((error) => {
                        console.log(error);
                        alert('Erro ao cadastrar usuário');
                    });
            }
        } else if (!isResponsavel && nome === '' || username === '' || email === '' || senha === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        } else {
            const bodyresponsavel = { nome, cpf, telefone, email, senha };
            const bodycrianca = { nome, username, email, senha };
            const body = isResponsavel ? bodyresponsavel : bodycrianca;
            fetch(`http://localhost:3005/${isResponsavel ? "responsavel" : "crianca"}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            })
                .then(() => {
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
            className="absolute w-full h-full z-20 flex items-start justify-start overflow-hidden"
            style={{
                backgroundImage: isResponsavel
                    ? "linear-gradient(108deg, #C6D6FF 0%, #FFF 100%)"
                    : "linear-gradient(108deg, #e5c6ff 0%, #fff 100%)",
            }}
        >
            <BackgroundCircles isResponsavel={isResponsavel} />
            <div className="z-20 h-full w-2/4 flex items-end justify-center flex-col relative">
                <div className="flex items-center justify-evenly flex-col h-full">
                    <div className="w-2/5 h-1/8 justify-evenly flex items-center">
                        <button
                            className={
                                `z-50 text-2xl font-bold text-cinza hover:opacity-80 active:translate-y-1 active:shadow-inner px-3 py2 rounded-2xl after:content-[' '] after:block after:w-4/5 after:h-[1px] after:m-auto ${!isResponsavel ? "after:bg-cinza" : "after:bg-transparent"}`
                            }
                            onClick={() => setIsResponsavel(false)}
                        >
                            Criança
                        </button>
                        <button
                            className={
                                `text-2xl font-bold text-cinza hover:opacity-80 active:translate-y-1 active:shadow-inner px-3 py2 rounded-2xl after:content-[' '] after:block after:w-4/5 after:h-[1px] after:m-auto ${isResponsavel ? "after:bg-cinza" : "after:bg-transparent"}`
                            }
                            onClick={() => setIsResponsavel(true)}
                        >
                            Responsável
                        </button>
                    </div>
                    <div className={`${isResponsavel ? "before:bg-verdeclaro bg-verde" : "before:bg-roxoclaro bg-roxo"} z-10 relative w-40vw h-4/5 rounded-2xl flex flex-col justify-between items-center before:block before:content-[' '] before:w-40vw before:h-full before:rotate-[-8deg] before:radius-x before:-z-20 before:shadow-lg shadow-lg before:rounded-2xl`}>
                        <h1 className="text-cinza font-bold text-4xl absolute top-6">Crie sua conta</h1>
                        <div className="flex flex-col items-center w-full absolute top-16">
                            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} className="bg-input px-10 py-3 w-3/4 placeholder:opacity-70 rounded-lg text-xl placeholder:text-black my-3 outline-0 text-cinza" placeholder="Nome" />
                            {isResponsavel ? (<>
                                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} className="bg-input px-10 py-3 w-3/4 placeholder:opacity-70 rounded-lg text-xl placeholder:text-black my-3 outline-0 text-cinza" placeholder="CPF" />
                                <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="bg-input px-10 py-3 w-3/4 placeholder:opacity-70 rounded-lg text-xl placeholder:text-black my-3 outline-0 text-cinza" placeholder="Telefone" />
                            </>
                            ) : (
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-input px-10 py-3 w-3/4 placeholder:opacity-70 rounded-lg text-xl placeholder:text-black my-3 outline-0 text-cinza" placeholder="Username" />)}
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-input px-10 py-3 w-3/4 placeholder:opacity-70 rounded-lg text-xl placeholder:text-black my-3 outline-0 text-cinza" placeholder="E-mail" />
                            <div className="bg-input px-10 py-3 w-3/4 my-3 placeholder:opacity-70 rounded-lg text-xl flex items-center justify-between">
                                <input type={isPassVisible ? "text" : "password"} className="w-4/5 outline-0 bg-transparent placeholder:opacity-70 placeholder:text-black text-cinza" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                                {isPassVisible ? <AiFillEyeInvisible className="text-2xl text-cinza cursor-pointer" onClick={TogglePassVisible} /> : <AiFillEye className="text-2xl text-cinza cursor-pointer" onClick={TogglePassVisible} />}
                            </div>
                            <div className="bg-input px-10 py-3 w-3/4 my-3 placeholder:opacity-70 rounded-lg text-xl flex items-center justify-between">
                                <input type={isPassVisible ? "text" : "password"} className="w-4/5 outline-0 bg-transparent placeholder:opacity-70 placeholder:text-black text-cinza" placeholder="Confirmar senha" />
                                {isPassVisible ? <AiFillEyeInvisible className="text-2xl text-cinza cursor-pointer" onClick={TogglePassVisible} /> : <AiFillEye className="text-2xl text-cinza cursor-pointer" onClick={TogglePassVisible} />}
                            </div>
                        </div>
                        <button className="bg-input rounded-xl w-2/5 h-16 absolute -bottom-3 my-8 text-xl text-cinza hover:opacity-70 active:shadow-inner active:translate-y-1" onClick={Cadastrar}>Cadastrar</button>
                    </div>
                </div>
            </div>
            <div className="logotitle z-20 h-full w-1/3 m-auto flex items-start justify-center gap-2 flex-col">
                <Logo isResponsavel={isResponsavel} />
                <p className={`text-7xl font-bold titleregister ${isResponsavel ? "bg-gradient1" : "bg-gradient2"}`}>Junte-se a nós e faça a diferença!</p>
                <div className="flex items-center my-3 text-cinza">
                    <BsArrowLeft className="text-xl font-bold mx-3" />
                    <p className="text-xl">Voltar ao <Link to={"/"} className={`${isResponsavel ? "linkresponsavel" : "linkcrianca"} cursor-pointer font-bold hover:opacity-70`}>Login</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
