import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";

import NavBar from "./navbar";
import Layout from "../layout/layout";

const Landing = () => {
  return (
    <Box
      bgImage="url('/backdrop.png')"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="100vh"
    >
      <Layout>
        <NavBar itemColor={"white"} />

        <Box mt="10%" w="40%">
          <Heading color="#EBEBE7">
            Get custom meal plans delivered to your doorstep
          </Heading>
        </Box>

        <FormControl maxW="25%" id="email">
          <FormLabel color="white" mt="3">
            Delivery Zip Code
          </FormLabel>
          <Input backgroundColor="white" type="zipcode" placeholder="Zipcode" />

          <FormLabel color="white" mt="3">
            E-mail address
          </FormLabel>
          <Input backgroundColor="white" type="email" placeholder="E-mail" />

          <Button width="100%" colorScheme="primary" mt="3">
            Get Started
          </Button>
        </FormControl>
      </Layout>
    </Box>
  );
};

export default Landing;
