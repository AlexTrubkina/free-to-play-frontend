import {createStore, combineReducers, applyMiddleware, AnyAction} from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {
    allGamesReducer,
    categoryGamesReducer
} from "./reducers/gameReducers";

const reducer = combineReducers({
    allGames: allGamesReducer,
    categoryGames: categoryGamesReducer, 
    
});

const initialState = {}

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware))
);

export default store;