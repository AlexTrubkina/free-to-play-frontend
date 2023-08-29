import React from "react";
import {
    Card,
    Image,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Stack,
    Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navigation({
    imgUrl,
    shortDescription,
    name,
    id,
}: {
    imgUrl: string;
    shortDescription: string;
    name: string;
    id: string;
}): JSX.Element {
    return (
        <Card maxW="sm" backgroundColor="gray.400">
            <CardBody>
                <Image
                    src={imgUrl}
                    alt="Иллюстрация игры"
                    borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{name}</Heading>
                    <Text>{shortDescription}</Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <Link to={`games/game/${id}`}>
                    <Button variant="solid" colorScheme="blue">
                        Перейти на страницу игры
                    </Button>
                </Link>
                
            </CardFooter>
        </Card>
    );
}

export default Navigation;
