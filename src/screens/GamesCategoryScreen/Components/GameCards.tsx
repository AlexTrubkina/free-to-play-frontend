import React, {useState} from "react";
import {
    Flex,
    Container
} from "@chakra-ui/react";
import { OneGameType } from "../../../types/types";
import GameCard from "../../../components/GameCard/GameCard";
import { getAllPaginationPages, getGamesOnPage } from "../../../helpers/paginationHelpers";
import Pagination from "../../../components/Pagination/Pagination";

const GameCards = ({ categoryGames }: { categoryGames:  OneGameType[]}): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    let gamesOnCurrentPage: OneGameType[] = categoryGames.slice(0, 9);
    let allPages: number = 0;

    allPages = getAllPaginationPages(categoryGames);
    gamesOnCurrentPage = getGamesOnPage(categoryGames, currentPage);

    return (
        <Container maxW={{base: "95%", md: "80%"}} paddingBlock="30px">
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