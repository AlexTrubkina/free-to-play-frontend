import React from "react";
import { Text } from "@chakra-ui/react";
import { OneGameType } from "../../../types/types";

const GameDescription = ({ oneGame }: { oneGame: OneGameType }) => {
    return (
        <Text color="gray.200" fontWeight="bold" paddingTop="40px">
            {oneGame.description}
        </Text>
    );
};

export default GameDescription;
