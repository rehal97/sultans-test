import {
  Box,
  Button,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import Card from "../layout/card";
import Layout from "../layout/layout";
import NavBar from "./navbar";
import ItemData from "../../jsonData.json";
import CartCard from "./cartCard";

const findItemById = (id: number) => {
  const item = ItemData.products.find((product) => product.id === id);
  return {
    id: id,
    imageUrl: item.image.src,
    title: item.title,
    price: item.variants[0]?.price,
  };
};

const Order = () => {
  // state to hold cart items - use a json map {"item, quantity"}
  const [cart, setCart] = useState({});
  const [isOrderable, setIsOrderable] = useState(false);

  useEffect(() => {
    console.log(cart);
    setIsOrderable(Object.keys(cart).length === 0 ? true : false);
  }, [cart]);

  const incrementCartItem = useCallback(
    (id: number) => {
      const count = cart[id];
      setCart({ ...cart, [id]: count ? count + 1 : 1 });
    },
    [cart]
  );

  const decrementCartItem = useCallback(
    (id: number) => {
      const count = cart[id];
      setCart({
        ...cart,
        [id]: count ? count - 1 : 0,
      });
    },
    [cart]
  );

  const removeCartItem = useCallback(
    (id: number) => {
      if (cart[id]) {
        const newCart = { ...cart };
        delete newCart[id];
        setCart(newCart);
      }
    },
    [cart]
  );

  const cartSubtotal = useMemo(() => {
    let subtotal = 0;
    for (const [key, value] of Object.entries(cart)) {
      const itemPrice = +findItemById(+key).price;
      const quantity = +cart[key];
      subtotal = subtotal + itemPrice * quantity;
    }
    return subtotal.toFixed(2);
  }, [cart]);

  // useMemo
  const renderCartCards = useMemo(() => {
    const items = [];
    for (const id in cart) {
      items.push({ id, quantity: cart[id], data: findItemById(+id) });
    }

    return items.map((item) => {
      if (cart[item.id]) {
        return (
          <CartCard
            key={item.id}
            itemData={item.data}
            quantity={cart[item.id]}
            incQuantity={incrementCartItem}
            decQuantity={decrementCartItem}
            removeItem={removeCartItem}
          />
        );
      }
    });
  }, [cart, incrementCartItem, decrementCartItem]);

  const renderCards = () => {
    const items = ItemData.products;

    return items.map((item) => {
      let bodyHtml = item.body_html;
      const itemDesc = bodyHtml.replace(/(<([^>]+)>)/gi, "").trim();

      const itemData = {
        id: item.id,
        title: item.title,
        desc: itemDesc,
        price: item.variants[0]?.price,
        imageUrl: item.image.src,
        imageAlt: item.handle,
        productType: item.product_type,
      };

      return (
        <Card key={item.id} itemData={itemData} addToCart={incrementCartItem} />
      );
    });
  };

  return (
    <Layout>
      <NavBar />
      <Grid gap={4} templateRows="1" templateColumns="70% 30%">
        <GridItem colSpan={1}>
          <SimpleGrid bg="gray.150" columns={3} spacing={5}>
            {renderCards()}
          </SimpleGrid>
        </GridItem>
        <GridItem
          borderRadius="lg"
          border="5px"
          borderColor="gray.200"
          boxShadow="xl"
          colSpan={1}
          rowSpan={1}
          maxH={700}
          position="relative"
        >
          <Box
            fontWeight="semibold"
            fontSize="1.5em"
            textAlign="center"
            borderTopRadius="lg"
            borderTop="1px"
            borderBottom="1px"
            borderColor="gray.200"
            boxShadow="sm"
          >
            Your Cart
          </Box>

          <Box>{renderCartCards}</Box>

          <Box
            px={5}
            py={3}
            pos="absolute"
            bottom="3rem"
            borderTop="1px"
            borderColor="gray.200"
            w="100%"
          >
            Subtotal: <Text float="right">${cartSubtotal}</Text>
          </Box>

          <Button
            colorScheme="primary"
            size="lg"
            w="100%"
            left="0"
            pos="absolute"
            bottom="0"
            borderTopRadius="0"
            disabled={isOrderable}
          >
            Order
          </Button>
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Order;
