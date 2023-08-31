import React, { useEffect, useState } from "react";
import LayoutPage from "../../layouts/LayOutPage";
import GameCards from "./Components/GameCards";

import { Flex, Spinner } from "@chakra-ui/react";

import { getAllGames } from "../../actions/gameActions";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import ErrorCard from "../../components/ErrorCard/ErrorCard";

const GamesScreen = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const { games, loading, error } = useAppSelector((state) => state.allGames);
    const [counterReloadAttempts, setCounterReloadAttempts] = useState(0);

    useEffect(() => {
        dispatch(getAllGames());
    }, []);

    return (
        <LayoutPage>
            <Flex
                backgroundColor="gray.700"
                minH="100vh"
                justifyContent="center"
                alignItems="center"
            >
                {loading ? (
                    <Spinner thickness="10px" color="blue.500" size="xl" />
                ) : games ? (
                    <GameCards allGames={games} />
                ) : (
                    <ErrorCard counter={counterReloadAttempts} setCounter={setCounterReloadAttempts} error={error} action={getAllGames} />
                )}
            </Flex>
        </LayoutPage>
    );
};

export default GamesScreen;
