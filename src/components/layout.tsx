import { RenderableProps, h, JSX } from "preact";
import { ChakraProvider, Flex, Heading, Text } from "@chakra-ui/react";
import { theme } from "../util/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/home";

export const Layout = (): JSX.Element => {
    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Flex
                    bg="gray.900"
                    minH="50"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    {/* Brand/Logo */}
                    <Heading
                        as="h1"
                        size="3xl"
                        color="blue.400"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        mb="15"
                    >
                        Timtai Hub
                    </Heading>
                </Flex>
                <Switch>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
                <Flex
                    w="100vw"
                    p="25"
                    bg="gray.900"
                    minH="50"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text
                        color="blue.300"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        size="lg"
                    >
                        Made By <a href="https://theoparis.com">Theo</a> and
                        AnonymousID.
                    </Text>
                </Flex>
            </Router>
        </ChakraProvider>
    );
};
