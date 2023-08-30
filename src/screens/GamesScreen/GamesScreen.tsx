import React, {useEffect} from "react";
import LayoutPage from "../../layouts/LayOutPage";
import GameCards from "./Components/GameCards";

import { Box } from "@chakra-ui/react";

import { getAllGames } from "../../actions/gameActions";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

const GamesScreen = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const allGames = useAppSelector(state => state.allGames);

    useEffect (() => {
        dispatch(getAllGames())
    }, [])

    return (
        <LayoutPage> 
            <Box backgroundColor="gray.700">
                {allGames && <GameCards allGames={allGames}/>}
            </Box>
        </LayoutPage>
    );
};

export default GamesScreen;