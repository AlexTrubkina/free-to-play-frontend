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
import { GamesDispatch, OneGameDispatch } from "../types/types";

export const getOneGame = (id: number) => async (dispatch: Dispatch<OneGameDispatch>) => {
    try {
        dispatch({
            type: ONE_GAME_REQUEST,
            payload: ""
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
            payload: "Что-то пошло не так! Попробуйте позже",
        });
    }
};

export const getAllGames = () => async (dispatch: Dispatch<GamesDispatch>) => {
    try {
        dispatch({
            type: GAMES_ALL_REQUEST,
            payload: []
        });

        const config = {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                'X-RapidAPI-Key': '47e6d7d9f0mshb9dac613d61c3aep19bee8jsn3840813c2e1f',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            },
        };

        const response = await fetch(
            "https://free-to-play-games-database.p.rapidapi.com/api/games",
            config
        );

        if (response.ok) {
            const data = await response.json()
            dispatch({
                type: GAMES_ALL_SUCCESS,
                payload: data,
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
            case 403:
                dispatch({
                    type: GAMES_ALL_FAIL,
                    payload: "Ошибка при запросе",
                });
                break; 
    }
    } catch (error) {
        dispatch({
            type: GAMES_ALL_FAIL,
            payload: "Что-то пошло не так! Попробуйте позже",
        });
    }
};

export const getGamesByCategory = (category : string) => async (dispatch: Dispatch<GamesDispatch>) => {
    try {
        dispatch({
            type: GAMES_CATEGORY_REQUEST,
            payload: []
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
            default:
                dispatch({
                    type: GAMES_CATEGORY_FAIL,
                    payload: "Ошибка при запросе",
                });
                break; 
        }
    } catch (error) {
        dispatch({
            type: GAMES_CATEGORY_FAIL,
            payload: "Что-то пошло не так! Попробуйте позже",
        });
    }
};
