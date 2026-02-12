import type GameStats from "../models/GameStats"
import './../styles/statsTracking.css'
import Croix from './../assets/croix.svg'
import Rond from './../assets/rond.svg'

export function StatsTracking({stats}: {stats: GameStats}){
    /*if (stats.nbParties == 0){
        return (<></>)
    }
    else{*/
    console.log("stats : ")
    console.log(stats)
        return (<>
            <div className="champCroix">
                <img src={Croix} alt="croix" className="croix" />
                <p> : <span className="score">{stats.croix}</span></p>
            </div>
            <div className="champRonds">
                <img src={Rond} alt="rond" className="rond" />
                <p> : <span className="score">{stats.rond}</span></p>
            </div>
            <div className="champPartie">
                <p>nombre de parties : {stats.nbParties}</p>
            </div>
        </>)
    //}
}

export default StatsTracking