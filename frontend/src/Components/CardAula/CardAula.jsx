import { Link } from 'react-router-dom';
import { protanomaly, deuteranomaly ,tritanomaly } from './../ColorBlind';

// eslint-disable-next-line react/prop-types
export default function CardAula({ aula }) {
    const mode = localStorage.getItem("theme");

    function Color(mode, color) {
        var newcolor;
        if (mode === "protanomaly") {
            newcolor = protanomaly(color);
        } else if (mode === "deuteranomaly") {
            newcolor = deuteranomaly(color);
        } else if (mode === "tritanomaly") {
            newcolor = tritanomaly(color);
        } else newcolor = color;
        return newcolor;
    }

    console.log(aula)

    return (
        <div className="space-y-32">
            <div className="flex flex-col justify-center ml-10">
                <div className="flex space-x-16 items-center mb-10">
                    <Link to={"/conteudo"}>
                        <div className="space-y-5">
                            {/* Card */}
                            <div
                                className="w-80 h-52 rounded-xl"
                                style={{
                                    backgroundImage: `linear-gradient(10deg, ${Color(
                                        mode,
                                        "#E87331"
                                    )} 0%, ${Color(mode, "#E88D59")} 100%`,
                                }}
                            ></div>
                            <div className="flex flex-col">
                                <span className="w-80 flex items-center justify-start text-xl text-black font-semibold truncate dark:text-white">
                                    {aula.nome} - {aula.descricao}
                                </span>
                                {/* Filtro */}
                                <div className="w-80 flex flex-wrap gap-x-3 gap-y-3">
                                    <div
                                        className="w-16 p-1 rounded-xl"
                                        style={{
                                            backgroundImage: `linear-gradient(10deg, ${Color(
                                                mode,
                                                "#E87331"
                                            )} 0%, ${Color(mode, "#E88D59")} 100%`,
                                        }}
                                    >
                                        <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                                            HTML
                                        </span>
                                    </div>
                                    <div
                                        className="w-32 p-1 rounded-xl"
                                        style={{
                                            backgroundImage: `linear-gradient(10deg, ${Color(
                                                mode,
                                                "#E87331"
                                            )} 0%, ${Color(mode, "#E88D59")} 100%`,
                                        }}
                                    >
                                        <span className="flex w-auto items-center justify-center text-md text-black font-semibold truncate dark:text-white">
                                            Estrutura
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}