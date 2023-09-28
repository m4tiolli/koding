import paragrafo from '../../assets/paragrafo.svg';

function Conteudo(){
    return(
        <div className="flex h-full w-full" style={{ background: "linear-gradient(108deg, #E5C6FF 0%, #E4EBFF 100%)" }}>

            <main className="w-full ml-52 mr-2 overflow-hidden dark:bg-darkcinzaclaro">

                <div className="flex flex-col ml-20 mt-24">
                    <span className="text-4xl font-semibold">Aula 00 - Estrutura HTML</span>

                    <div className="flex w-10/12 mt-10 mb-10 gap-x-10">
                        {/* Conteudo */}
                        <div className="">
                            
                            <div>
                                <h1 className="text-2xl font-semibold text-[#BB5E7E] mb-3">1. Introdução ao HTML</h1>
                                <span className="">Imagine que a web é como um livro gigante, e o HTML é a linguagem que usamos para escrever esse livro. Ele permite que você estruture o conteúdo de uma página da web de forma organizada para que os navegadores possam exibi-la corretamente.</span>
                            </div>
                            

                            <div className="flex flex-col w-10/12 mt-10 mb-10">
                                <div className='mb-5'>
                                    <h1 className="text-2xl font-semibold text-[#BB5E7E] mb-3">2. Tags HTML</h1>
                                    <span className="">As "tags" HTML são como os tijolos da web. Elas fornecem instruções para o navegador sobre como exibir o conteúdo. Uma tag HTML é composta por um nome entre colchetes angulares ("()"), por exemplo:</span>
                                </div>
                                <div className="mb-5">
                                    <img className='' src={paragrafo} alt="Descrição da imagem" />
                                </div>
                                    <span className=''>Neste exemplo, "(p)" é a tag de parágrafo.</span>
                            </div>

                            <div className="flex flex-col w-10/12 mt-10 mb-10">
                                <div className='mb-5'>
                                    <h1 className="text-2xl font-semibold text-[#BB5E7E] mb-3">3. Elementos HTML</h1>
                                    <span className="">Os elementos HTML são compostos por uma tag de abertura, conteúdo e uma tag de fechamento. O conteúdo é o que aparece na página da web. Vamos ver um exemplo com a tag de título:</span>
                                </div>
                                <div className="mb-5">
                                        <img className='' src={paragrafo} alt="Descrição da imagem" />
                                </div>
                            </div>
                            
                            <div className="flex flex-col w-10/12 mt-10 mb-10">
                                <div className='mb-5'>
                                    <h1 className="text-2xl font-semibold text-[#BB5E7E] mb-3">4. Estrutura básica de uma página HTML</h1>
                                    <span className="">Toda página da web começa com uma estrutura básica. Imagine isso como o esqueleto da página. Aqui está como se parece:</span>
                                </div>
                                <div className="mb-5">
                                        <img className='' src={paragrafo} alt="Descrição da imagem" />
                                </div>
                                <span className=''>
                                    (!DOCTYPE html): Declara o tipo de documento HTML. <br />
                                    (html): É o elemento raiz que contém todo o conteúdo da página. <br />
                                    (head): Contém metadados, como o título da página. <br />
                                    (title): Define o título da guia do navegador. <br />
                                    (body): Contém o conteúdo visível da página, como texto, imagens, etc.
                                </span>
                            </div>

                            <div className="flex flex-col w-10/12 mt-10 mb-10">
                                <div className='mb-5'>
                                    <h1 className="text-2xl font-semibold text-[#BB5E7E] mb-3">5. Atributos HTML</h1>
                                    <span className="">As tags HTML podem ter atributos que fornecem informações adicionais sobre a tag. Por exemplo, a tag de imagem (img) pode ter um atributo "src" para especificar o arquivo de imagem a ser exibido:</span>
                                </div>
                                <div className="">
                                        <img className='' src={paragrafo} alt="Descrição da imagem" />
                                </div>
                            </div>

                            <div className="flex flex-col w-10/12 mt-10 mb-10">
                                <div className='mb-5'>
                                    <h1 className="text-2xl font-semibold text-[#BB5E7E] mb-3">6. Aninhamento</h1>
                                    <span className="">As tags HTML podem ser aninhadas umas dentro das outras, criando uma hierarquia de elementos. Por exemplo:</span>
                                </div>
                                <div className="mb-5">
                                        <img className='' src={paragrafo} alt="Descrição da imagem" />
                                </div>
                                <span className=''>Neste exemplo, (ul) é uma lista não ordenada que contém dois itens de lista (li).</span>
                            </div>

                            <div className="flex flex-col w-10/12 mt-10 mb-10">
                                <div className='mb-5'>
                                    <h1 className="text-2xl font-semibold text-[#BB5E7E] mb-3">7. Exemplo completo</h1>
                                    <span className="">Vamos juntar tudo em um exemplo completo de página HTML:</span>
                                </div>
                                <div className="mb-5">
                                        <img className='' src={paragrafo} alt="Descrição da imagem" />
                                </div>
                            </div>
                        </div>

                        {/* Menu */}
                        <div className="flex w-64 h-32">
                                <div className='border-l-2 h-32 border-black/50'></div>
                                <div className='flex flex-col space-y-5 justify-center ml-5'>
                                    <div className='hover:bg-[#CE9FF5] rounded-md p-2 cursor-pointer'>O que é</div>
                                    <div className='hover:bg-[#E08A98] rounded-md p-2 cursor-pointer'>Propriedades</div>
                                    <div className='hover:bg-[#e4a079] rounded-md p-2 cursor-pointer'>Na prática</div>
                                </div>
                        </div>
                    </div>
                </div>

            </main>

        </div>
    )

}

export default Conteudo;