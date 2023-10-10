import { Link } from 'react-router-dom';
import { protanomaly, deuteranomaly, tritanomaly } from './../ColorBlind';
export default function CardCapitulo() {
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

    return (
        <Link to={"/aulas"}>
            <div
                className={`w-72 h-52 rounded-xl`}
                style={{ background: `linear-gradient(108deg, ${Color(mode, '#E87331')} 0%, ${Color(mode, '#E88D59')} 100%)` }}
            />
        </Link>
    )
}