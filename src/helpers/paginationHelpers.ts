import { OneGameType } from "../types/types";

export function getAllPaginationPages (allGames : OneGameType[]) {
    if (allGames) {
        return Math.ceil(allGames.length / 10)
    } else {
        return 0
    }
    
}

export function getGamesOnPage (allGames : OneGameType[], currentPage: number) {
    if (allGames) {
        const allGamesNum: number = +allGames.length
        return allGames.slice(allGamesNum  - (allGamesNum - (currentPage * 10 - 10)), allGamesNum - (allGamesNum - currentPage * 10));
    } else {
        return []
    }
}