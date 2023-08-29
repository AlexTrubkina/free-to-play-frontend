import { Dispatch } from "redux";
import {
    GAMES_ALL_FAIL,
    GAMES_ALL_REQUEST,
    GAMES_ALL_SUCCESS,
    GAMES_CATEGORY_FAIL,
    GAMES_CATEGORY_REQUEST,
    GAMES_CATEGORY_SUCCESS,
    ONE_GAME_FAIL,
    ONE_GAME_REQUEST,
    ONE_GAME_SUCCESS
} from "../constants/gamesConstants";

export const getOneGame = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: ONE_GAME_REQUEST,
        });

        const config = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        };

        const response = await fetch(
            `https://www.freetogame.com/api/game?id=${id}`,
            config
        );

        if (response.ok) {
            dispatch({
                type: ONE_GAME_SUCCESS,
                payload: response.json(),
            });
        }
        switch (response.status) {
            case 404:
                dispatch({
                    type: ONE_GAME_FAIL,
                    payload: "Игра не найдена",
                });
                break;
            case 500:
                dispatch({
                    type: ONE_GAME_FAIL,
                    payload: "Ошибка при запросе",
                });
                break;
        }
    } catch (error) {
        dispatch({
            type: ONE_GAME_FAIL,
            payload: error,
        });
    }
};

export const getAllGames = () => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: GAMES_ALL_REQUEST,
        });

        const config = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        };

        const response = await fetch(
            "https://www.freetogame.com/api/games",
            config
        );

        if (response.ok) {
            dispatch({
                type: GAMES_ALL_SUCCESS,
                payload: response.json(),
            });
        }
        switch (response.status) {
            case 404:
                dispatch({
                    type: GAMES_ALL_FAIL,
                    payload: "Игры не найдены",
                });
                break;
            case 500:
                dispatch({
                    type: GAMES_ALL_FAIL,
                    payload: "Ошибка при запросе",
                });
                break;
        }
    } catch (error) {
        dispatch({
            type: GAMES_ALL_FAIL,
            payload: error,
        });
    }
};

export const getGamesByCategory = (category : string) => async (dispatch: Dispatch) => {
    try {
        dispatch({
            type: GAMES_CATEGORY_REQUEST,
        });

        const config = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        };

        const response = await fetch(
            `https://www.freetogame.com/api/games?category=${category}`,
            config
        );

        if (response.ok) {
            dispatch({
                type: GAMES_CATEGORY_SUCCESS,
                payload: response.json(),
            });
        }
        switch (response.status) {
            case 404:
                dispatch({
                    type: GAMES_CATEGORY_FAIL,
                    payload: "Игры не найдены",
                });
                break;
            case 500:
                dispatch({
                    type: GAMES_CATEGORY_FAIL,
                    payload: "Ошибка при запросе",
                });
                break;
        }
    } catch (error) {
        dispatch({
            type: GAMES_CATEGORY_FAIL,
            payload: error,
        });
    }
};
