import React, { useState } from "react";
import {
    Flex,
    Container
} from "@chakra-ui/react";
import { OneGameType } from "../../../types/types";
import GameCard from "../../../components/GameCard/GameCard";
import Pagination from "../../../components/Pagination/Pagination";
import { getAllPaginationPages, getGamesOnPage } from "../../../helpers/paginationHelpers";

const GameCards = ({ allGames }: { allGames : OneGameType[]}): JSX.Element => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    let gamesOnCurrentPage: OneGameType[] = allGames.slice(0, 9);
    let allPages: number = 0;

    allPages = getAllPaginationPages(allGames);
    gamesOnCurrentPage = getGamesOnPage(allGames, currentPage);

    return (
    
        <Container maxW={{base: "95%", md: "70%"}} paddingBlock="30px">
            <Flex flexDirection="column">
            <Pagination allPages={allPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <Flex flexWrap="wrap" justifyContent="center" gap="40px" marginBottom="30px">
                {gamesOnCurrentPage.map((value) => (
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
