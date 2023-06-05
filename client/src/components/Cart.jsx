import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductsContext";
import AddToCartBtn from "./AddToCartBtn";
import ItemInCartCard from "./ItemInCartCard";
import "./ProductInfoPopup.css";

const Cart = ({ showCart, handleCloseCart }) => {
  const cart = useContext(CartContext);
  const { items } = cart;
  const { products } = useProducts();

  const getProductData = (id) => {
    return products.find((product) => product.id === id);
  };

  let detailedCartItems = [];
  for (let item in items) {
    console.log(items[item]);
    detailedCartItems.push({
      ...getProductData(items[item].id),
      quantity: items[item].quantity,
    });
  }

  console.log(detailedCartItems);

  return (
    <>
      <Modal
        isOpen={showCart}
        onClose={handleCloseCart}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Card>
              <CardBody>
                <CardHeader>Your cart</CardHeader>
                {items && items.map((item) => <ItemInCartCard key={1} />)}
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button>Checkout</Button>
            <Button>Clear Cart</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Cart;
