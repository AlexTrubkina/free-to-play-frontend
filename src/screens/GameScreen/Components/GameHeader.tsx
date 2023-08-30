import React from "react";
import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    CardFooter,
    Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { OneGameType } from "../../../types/types";

const GameHeader = ({ oneGame }: { oneGame: OneGameType }) => {
    return (
        <Card
            direction={{ base: "column", xl: "row" }}
            overflow="hidden"
            variant="unstyled"
            backgroundColor="gray.600"
        >
            <Image
                objectFit="contain"
                maxW={{ base: "100%"}}
                width="100%"
                src={oneGame.thumbnail}
                alt="Caffe Latte"
            />

            <Stack>
                <CardBody padding="20px" color="gray.200">
                    <Heading size="md">{oneGame.title}</Heading>

                    <Text py="2">{oneGame.short_description}</Text>
                    <Text py="2"> Жанр: {oneGame.genre}</Text>
                    <Text py="2"> Платформа: {oneGame.platform}</Text>
                    <Text py="2"> Разработчик: {oneGame.developer}</Text>
                </CardBody>
                <CardFooter padding="20px">
                    <Link to={oneGame.game_url}>
                        <Button variant="solid" colorScheme="blue">
                            Играть
                        </Button>
                    </Link>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default GameHeader;
