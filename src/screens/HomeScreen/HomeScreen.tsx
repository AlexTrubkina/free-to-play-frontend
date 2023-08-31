import React, { useEffect, useState } from "react";
import LayoutPage from "../../layouts/LayOutPage";
import {
    Flex,
    Spinner
} from "@chakra-ui/react";
import { getAllGames } from "../../actions/gameActions";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import GameCards from "./Components/GameCards";

import ErrorCard from "../../components/ErrorCard/ErrorCard";
import FirstScreen from "./Components/FirstScreen";

const HomeScreen = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const { games, loading, error } = useAppSelector((state) => state.allGames);
    const [counterReloadAttempts, setCounterReloadAttempts] = useState(0);

    useEffect(() => {
        dispatch(getAllGames());
    }, []);

    return (
        <LayoutPage>
            <FirstScreen />
            <Flex
                justifyContent="center"
                backgroundColor="gray.700"
                alignItems="center"
                minH="100vh"
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

export default HomeScreen;
