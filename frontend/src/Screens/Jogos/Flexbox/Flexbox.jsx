import "../Flexbox/Flexbox.css"

function Flexbox(){
    return(
        <div className="flex h-full w-full" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}> 

        {/* Instruções */}

            <section className="w-3/6 p-16" >
                <h1 className="text-3xl uppercase font-semibold text-gray-600">Flexbox</h1>
                <p className="font-sans mb-5">
                    Ajude a alinhar 3 (três) colunas usando uma combinação de <span className="bg-orange-300/100 border-b-2 border-purple-500 border-solid">flex-direction</span> e <span className="bg-orange-300/100 border-b-2 border-purple-500 border-solid">flex-wrap</span>.
                </p>

                {/* Editor */}

                <div className="relative h-72 pt-5 pl-10 pb-5 rounded-md text-md leading-6 text-gray-700" style={{background: "#CEC8D3"}}>
                    <div className="h-full text-right absolute top-0 left-0 text-white pt-3 pl-2 pr-2" style={{background: "#A692B8"}}>
                        1 <br /> 2 <br /> 3 <br /> 4 <br /> 5 <br /> 6 <br /> 7 <br /> 8 <br /> 9 <br /> 10
                    </div>
                    <pre className="m-0">#lago ( <br /> 
                        <span className="ml-5">display: flex;</span>
                    </pre>
                    <textarea className="w-11/12 h-10 text ml-5 border-none outline-none resize-none overflow-auto"></textarea>
                    <pre className="m-0">)</pre>
                    <button className="border-none bg-pink-700 rounded-md text-white p-2 landing-6 absolute right-7 bottom-5">Próximo</button>
                </div>

            </section>

        {/* Jogo */}

            <section className="sec w-50vw h-screen overflow-hidden min-w-[380px] min-h-[380px]" style={{background: "#E79D67"}}>

            </section>

        </div>
    )
}

export default Flexbox;