function RecuperarSenha() {

const fluxoDeTelas = [<Componente1 />, ]

return (
    <div>
        {fluxoDeTelas[0]}
    </div>
)
  
}

export default RecuperarSenha;

const Componente1 = () => {
    return (
        <div className="dark:bg-darkcinza bg-[#efefef] w-full h-screen p-40 relative flex flex-col justify-evenly items-center">
          <p className="text-cinza dark:text-white absolute top-8 text-2xl font-semibold">Recuperar senha</p>
    
          <p className="dark:text-white text-cinza text-xl font-regular">Digite seu e-mail abaixo:</p>
          <input type="text" className=" px-4 py-4 rounded-xl w-80 ring-2 outline-2 bg-white outline-none shadow-xl ring-transparent"/>
          <button className="bg-green-500 text-white w-40 py-4 rounded-xl shadow-xl">Avançar</button>
        </div>
      );
}