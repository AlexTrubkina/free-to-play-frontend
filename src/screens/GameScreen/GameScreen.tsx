import React, { useEffect, useState } from "react";
import LayoutPage from "../../layouts/LayOutPage";

import { Flex, Container, Heading, Spinner } from "@chakra-ui/react";

import { getOneGame } from "../../actions/gameActions";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useParams } from "react-router-dom";
import GameHeader from "./Components/GameHeader";
import GameDescription from "./Components/GameDescription";
import ScreenshotsCarousel from "./Components/ScreenshotsCarousel";
import ErrorCard from "../../components/ErrorCard/ErrorCard";

const GameScreen = (): JSX.Element => {
    const { gameId } = useParams();

    const dispatch = useAppDispatch();

    const [counterReloadAttempts, setCounterReloadAttempts] = useState(0);

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
                    <ErrorCard
                        error={error}
                        counter={counterReloadAttempts}
                        setCounter={setCounterReloadAttempts}
                        action={getOneGame(gameId)}
                    />
                )}
            </Flex>
        </LayoutPage>
    );
};

export default GameScreen;
