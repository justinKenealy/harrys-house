import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { CartContext } from "../contexts/CartContext";
import AddToCartBtn from "./AddToCartBtn";
import AddToWishlistBtn from "./AddToWishListBtn";
import DeleteFromWishListBtn from "./DeleteFromWishListBtn";
import ProductInfoPopup from "./ProductInfoPopup";

const WishlistProductCard = ({
  product,
  wishlistProducts,
  setWishlistProducts,
}) => {
  const cart = useContext(CartContext);
  const { user } = useAuth();

  return (
    <Card
      className="wishlistProductCard"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      margin="10px 5px"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        className="wishlistProductImg"
        src={product.img_url}
      />
      
        <DeleteFromWishListBtn
          user_id={user.id}
          product_id={product.id}
          wishlistProducts={wishlistProducts}
          setWishlistProducts={setWishlistProducts}
          className="deleteFromWishListBtnTopRight"
        />
      

      <Stack>
        <CardBody className="wishlistCardBody" padding="20px 20px 0 20px">
          <Heading className="wishlistProductTitle" size="md">
            {product.name}
          </Heading>

          <Text py='2'>${product.price}</Text>
        </CardBody>

        <CardFooter className="wishlistCardFooter">
          <div>
          {cart.getProductQuantity(product.id) ? (
            <span style={{ margin: "0 auto" }}>
              In Cart: {cart.getProductQuantity(product.id)}
              <Button
                padding="0px"
                margin="0 5px 0 10px"
                onClick={() => cart.addItemToCart(product.id)}
              >
                <AddIcon fontSize="10px" />
              </Button>
              <Button
                padding="0px"
                onClick={() => cart.removeOneFromCart(product.id)}
              >
                <MinusIcon fontSize="10px" />
              </Button>
            </span>
          ) : (
            <AddToCartBtn productTitle={product.name} productID={product.id} />
          )}
          </div>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default WishlistProductCard;
