import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CloseButton,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "./ItemInCartCard.css";

const ItemInCartCard = ({ id, name, price, quantity, img_url }) => {
  const cart = useContext(CartContext);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      margin="6px 0"
      height="125px"
    >
      <Image
        objectFit="cover"
        width="125px"
        src={img_url}
        alt={name}
      />
          <CloseButton
            className="removeItemFromCartBtn"
            onClick={() => cart.removeItemFromCart(id)}
          />

      <Stack>
        <CardBody className="productCardBodyInCart" padding="10px">
          <Heading size="md">{name}</Heading>
          <Text margin="3px 0px 0px 0px" py="2">${(price * quantity).toFixed(2)}</Text>
          <span style={{ margin: "0 auto" }}>
            In Cart: {cart.getProductQuantity(id)}
            <Button
              size="sm"
              padding="0px"
              margin="0 5px 0 10px"
              onClick={() => cart.addItemToCart(id)}
            >
              <AddIcon fontSize="10px" />
            </Button>
            <Button size="sm" padding="0px" onClick={() => cart.removeOneFromCart(id)}>
              <MinusIcon fontSize="10px" />
            </Button>
          </span>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ItemInCartCard;
