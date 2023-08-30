import React from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    HStack,
    Text,
    useBreakpointValue,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader
} from "@chakra-ui/react";

import { FiMenu } from "react-icons/fi";

import { NavLink } from "react-router-dom";

import { navLinks } from "../../data/datasets";

function Navigation(): JSX.Element {
    const isDesktop: boolean | undefined = useBreakpointValue({
        base: false,
        lg: true,
    });

    const { isOpen, onOpen, onClose } = useDisclosure();
    const mobileToggle: React.RefObject<HTMLButtonElement> = React.useRef(null);
    return (
        <Box as="nav" backgroundColor="#272b30">
            <HStack py="4" px="20px" spacing="10" justify="space-between">
                <Flex gap="20px" alignItems="center">
                    
                    <NavLink to="/">
                        <Text fontWeight="bold" color="gray.200" fontSize="xl">
                            Free To Play
                        </Text>
                    </NavLink>
                </Flex>
                {isDesktop ? (
                    <Flex justify="space-between" flex="1">
                        <ButtonGroup variant="link" spacing="8">
                            {navLinks.map((item) => (
                                <NavLink to={item.link} key={item.page}>
                                    <Button variant="link" key={item.page}>
                                        {item.page}
                                    </Button>
                                </NavLink>
                            ))}
                        </ButtonGroup>
                        
                    </Flex>
                ) : (
                    <IconButton
                        onClick={onOpen}
                        ref={mobileToggle}
                        variant="outline"
                        aria-label="Open Menu"
                        icon={<FiMenu fontSize="1.25rem" />}
                    />
                )}
            </HStack>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={mobileToggle}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        
                        <NavLink to="/">
                            <Text fontWeight="bold" fontSize="xl">
                                Free To Play
                            </Text>
                        </NavLink>
                    </DrawerHeader>

                    <DrawerBody>
                        <Flex flexDirection="column" gap="4" alignItems="start">
                            {navLinks.map((item) => (
                                <NavLink key={item.page} to={item.link}>
                                    <Button variant="ghost" >
                                    {item.page}
                                </Button>
                                </NavLink>
                                
                            ))}
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}

export default Navigation;
