import { useState } from "react";
import { Link } from "react-router-dom"
import './../styles/personnalisation.css'

export function Personnalisation(){

    const [joueur1, inverse] = useState('croix');
    const [largeur, changeLarg] = useState(3);
    const [hauteur, changeHaut] = useState(3);
    const [nb, changeNb] = useState(3);

    return (
        <>
        <Link to={'/choix'}><button className="retour">Retour</button></Link>
            <div className="infos">
                <h2>Joueur 1 : {joueur1 == 'croix' ? 'croix' : 'rond'}</h2>
                <button className="inverser" onClick={()=>inverse(joueur1 == 'croix' ? 'rond' : 'croix')}>Inverser</button>
                <h2>Joueur 2 : {joueur1 == 'croix' ? 'rond' : 'croix'}</h2>
            </div>
            <div className="personnalisation">
                <label>Hauteur :
                    <input type="number" id="hauteur" value={hauteur} disabled/>
                    <div className="boutons">
                        <button className="BtnPlus" onClick={()=>changeHaut(hauteur < 10 ? hauteur + 1 : hauteur)}>+</button>
                        <button className="btnMoins" onClick={()=>changeHaut(hauteur > 3 ? hauteur - 1 : hauteur)}>-</button>
                    </div>
                </label>

                <label>Largeur :
                    <input type="number" id="largeur" value={largeur} disabled/>
                    <div className="boutons">
                        <button className="BtnPlus" onClick={()=>changeLarg(largeur < 10 ? largeur + 1 : largeur)}>+</button>
                        <button className="btnMoins" onClick={()=>changeLarg(largeur > 3 ? largeur - 1 : largeur)}>-</button>
                    </div>
                </label>

                <label>Nombre de symboles à aligner :
                    <input type="number" id="nbSymboles" value={nb} disabled/>
                    <div className="boutons">
                        <button className="BtnPlus" onClick={()=>changeNb(nb < 10 ? nb + 1 : nb)}>+</button>
                        <button className="btnMoins" onClick={()=>changeNb(nb > 3 ? nb - 1 : nb)}>-</button>
                    </div>
                </label>
            </div>
            
                <Link to={'/game/personalised'} state={{largeur: largeur, hauteur: hauteur, nb: nb, premierJoueur: joueur1}}><button>Jouer</button></Link>
            
        </>
    )
}

export default Personnalisation;