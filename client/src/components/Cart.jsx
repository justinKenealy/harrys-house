import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Text,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import AddToCartBtn from "./AddToCartBtn";
import "./ProductInfoPopup.css";

const Cart = ({ showCart, handleCloseCart }) => {
  return (
    <>
      <Modal isOpen={showCart} onClose={handleCloseCart} scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your cart</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <Card>
              <CardBody>
                <CardHeader>Your cart</CardHeader>
                <Divider />
                <Text>Item 1</Text>
                <Divider />
                <Text>Item 2</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
                <Text>Item 3</Text>
                <Divider />
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
