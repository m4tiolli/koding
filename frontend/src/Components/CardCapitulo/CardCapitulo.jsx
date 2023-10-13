import { protanomaly, deuteranomaly, tritanomaly } from './../ColorBlind';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function CardCapitulo({ capituloId }) {
    const mode = localStorage.getItem("theme");
    const [aulas, setAulas] = useState([])
    const navigate = useNavigate()
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

    useEffect(() => {
        axios.get(`https://tcckoding.azurewebsites.net/aulas/${capituloId}`)
            .then((response) => {
                setAulas(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    });

    return (
        <div
            className={`w-72 h-52 rounded-xl`}
            style={{ background: `linear-gradient(108deg, ${Color(mode, '#E87331')} 0%, ${Color(mode, '#E88D59')} 100%)` }}
            onClick={() => navigate("/aulas", { state: { aulas: aulas } })}
        />
    )
}