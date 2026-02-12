import { useLocation } from "react-router-dom";
import type { Parametres } from "../models/Parametres";
import type { ReactElement } from "react";
import Game from "./game";
import type GameStats from "../models/GameStats";

export function GameSetter(): ReactElement{
    const navigator = useLocation();
    console.log(navigator.state.params)
    const params: Parametres = navigator.state ?? {largeur: 3, hauteur: 3, nb: 3};
    const largeur: number = params.largeur;
    const hauteur: number = params.hauteur;
    const nb: number = params.nb;
    const replay: {stats: GameStats, winner: string} | undefined = params.replay
    const premierJoueur: string = params.premierJoueur ?? 'croix';

    return (
        <>
            <Game largeur={largeur} hauteur={hauteur} nb={nb} replay={replay} premierJoueur={premierJoueur}/>
        </>
    )
}

export default GameSetter;