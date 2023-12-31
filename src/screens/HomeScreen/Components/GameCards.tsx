import React from "react";
import { Flex, Container, Button } from "@chakra-ui/react";
import { OneGameType } from "../../../types/types";
import GameCard from "../../../components/GameCard/GameCard";
import { Link } from "react-router-dom";

const GameCards = ({ allGames }: { allGames: OneGameType[] }): JSX.Element => {
    return (
        <Container maxW={{ md: "70%", base: "95%" }} paddingBlock="30px">
            <Flex flexDirection="column">
                <Flex
                    flexWrap="wrap"
                    justifyContent="center"
                    gap="40px"
                    marginBottom="30px"
                >
                    {allGames.slice(0, 6).map((value) => (
                        <GameCard
                            key={value.id}
                            imgUrl={value.thumbnail}
                            shortDescription={value.short_description}
                            name={value.title}
                            id={value.id}
                        />
                    ))}
                </Flex>
                <Link to="/games" style={{ marginInline: "auto" }}>
                    <Button colorScheme="linkedin">Посмотреть все игры</Button>
                </Link>
            </Flex>
        </Container>
    );
};

export default GameCards;
