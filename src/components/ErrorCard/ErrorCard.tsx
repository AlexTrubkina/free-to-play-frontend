import React, { useState } from "react";
import {
    Button,
    Card,
    CardBody,
    Text,
    Flex
} from "@chakra-ui/react";

import { AiOutlineReload } from "react-icons/ai";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { Dispatch, SetStateAction } from "react";

function ErrorCard({ error, action, counter, setCounter }: { error: string, action: any, counter: number, setCounter: Dispatch<SetStateAction<number>> }): JSX.Element {

    const dispatch = useAppDispatch();

    

    const handeClick = () => {
        dispatch(action);
        setCounter(counter + 1);
        console.log(counter);
        
    }

    return (
        <Card maxW="sm" backgroundColor="gray.400">
            <Card backgroundColor="red.100">
                <CardBody>
                    <Flex direction="column">
                    <Text marginBottom="20px">{error}</Text>
                    {
                        counter === 3 &&
                        <Text marginBottom="20px"> 
                            Попробуйте перезагрузить страницу
                        </Text>
                    }
                    <Button marginInline="auto" isDisabled={counter === 3} colorScheme="red" leftIcon={<AiOutlineReload />} onClick={handeClick}>
                        Попробовать еще 
                    </Button>
                    </Flex>
                </CardBody>
            </Card>
        </Card>
    );
}

export default ErrorCard;
