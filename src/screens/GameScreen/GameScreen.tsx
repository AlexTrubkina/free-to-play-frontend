import React, { useEffect } from "react";
import LayoutPage from "../../layouts/LayOutPage";

import { Box, Container, Heading } from "@chakra-ui/react";

import { getOneGame } from "../../actions/gameActions";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useParams } from "react-router-dom";
import GameHeader from "./Components/GameHeader";
import GameDescription from "./Components/GameDescription";

const GameScreen = (): JSX.Element => {
    const { gameId } = useParams();

    const dispatch = useAppDispatch();

    const oneGame = useAppSelector((state) => state.oneGame);

    useEffect(() => {
        dispatch(getOneGame(gameId));
    }, [gameId]);

    return (
        <LayoutPage>
            <Box backgroundColor="gray.700" minH="100vh">
                {oneGame && (
                    <Container maxW={{base: "90%", md: "80%"}} paddingBlock="40px">
                        <GameHeader oneGame={oneGame} />
                        <GameDescription oneGame={oneGame}/>
                        <Heading color="gray.200" marginTop="40px">
                            Скриншоты игры
                        </Heading>

                    </Container>
                )}
            </Box>
        </LayoutPage>
    );
};

export default GameScreen;
