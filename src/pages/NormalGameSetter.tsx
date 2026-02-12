import { useLocation } from "react-router-dom";
import type { Parametres } from "../models/Parametres";
import type { ReactElement } from "react";
import Game from "./game";

export function NormalGameSetter(): ReactElement{
    const navigator = useLocation();
    const params: Parametres = navigator.state ?? {largeur: 3, hauteur: 3, nb: 3};

    return (
        <>
            <Game largeur={3} hauteur={3} nb={3} replay={params.replay}/>
        </>
    )
}

export default NormalGameSetter;
