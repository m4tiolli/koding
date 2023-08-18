
function Materiais (){
    return(
        <div className="flex w-full overflow-x-hidden" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)"}}>


            {/* Menu */}
            <div className="h-screen w-full">

                <div className="">
                    <div className="h-20 w-screen drop-shadow-md" style={{background: "#EDD8FF"}}>
                        {/* <div className="flex flex- w-10 h-10 rounded-full bg-white"></div> */}
                    </div>
                    <div className="h-screen w-64 drop-shadow-lg "style={{background: "#EDD8FF"}}>
                        <ul className="flex-col ml-16 pt-32 space-y-16">
                            <li>Materiais</li>
                            <li>Perfil</li>
                            <li>Desafio</li>
                             <li>Mais</li>
                        </ul>
                    </div>

                     {/* Conteudo */}

                    {/* <div className='' style={{background: "#811CD7"}}>
                        <div className=''>p</div>
                        <div className=''>q</div>
                        <div className=''>r</div>
                        <div className=''>s</div>
                    </div> */}

                </div>

            </div>

          
        </div>
    )
}

export default Materiais;