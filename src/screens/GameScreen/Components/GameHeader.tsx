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

const GameHeader = ({ oneGame }: { oneGame: { game: OneGameType } }) => {
    return (
        <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="unstyled"
            backgroundColor="gray.500"
        >
            <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={oneGame.game.thumbnail}
                alt="Caffe Latte"
            />

            <Stack>
                <CardBody padding="20px" color="gray.200">
                    <Heading size="md">{oneGame.game.title}</Heading>

                    <Text py="2">{oneGame.game.short_description}</Text>
                    <Text py="2"> Жанр: {oneGame.game.genre}</Text>
                    <Text py="2"> Платформа: {oneGame.game.platform}</Text>
                    <Text py="2"> Разработчик: {oneGame.game.developer}</Text>
                </CardBody>
                <CardFooter padding="20px">
                    <Link to={oneGame.game.game_url}>
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
