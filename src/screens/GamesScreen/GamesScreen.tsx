import React, { useEffect } from "react";
import LayoutPage from "../../layouts/LayOutPage";
import GameCards from "./Components/GameCards";

import { Flex, Spinner, CardBody, Card, Text } from "@chakra-ui/react";

import { getAllGames } from "../../actions/gameActions";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import { OneGameType } from "../../types/types";

const GamesScreen = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const { games, loading, error } = useAppSelector((state) => state.allGames);

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
                    <Card backgroundColor="red.100">
                        <CardBody>
                            <Text>
                                {error}
                            </Text>
                        </CardBody>
                    </Card>
                )}
            </Flex>
        </LayoutPage>
    );
};

export default GamesScreen;
