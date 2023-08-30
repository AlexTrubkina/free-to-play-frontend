import React, { useEffect } from "react";
import LayoutPage from "../../layouts/LayOutPage";
import GameCards from "./Components/GameCards";

import { Flex, Heading, Spinner, Card, CardBody, Text } from "@chakra-ui/react";

import { getGamesByCategory } from "../../actions/gameActions";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

import { useParams } from "react-router-dom";

const GamesCategoryScreen = (): JSX.Element => {
    let { slug } = useParams();

    const dispatch = useAppDispatch();

    const { games, loading, error } = useAppSelector((state) => state.categoryGames);

    useEffect(() => {
        dispatch(getGamesByCategory(slug));
    }, [dispatch, slug]);

    return (
        <LayoutPage>
            <Heading
                color="gray.100"
                backgroundColor="gray.700"
                textAlign="center"
                paddingTop="30px"
            >
                Игры категории {slug}
            </Heading>
            <Flex backgroundColor="gray.700" minH="100vh" justifyContent="center" alignItems="center">
                {loading ? (
                    <Spinner thickness="10px" color="blue.500" size="xl" />
                ) : games ? (
                    <GameCards categoryGames={games} />
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

export default GamesCategoryScreen;
