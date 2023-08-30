import React from "react";
import {
    Flex,
    Container
} from "@chakra-ui/react";
import { OneGameType } from "../../../types/types";
import GameCard from "../../../components/GameCard/GameCard";

const GameCards = ({ categoryGames }: { categoryGames:  OneGameType[]}): JSX.Element => {

    return (
    
        <Container maxW="70%" paddingBlock="30px">
            <Flex flexDirection="column">
            <Flex flexWrap="wrap" justifyContent="center" gap="40px" marginBottom="30px">
                {categoryGames.map((value) => (
                    <GameCard
                        key={value.id}
                        imgUrl={value.thumbnail}
                        shortDescription={value.short_description}
                        name={value.title}
                        id={value.id}
                    />
                ))}
            </Flex>
            </Flex>
            
        </Container>
    );
};

export default GameCards;