import { Link, useLocation } from "react-router-dom"
import type { Parametres } from "../models/Parametres";
import type { ReactElement } from "react";
import StatsTracking from "../components/StatsTracking";

export function Victoire(){
    const navigator = useLocation();
    const joueur: string = navigator.state.joueur;
    const params: Parametres = navigator.state.params;
    let rejouerLink: ReactElement = <></>
    let titre: ReactElement = <></>
    console.log("params :")
    console.log(params)
    if (joueur == 'croix' || joueur == 'rond'){
        titre = (
            <>
                <h1>Victoire des {joueur == 'croix' ? 'croix' : 'ronds'}</h1>

            </>
        )
    }
    else{
        titre = (
            <>
                <h1>Égalité</h1>
            </>
        )
    }
    if (params.hauteur === 3 && params.largeur === 3 && params.nb === 3){
        rejouerLink = (
            <>
                <Link to={'/game/normal'} state={
                    {largeur: null, 
                    hauteur: null, 
                    nb: null, 
                    replay: {
                        stats: params.replay != undefined ? params.replay.stats : {
                            croix: 0, 
                            rond: 0, 
                            nbParties: 0
                            }, 
                        winner: joueur
                        }
                    }
                }><button className="rejouer">Rejouer</button></Link>
            </>
        )
    }
    else {
        rejouerLink = (
            <>
                <Link to={'/game/personalised'} state={
                    {largeur: params.largeur, 
                    hauteur: params.hauteur, 
                    nb: params.nb, 
                    replay: {
                        stats: params.replay != undefined ? params.replay.stats : {
                            croix: 0, 
                            rond: 0, 
                            nbParties: 0
                            }, 
                        winner: joueur
                        }
                    }
                }>
                <button className="rejouer">Rejouer</button></Link>
            </>
        )
    }

    return (
        <>
            {titre}
            {rejouerLink}
            <Link to={'/'}><button>Partir</button></Link>
            <StatsTracking stats={params.replay!.stats!} />
        </>
    )
}