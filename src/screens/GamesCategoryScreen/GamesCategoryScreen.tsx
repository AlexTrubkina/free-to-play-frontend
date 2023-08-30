import React, {useEffect} from "react";
import LayoutPage from "../../layouts/LayOutPage";
import GameCards from "./Components/GameCards";

import { Box, Heading } from "@chakra-ui/react";

import { getGamesByCategory } from "../../actions/gameActions";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import { useParams } from "react-router-dom";

const GamesCategoryScreen = (): JSX.Element => {

    let { slug } = useParams();

    const dispatch = useAppDispatch();

    const categoryGames = useAppSelector(state => state.categoryGames);

    useEffect (() => {
        dispatch(getGamesByCategory(slug))
    }, [dispatch, slug])

    return (
        <LayoutPage> 
            <Heading color="gray.100" backgroundColor="gray.700" textAlign="center" paddingTop="30px">
                Игры категории { slug }
            </Heading>
            <Box backgroundColor="gray.700">
                {categoryGames && <GameCards categoryGames={categoryGames}/>}
            </Box>
        </LayoutPage>
    );
};

export default GamesCategoryScreen;