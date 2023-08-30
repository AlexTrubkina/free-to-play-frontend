import React from "react";

import { Button } from "@chakra-ui/react";

import { Dispatch, SetStateAction } from "react";

const PaginationNext = ({page, setCurrentPage, disabled} : {page: number, setCurrentPage: Dispatch<SetStateAction<number>>, disabled: boolean}) => {

    const handleClick = () => {
        setCurrentPage(page + 1);
    }

    return (
        <Button isDisabled={disabled} colorScheme="blue" onClick={handleClick}>
            &#62;
        </Button>
    );
};

export default PaginationNext;