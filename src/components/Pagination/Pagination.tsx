import React, { SetStateAction } from "react";

import { Flex, Box } from "@chakra-ui/react";
import PaginationPrev from "./PaginationPrev/PaginationPrev";
import PaginationButton from "./PaginationButton.tsx/PaginationButton";
import PaginationNext from "./PaginationNext/PaginationNext";
import { Dispatch } from "react";

const Pagination = ({
    setCurrentPage,
    currentPage,
    allPages,
}: {
    allPages: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    currentPage: number;
}) => {
    let paginationPages: number[] = [1, 2, 3];

    if (currentPage === 1) {
        paginationPages = [1, 2, 3];
    }

    if (currentPage === allPages) {
        paginationPages = [currentPage - 2, currentPage - 1, currentPage];
    }

    if (currentPage > 1 && currentPage < allPages) {
        paginationPages = [currentPage - 1, currentPage, currentPage + 1];
    }

    return (
        <Box marginInline="auto" marginBlock="20px">
            <Flex gap="10px">
                <PaginationPrev
                    disabled={currentPage === 1}
                    setCurrentPage={setCurrentPage}
                    page={currentPage}
                />
                {paginationPages.map((num) => (
                    <PaginationButton
                        setCurrentPage={setCurrentPage}
                        page={num}
                        key={num}
                        disabled={num === currentPage}
                    />
                ))}

                <PaginationNext
                    disabled={currentPage === allPages}
                    setCurrentPage={setCurrentPage}
                    page={currentPage}
                />
            </Flex>
        </Box>
    );
};

export default Pagination;
