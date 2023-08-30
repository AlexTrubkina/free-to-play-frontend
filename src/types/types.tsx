import store from "../store";

export type OneGameType = {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
    description: string;
};

export interface OneGameActionStart {
    type: string;
}

export interface OneGameActionFail {
    type: string;
    payload: string;
}

export interface OneGameActionSuccess {
    type: string;
    payload: OneGameType;
}

export interface GamesActionStart {
    type: string;
}

export interface GamesActionFail {
    type: string;
    payload: string;
}

export interface GamesActionSuccess {
    type: string;
    payload: OneGameType[];
}

export type GamesDispatch =
    | GamesActionStart
    | GamesActionFail
    | GamesActionSuccess;
export type OneGameDispatch =
    | OneGameActionStart
    | OneGameActionFail
    | OneGameActionSuccess;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

type NavLinkSubMenuItem = {
    link: string;
    page: string;
};

export type NavLinkType = {
    link: string;
    page: string;
    subMenu?: NavLinkSubMenuItem[];
}[];




