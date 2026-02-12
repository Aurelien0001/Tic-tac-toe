import type GameStats from "./GameStats";

export interface Parametres {
    largeur: number,
    hauteur: number,
    nb: number,
    premierJoueur?: string,
    replay?: {
        stats: GameStats,
        winner: string
    }
}