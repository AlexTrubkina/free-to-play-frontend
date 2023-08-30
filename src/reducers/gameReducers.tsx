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
import {
    GamesActionFail,
    GamesActionSuccess,
    OneGameActionFail,
    OneGameActionSuccess,
} from "../types/types";

export const allGamesReducer = (
    state = { games: [] },
    action: GamesActionSuccess | GamesActionFail
) => {
    switch (action.type) {
        case GAMES_ALL_REQUEST:
            return { ...state, loading: true };

        case GAMES_ALL_SUCCESS:
            return { loading: false, games: action.payload };

        case GAMES_ALL_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const oneGameReducer = (
    state = { game: {} },
    action: GamesActionFail | GamesActionSuccess
) => {
    switch (action.type) {
        case ONE_GAME_REQUEST:
            return { ...state, loading: true };

        case ONE_GAME_SUCCESS:
            return { loading: false, game: action.payload };

        case ONE_GAME_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};

export const categoryGamesReducer = (
    state = { games: [] },
    action: OneGameActionFail | OneGameActionSuccess
) => {
    switch (action.type) {
        case GAMES_CATEGORY_REQUEST:
            return { ...state, loading: true };

        case GAMES_CATEGORY_SUCCESS:
            return { loading: false, games: action.payload };

        case GAMES_CATEGORY_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
