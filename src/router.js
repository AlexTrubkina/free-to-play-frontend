import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen/>,
    }
]);
