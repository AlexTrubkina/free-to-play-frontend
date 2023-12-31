import React from "react";
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
} from "@chakra-ui/react";
import { FaGamepad } from "react-icons/fa";
import { Link } from "react-router-dom";

const FirstScreen = () => {
    return (
        <Flex backgroundColor="gray.700" h="89vh" alignItems="center">
            <Container maxW={{ base: "80%", md: "90%" }}>
                <Grid
                    alignItems="center"
                    templateColumns={{ base: "1fr", lg: "1.5fr 1fr" }}
                    gap="30px"
                >
                    <GridItem>
                        <Heading
                            mb="20px"
                            color="gray.100"
                            size={{ base: "2xl", md: "3xl" }}
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
                            <Link to="/games">
                                <Button colorScheme="linkedin">
                                    Больше жанров
                                </Button>
                            </Link>
                        </Flex>
                    </GridItem>
                    <GridItem
                        display={{ base: "none", lg: "grid" }}
                        justifyContent="center"
                    >
                        <Flex direction="column" alignItems="center" gap="20px">
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
    );
};

export default FirstScreen;
