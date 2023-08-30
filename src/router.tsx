import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import GamesScreen from "./screens/GamesScreen/GamesScreen";
import GamesCategoryScreen from "./screens/GamesCategoryScreen/GamesCategoryScreen";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen/>,
    },
    {
        path: "games",
        element: <GamesScreen />
    }, {
        path: "games/:slug",
        element: <GamesCategoryScreen />
    }
]);
