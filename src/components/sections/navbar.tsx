import React from "react";
import { ButtonGroup, Center, Flex, Image, Link } from "@chakra-ui/react";

const MenuItem = (props) => {
  const { children, itemColor, link } = props;
  console.log(itemColor);
  return (
    <ButtonGroup variant="link" mx="5">
      <Link
        href={link}
        fontWeight="semibold"
        color={itemColor ? itemColor : "primary.700"}
      >
        {children}
      </Link>
    </ButtonGroup>
  );
};

const NavBar = (props) => {
  const { itemColor } = props;
  return (
    <Flex py="3">
      {/* logo */}
      <Center>
        <Link href="/">
          <Image w="150px" src="/logo.png" alt="Fresh Meal Plan" />{" "}
        </Link>
      </Center>

      {/* menu items */}
      <Center mx="auto">
        <MenuItem itemColor={itemColor}>Plans</MenuItem>
        <MenuItem itemColor={itemColor} link="/menu">
          Menu
        </MenuItem>
        <MenuItem itemColor={itemColor}>How It Works</MenuItem>
      </Center>

      {/* create account etc */}
      <Center>
        <MenuItem itemColor={itemColor}>Login</MenuItem>
      </Center>
    </Flex>
  );
};

export default NavBar;
