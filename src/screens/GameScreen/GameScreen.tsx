import React, { useEffect } from "react";
import LayoutPage from "../../layouts/LayOutPage";

import {
    Flex,
    Container,
    Heading,
    Spinner,
    Card,
    CardBody,
    Text,
} from "@chakra-ui/react";

import { getOneGame } from "../../actions/gameActions";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useParams } from "react-router-dom";
import GameHeader from "./Components/GameHeader";
import GameDescription from "./Components/GameDescription";
import ScreenshotsCarousel from "./Components/ScreenshotsCarousel";

const GameScreen = (): JSX.Element => {
    const { gameId } = useParams();

    const dispatch = useAppDispatch();

    const { game, loading, error } = useAppSelector((state) => state.oneGame);

    useEffect(() => {
        dispatch(getOneGame(gameId));
    }, [gameId]);

    return (
        <LayoutPage>
            <Flex
                backgroundColor="gray.700"
                minH="100vh"
                alignItems="center"
                justifyContent="center"
            >
                {loading ? (
                    <Spinner thickness="10px" color="blue.500" size="xl" />
                ) : game ? (
                    <Container
                        maxW={{ base: "90%", md: "80%" }}
                        paddingBlock="40px"
                    >
                        <GameHeader oneGame={game} />
                        <GameDescription oneGame={game} />
                        <Heading color="gray.200" marginBlock="40px">
                            Скриншоты игры
                        </Heading>
                        <ScreenshotsCarousel oneGame={game} />
                    </Container>
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

export default GameScreen;
