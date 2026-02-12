import { Component, type ReactElement } from "react";
import Tile from "../components/tile";
import './../styles/game.css';
import type { TileStatut } from "../models/Tile";
import { Link, Navigate } from "react-router-dom";
import type { Parametres } from "../models/Parametres";
import type { Action } from "../models/Action";
import type GameStats from "../models/GameStats";
import StatsTracking from "../components/StatsTracking";


export class Game extends Component<Parametres>{
    tabLarg: number[];
    tabStatuts: TileStatut[][]
    tabHaut: number[]
    joueurActuel: string
    nb:number
    estGagne: boolean
    historique: Action[]
    action?: Action
    stats?: GameStats
    constructor(props: Parametres){
        super(props);
        this.tabStatuts = [];
        this.tabLarg = []
        this.tabHaut = []
        this.joueurActuel = props.premierJoueur ?? "croix"
        this.nb = props.nb
        this.estGagne = false
        this.historique = []
        console.log("replay :")
        console.log(props.replay)
        if (props.replay == undefined){
            this.stats = {croix: 0, rond: 0, nbParties: 0}
        }
        else{
            this.stats = props.replay.stats;
        }
        
        for (let i:number = 0; i < props.largeur; i++){
            this.tabLarg.push(i);
        }
        for (let i:number = 0; i < props.hauteur; i++){
            this.tabHaut.push(i);
        }
        for (let i: number = 0; i< props.largeur; i++){
            this.tabStatuts.push([])
            for (let j: number = 0 ; j < props.hauteur; j++){
                this.tabStatuts[i].push({posHorizon: i, posHauteur: j, state: ''})
            }
        }
    }

    componentDidMount(): void {
        this.updateCssVar();
    }

    componentDidUpdate(): void {
        this.updateCssVar();
    }

    updateCssVar(): void{
        const nbCol: number = this.tabLarg.length;
        const nbLignes: number = this.tabHaut.length;
        document.documentElement.style.setProperty("--nb-col", `${nbCol}`);
        document.documentElement.style.setProperty("--nb-ligne", `${nbLignes}`);
    }

    render ():ReactElement{
        return (
            <>
                {this.estGagne ? (<><Navigate to={'/victoire'} replace={true} state={
                    {joueur: this.joueurActuel, 
                    params: {
                        largeur: this.props.largeur, 
                        hauteur: this.props.hauteur, 
                        nb: this.nb, 
                        replay: {
                            stats: this.stats, 
                            winner: this.joueurActuel
                            }
                        }
                    }} /></>): (<></>)}
                
                <Link to={'/choix'}><button className="retour">Sortir</button></Link>
                
                <h1>Tour des {this.joueurActuel == 'croix' ? 'croix' : 'ronds'}</h1>
                <div className="affichage-partie">
                    <div className="historique">
                        <button className={'histo-direction'} disabled={this.historique.length == 0 ? true : false} onClick={()=>this.modifAction(1)}> &lt; </button>
                        <p>{this.makeAction(this.action)}</p>
                        <button className={'histo-direction'} disabled={this.historique.length == 0 ? true : false} onClick={()=> this.modifAction(-1)}> &gt; </button>
                    </div>
                    <table>
                        <tbody>
                            {this.tabHaut.map((h)=>(
                                <tr key={h}>
                                    {this.tabLarg.map((l) =>(
                                        <td key={l} >
                                            <Tile statut={this.tabStatuts[l][h]} joueur={this.joueurActuel} partie={this}/>
                                        </td>
                                    )
                                    )}
                                </tr>
                            )
                            )}
                        </tbody>
                    </table>
                    <div className="statsTracking">
                        <StatsTracking stats={this.stats!} />    
                    </div>
                </div>
                
            </>
        )
    }

    gameStatsMaj(joueur: string): void{
        if (this.stats == undefined){
            this.stats = {croix: 0, rond: 0, nbParties: 0}
        }
        if (joueur == 'croix'){
            this.stats.croix++;
        }
        else if(joueur == 'rond'){
            this.stats.rond++;
        }
        this.stats.nbParties++;
    }

    modifAction(nb: number): void{
        if (this.action == undefined){
            return
        }
        const index = this.action.numero-1;
        if (index+nb >= 0 && index+nb < this.historique.length ){
            this.action = this.historique[index+nb]
        }
        this.forceUpdate()
    }

