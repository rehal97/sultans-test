import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Image,
  Heading,
  Text,
  Menu,
} from "@chakra-ui/react";

const MenuItem = ({ children }) => (
  <ButtonGroup variant="link" mx="5">
    <Button color="#EBEBE7">{children}</Button>
  </ButtonGroup>
);

const NavBar = () => {
  return (
    <Flex py="3">
      {/* logo */}
      <Center>
        <Image w="150px" src="/logo.png" alt="Fresh Meal Plan" />
      </Center>

      {/* menu items */}
      <Center mx="auto">
        <MenuItem>Plans</MenuItem>
        <MenuItem>Menu</MenuItem>
        <MenuItem>How It Works</MenuItem>
      </Center>

      {/* create account etc */}
      <Center>
        <MenuItem>Login</MenuItem>
      </Center>
    </Flex>
  );
};

export default NavBar;
