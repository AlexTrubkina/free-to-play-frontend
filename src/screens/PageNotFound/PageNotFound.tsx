import React from "react";
import LayoutPage from "../../layouts/LayOutPage";
import {
    Flex,
    Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PageNotFound = (): JSX.Element => {

    return (
        <LayoutPage>
            <Flex backgroundColor="gray.700" h="100vh" alignItems="center" justifyContent="center">
               <Heading color="gray.200" textAlign="center" paddingInline="10px" size={{base: "2xl", md: "3xl"}}>
                 404 страница не найдена
               </Heading>
            </Flex>
        </LayoutPage>
    );
};

export default PageNotFound;
