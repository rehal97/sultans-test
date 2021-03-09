import React from "react";
import { Badge, Box, IconButton, Image } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import comingSoonImage from "../../imageComingSoon.jpg";

const Card = (props) => {
  const { itemData, addToCart } = props;

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="xl"
    >
      <Image
        src={itemData.imageUrl ? itemData.imageUrl : comingSoonImage}
        alt={itemData.imageAlt}
      />

      <Box px="6" py="3">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="primary">
            {itemData.productType}
          </Badge>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {itemData.title}
        </Box>

        <Box color="gray.500" fontWeight="semibold" fontSize="xs" isTruncated>
          {itemData.desc}
        </Box>

        <Box mt={2}>
          {itemData.price ? "$" + itemData.price : "Sold Out"}
          <IconButton
            float="right"
            colorScheme="primary"
            aria-label="Add to cart"
            size="sm"
            icon={<AddIcon />}
            onClick={() => addToCart(itemData.id)}
            disabled={!itemData.price}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
