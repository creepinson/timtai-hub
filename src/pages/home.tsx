import { Flex, Heading, Text } from "@chakra-ui/react";
import { Component, h } from "preact";
import timtai1 from "../assets/timtai-1.png";

export class HomePage extends Component {
    render() {
        return (
            <Flex
                bg="gray.800"
                h="98vh"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <img src={timtai1} />
                <Heading
                    as="h2"
                    size="2xl"
                    color="blue.400"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mb="15"
                >
                    About Us
                </Heading>
                <Text
                    color="blue.300"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    size="lg"
                    w="25%"
                >
                    We provide sexy timtai for a small price of $0! Our team
                    consists of many subway sexists. Don't forget the very
                    Timanttikuutio himself, for he makes excellent timtai.
                </Text>
            </Flex>
        );
    }
}
