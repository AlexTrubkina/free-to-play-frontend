import React from "react";

import { Button } from "@chakra-ui/react";

import { Dispatch, SetStateAction } from "react";

const PaginationButton = ({page, setCurrentPage, disabled} : {page: number, setCurrentPage: Dispatch<SetStateAction<number>>, disabled: boolean}) => {
    
    const handleClick = () => {
        setCurrentPage(page);
    }

    return (
        <Button isDisabled={disabled} colorScheme="blue" onClick={handleClick}>
            {page}
        </Button>
    );
};

export default PaginationButton;