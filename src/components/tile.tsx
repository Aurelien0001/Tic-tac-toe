import { Component, type ReactElement } from "react"
import Croix from './../assets/croix.svg'
import Rond from './../assets/rond.svg'
import './../styles/tile.css'
import type { TileStatut } from "../models/Tile"
import type Game from "../pages/game"


export class Tile extends Component<{statut: TileStatut, joueur: string, partie: Game}>{
    symbole: ReactElement;
    tileState: TileStatut;
    partie: Game;
    constructor(props: {statut: TileStatut, joueur: string, partie: Game}){
        super(props)
        this.symbole = <></>
        this.tileState = props.statut
        this.partie = props.partie
    }

    render(){

        return (
            <>
                <div className="tile" onClick={()=>{
                    if (this.setSymbole()){
                        this.forceUpdate()
                        this.partie.clique(this.tileState.posHorizon,this.tileState.posHauteur)
                    }
                }}>
                    {this.symbole}
                </div>
            </>
        )
    }

    setSymbole(){
        if (this.tileState.state == ""){
            if (this.partie.joueurActuel == "croix"){
                this.symbole = (<>
                    <img src={Croix} alt="croix" className="svg croix" />
                </>)
            }
            else {
                this.symbole = (
                <>
                    <img src={Rond} alt="rond" className="svg rond" />
                </>)
            }
            this.tileState.state = this.partie.joueurActuel
            return true
        }
        return false
    }
}

export default Tile;