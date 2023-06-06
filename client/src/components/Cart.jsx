import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Center,
  Heading,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useProducts } from "../contexts/ProductsContext";
import ItemInCartCard from "./ItemInCartCard";
import "./Cart.css"
import { Link } from "react-router-dom";
import CheckoutButton from "./CheckoutButton";

const Cart = ({ showCart, handleCloseCart }) => {
  const cart = useContext(CartContext);
  const { items } = cart;
  const { products } = useProducts();

  const getProductData = (id) => {
    return products.find((product) => product.id === id);
  };

  let detailedCartItems = [];
  for (let item in items) {
    detailedCartItems.push({
      ...getProductData(items[item].id),
      quantity: items[item].quantity,
    });
  }

  return (
    <>
      <Modal
        isOpen={showCart}
        onClose={handleCloseCart}
        scrollBehavior="inside"
        size="2xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="2xl">Cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {detailedCartItems.length > 0 &&
              detailedCartItems.map((item) => (
                <ItemInCartCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  img_url={item.img_url}
                />
              ))}
            {items.length === 0 && (
              <div style={{margin: '20px auto 50px auto', textAlign: 'center'}}>
                <Text>Your cart is empty.</Text>
                <Image
                  height="200px"
                  src="http://localhost:3000/assets/logo/sadCorgi.png"
                  margin="10px auto 20px auto"
                />
                <Link to="/store"><Button colorScheme="blue" onClick={handleCloseCart}>Shop Now</Button></Link>
              </div>
            )}
          </ModalBody>
          {detailedCartItems.length > 0 && (
            <ModalFooter id="cartFooter">
              <Heading size="md">Total Cost: ${cart.getTotalCost().toFixed(2)}</Heading>
              <CheckoutButton items={items}/>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Cart;
