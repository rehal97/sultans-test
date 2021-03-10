import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  FormLabel,
  FormControl,
  Input,
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";

import NavBar from "./navbar";
import Layout from "../layout/layout";

const Form = (props) => {
  return (
    <Box as="form" onSubmit={props.onSubmit} {...props}>
      {props.children}
    </Box>
  );
};

const initalErrorState = {
  zipcode: {
    error: false,
    message: "Enter a valid zipcode",
  },
  email: {
    error: false,
    message: "Enter a valid email",
  },
};

const Landing = (props) => {
  const [formErrors, setFormErrors] = useState(initalErrorState);
  const toast = useToast();

  const validationAlert = useCallback(() => {
    let descString = "";
    if (formErrors.zipcode.error && formErrors.email.error) {
      descString = "Please enter a valid zipcode and email address";
    } else if (formErrors.zipcode.error) {
      descString = formErrors.zipcode.message;
    } else if (formErrors.email.error) {
      descString = formErrors.email.message;
    }

    return toast({
      title: "Sign Up Error.",
      description: descString,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }, [formErrors, toast]);

  useEffect(() => {
    if (formErrors.zipcode.error || formErrors.email.error) {
      validationAlert();
      setFormErrors(initalErrorState);
    }
  }, [formErrors, validationAlert]);

  const validateZipcode = (zipcode: string) => {
    const zipcodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    return zipcodeRegex.test(String(zipcode));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const { zipcode, email } = e.target;
    let updatedErrors = formErrors;

    if (!validateZipcode(zipcode.value)) {
      updatedErrors = {
        ...updatedErrors,
        zipcode: { ...formErrors.zipcode, error: true },
      };
    }

    if (!validateEmail(email.value)) {
      updatedErrors = {
        ...updatedErrors,
        email: { ...formErrors.email, error: true },
      };
    }

    if (updatedErrors !== formErrors) {
      setFormErrors({ ...updatedErrors });
    }

    if (!updatedErrors.zipcode.error && !updatedErrors.email.error) {
      props.history.push("/menu");
    }
  };

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

        <Form maxW="25%" onSubmit={onSubmitHandler}>
          <FormControl id="zipcode">
            <FormLabel color="white" mt="3">
              Delivery Zip Code
            </FormLabel>
            <Input
              backgroundColor="white"
              type="zipcode"
              placeholder="Zipcode"
              // required
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel color="white" mt="3">
              E-mail address
            </FormLabel>
            <Input backgroundColor="white" placeholder="E-mail" />
          </FormControl>

          <Button width="100%" type="submit" colorScheme="primary" mt="3">
            Get Started
          </Button>
        </Form>
      </Layout>
    </Box>
  );
};

export default Landing;
