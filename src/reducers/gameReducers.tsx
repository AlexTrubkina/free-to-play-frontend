import {
    GAMES_ALL_FAIL,
    GAMES_ALL_REQUEST,
    GAMES_ALL_SUCCESS,
    GAMES_CATEGORY_FAIL,
    GAMES_CATEGORY_REQUEST,
    GAMES_CATEGORY_SUCCESS,
    ONE_GAME_FAIL,
    ONE_GAME_REQUEST,
    ONE_GAME_SUCCESS,
} from "../constants/gamesConstants";
import { AllGamesAction, OneGameAction } from "../types/types";

export const allGamesReducer = (
    state = { games: [] },
    action: AllGamesAction
) => {
    switch (action.type) {
        case GAMES_ALL_REQUEST:
            return { ...state, loading: true };

        case GAMES_ALL_SUCCESS:
            return { loading: false, codes: action.payload };

        case GAMES_ALL_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const oneGameReducer = (
    state = { game: {} },
    action: AllGamesAction
) => {
    switch (action.type) {
        case ONE_GAME_REQUEST:
            return { ...state, loading: true };

        case ONE_GAME_SUCCESS:
            return { loading: false, codes: action.payload };

        case ONE_GAME_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const categoryGamesReducer = (
    state = { games: [] },
    action: OneGameAction
) => {
    switch (action.type) {
        case GAMES_CATEGORY_REQUEST:
            return { ...state, loading: true };

        case GAMES_CATEGORY_SUCCESS:
            return { loading: false, codes: action.payload };

        case GAMES_CATEGORY_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
