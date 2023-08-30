import React, { useEffect } from "react";
import LayoutPage from "../../layouts/LayOutPage";
import {
    Icon,
    Flex,
    Button,
    Container,
    Grid,
    GridItem,
    Heading,
    Text,
    Box,
    Spinner,
    Card,
    CardBody,
} from "@chakra-ui/react";
import { getAllGames } from "../../actions/gameActions";

import { FaGamepad } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import GameCards from "./Components/GameCards";
import { Link } from "react-router-dom";

const HomeScreen = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const { games, loading, error } = useAppSelector((state) => state.allGames);

    useEffect(() => {
        dispatch(getAllGames());
    }, []);

    return (
        <LayoutPage>
            <Flex backgroundColor="gray.700" h="89vh" alignItems="center">
                <Container maxW="70%">
                    <Grid
                        alignItems="center"
                        templateColumns={{ base: "1fr", lg: "1.5fr 1fr" }}
                        gap="30px"
                    >
                        <GridItem>
                            <Heading
                                mb="20px"
                                color="gray.100"
                                size="3xl"
                                fontWeight="bold"
                            >
                                Сервис с бесплатными играми
                            </Heading>
                            <Text mb="20px" color="gray.100">
                                Попробуйте его прямо сейчаc
                            </Text>
                            <Flex direction="row" flexWrap="wrap" gap="20px">
                                <Link to="/games">
                                    <Button colorScheme="gray" variant="solid">
                                        Посмотреть все игры
                                    </Button>
                                </Link>

                                <Button colorScheme="linkedin">
                                    Больше жанров
                                </Button>
                            </Flex>
                        </GridItem>
                        <GridItem
                            display={{ base: "none", lg: "grid" }}
                            justifyContent="center"
                        >
                            <Flex
                                direction="column"
                                alignItems="center"
                                gap="20px"
                            >
                                <Box
                                    border="1px"
                                    textAlign="center"
                                    p="10px"
                                    borderRadius="15px"
                                    borderColor="blue.500"
                                    color="blue.500"
                                >
                                    Откройте для себя множество игр
                                </Box>
                                <Icon
                                    as={FaGamepad}
                                    color="blue.500"
                                    boxSize={150}
                                />
                            </Flex>
                        </GridItem>
                    </Grid>
                </Container>
            </Flex>
            <Flex
                justifyContent="center"
                backgroundColor="gray.700"
                alignItems="center"
                minH="100vh"
            >
                {loading ? (
                    <Spinner
                        thickness="10px"
                        color="blue.500"
                        size="xl"
                    />
                ) : games ? (
                    <GameCards allGames={games} />
                ) : (
                    <Card backgroundColor="red.100">
                        <CardBody>
                            <Text>
                                {error}
                            </Text>
                        </CardBody>
                    </Card>
                )}
            </Flex>
        </LayoutPage>
    );
};

export default HomeScreen;
