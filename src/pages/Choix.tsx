import { Link } from "react-router-dom";
import './../styles/choix.css'

export function Choix(){
    return (
        <>
            <h1>Choix du mode de jeu</h1>
            <div className="choixMode">
                <Link to={'/'}><button>Retour</button></Link>
                <Link to={'/game/normal'}><button>Normal</button></Link>
                <Link to={'/choix/personnaliser'}><button>Personnalisé</button></Link>
            </div>
        </>
    )
}

export default Choix;