import React from "react";
import {
  Flex,
  HStack,
  Button,
  Box,
  Input,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import comingSoonImage from "../../imageComingSoon.jpg";

const CartCard = (props) => {
  const { itemData, quantity, incQuantity, decQuantity, removeItem } = props;

  return (
    <Flex p={2} borderBottom="1px" borderColor="gray.200">
      <Flex w="25%">
        <Image src={itemData.imageUrl ? itemData.imageUrl : comingSoonImage} />
      </Flex>
      <Flex w="45%" px={5}>
        <Stack spacing={1}>
          <Text fontWeight="semibold" isTruncated noOfLines={2}>
            {itemData.title}
          </Text>
          <Text>${itemData.price}</Text>
        </Stack>
      </Flex>
      <Flex w="25%">
        <VStack>
          <HStack pt={5}>
            <Button
              size="xs"
              disabled={quantity === 1}
              onClick={() => decQuantity(itemData.id)}
            >
              -
            </Button>
            <Input w={8} size="xs" value={quantity} readOnly />
            <Button size="xs" onClick={() => incQuantity(itemData.id)}>
              +
            </Button>
          </HStack>
          <Button
            colorScheme="red"
            variant="link"
            onClick={() => removeItem(itemData.id)}
          >
            <Text fontSize="xs">Remove</Text>
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default CartCard;
