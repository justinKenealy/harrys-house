import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const ItemInCartCard = ({ id, name, price, quantity, img_url }) => {
  const cart = useContext(CartContext);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      margin="3px 0"
      height="130px"
    >
      <Image
        objectFit="contain"
        maxW={{ base: "100%", sm: "100px" }}
        src={img_url}
        alt={name}
      />

      <Stack>
        <CardBody padding="10px">
          <Heading size="md">{name}</Heading>

          <Text py="2">
            ${(price * quantity).toFixed(2)}
          </Text>
          <span style={{ margin: "0 auto" }}>
            In Cart: {cart.getProductQuantity(id)}
            <Button
              padding="0px"
              margin="0 5px 0 10px"
              onClick={() => cart.addItemToCart(id)}
            >
              <AddIcon fontSize="12px" />
            </Button>
            <Button padding="0px" onClick={() => cart.removeOneFromCart(id)}>
              <MinusIcon fontSize="12px" />
            </Button>
          </span>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Hello
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ItemInCartCard;