    gagne(l:number, h:number): void{
        let compteurHorizon = 1;
        let compteurDiagPos = 1;
        let compteurDiagNeg = 1;
        let compteurHaut = 1;
        let gauche = true;
        let droite = true;
        let haut = true;
        let bas = true;
        let hautD = true;
        let basG = true;
        let hautG = true;
        let basD = true;
        for(let i:number = 1; i < this.nb; i++){
            //on compte le nombre de de points sur la largeur
            if (gauche && l-i >= 0 && this.tabStatuts[l-i][h].state == this.joueurActuel){
                compteurHorizon += 1
            }
            else if(gauche && l-i >= 0 && this.tabStatuts[l-i][h].state != this.joueurActuel){
                gauche = false
            }
            if (droite && l+i < this.tabLarg.length && this.tabStatuts[l+i][h].state == this.joueurActuel){
                compteurHorizon += 1
            }
            else if(droite && l+i < this.tabLarg.length && this.tabStatuts[l+i][h].state != this.joueurActuel){
                droite = false
            }

            //on compte le nombre de point sur la hauteur
            if (haut && h-i >= 0 && this.tabStatuts[l][h-i].state == this.joueurActuel){
                compteurHaut += 1
            }
            else if(haut && h-i >= 0 && this.tabStatuts[l][h-i].state != this.joueurActuel){
                haut = false
            }
            if (bas && h+i < this.tabHaut.length && this.tabStatuts[l][h+i].state == this.joueurActuel){
                compteurHaut += 1
            }
            else if(bas && h+i < this.tabHaut.length && this.tabStatuts[l][h+i].state != this.joueurActuel){
                bas = false
            }

            //on compte le nombre de points sur la diagonale positive (dans le sens où elle ressemble à une fonction affine croissante)
            if (hautD && l+i < this.tabLarg.length && h-i >=0 && this.tabStatuts[l+i][h-i].state == this.joueurActuel){
                compteurDiagPos += 1
            }
            else if(hautD && l+i < this.tabLarg.length && h-i >=0 &&  this.tabStatuts[l+i][h-i].state != this.joueurActuel){
                hautD = false
            }
            if (basG && l-i >= 0 && h+i < this.tabHaut.length && this.tabStatuts[l-i][h+i].state == this.joueurActuel){
                compteurDiagPos += 1
            }
            else if(basG && l-i >= 0 && h+i < this.tabHaut.length && this.tabStatuts[l-i][h+i].state != this.joueurActuel){
                basG = false
            }

            //on compte le nombre de points sur la diagonale négative (avec le même résonnement)
            if (hautG && l-i >= 0 && h-i >= 0 && this.tabStatuts[l-i][h-i].state == this.joueurActuel){
                compteurDiagNeg += 1
            }
            else if(hautG && l-i >= 0 && h-i >= 0 &&  this.tabStatuts[l-i][h-i].state != this.joueurActuel){
                hautG = false
            }
            if (basD && l+i < this.tabLarg.length && h+i < this.tabHaut.length && this.tabStatuts[l+i][h+i].state == this.joueurActuel){
                compteurDiagNeg += 1
            }
            else if(basD && l+i < this.tabLarg.length && h+i < this.tabHaut.length && this.tabStatuts[l+i][h+i].state != this.joueurActuel){
                basD = false
            }
        }
        if (compteurDiagNeg >= this.nb || compteurDiagPos >= this.nb || compteurHaut >= this.nb || compteurHorizon >= this.nb){
            this.estGagne = true
            this.gameStatsMaj(this.joueurActuel)
        }
    }

    egalite(): boolean{
        for (const ligne of this.tabStatuts){
            for (const cell of ligne){
                if (cell.state !== "croix" && cell.state !== "rond"){
                    return false
                }
            }
        }
        return true
    }

    clique(l:number, h:number): void{
        this.tabStatuts[l][h].state = this.joueurActuel
        this.gagne(l,h)
        if (!this.estGagne){
            const nouvAction: Action = {x: l, y: this.props.hauteur-h-1, joueur: this.joueurActuel, numero: this.historique.length+1}
            this.historique.push(nouvAction)
            this.action= nouvAction
            this.joueurActuel = this.joueurActuel === "croix" ? "rond" : "croix"
        }
        if (!this.estGagne && this.egalite()){
            this.estGagne = true;
            this.joueurActuel = ""
        }

        this.forceUpdate()
    }

    makeAction(action: Action|undefined): string{
        if (action != undefined){
            return `${action.numero} - ${action.joueur} a joué à la position(${action.x},${action.y})`;
        }
        else{
            return `${this.joueurActuel} commence`
        }   
        
    }
}


export default Game;