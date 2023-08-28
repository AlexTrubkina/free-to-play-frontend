import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "../components/Navigation/Navigation";

function LayoutPage({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <ChakraProvider>
            <Navigation />
            {children}
        </ChakraProvider>
    );
}

export default LayoutPage;
