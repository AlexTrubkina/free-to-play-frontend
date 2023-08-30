import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { footerLinks } from "../../data/datasets";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Box bg="gray.900" color="gray.300">
            <Container
                as={Stack}
                maxW={"80%"}
                padding="30px"
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify={{ base: "center", md: "space-between" }}
                align={{ base: "center", md: "center" }}
            >
                <Stack direction={"row"} spacing={10}>
                    {footerLinks.map((link) =>
                        link.subMenu ? (
                            <Box  key={link.page} cursor="default">
                                {link.page}
                                {link.subMenu.map((subLink) => (
                                    <Link to={link.link + subLink.link} key={subLink.link}>
                                        <Box >{subLink.page}</Box>
                                    </Link>
                                ))}
                            </Box>
                        ) : (
                            <Link to={link.link} key={link.page}>
                                <Box  >
                                    {link.page}
                                </Box>
                            </Link>
                        )
                    )}
                </Stack>
                <Heading color="gray.200" cursor="default">
                    Free To Play
                </Heading>
            </Container>
        </Box>
    );
};

export default Footer;
