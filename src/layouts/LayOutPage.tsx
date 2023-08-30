import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

function LayoutPage({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <ChakraProvider>
            <Navigation />
            {children}
            <Footer />
        </ChakraProvider>
       
    );
}

export default LayoutPage;
