import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Text,
  } from '@chakra-ui/react'
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import AddToCartBtn from './AddToCartBtn';
import './ProductInfoPopup.css'

const ProductInfoPopup = ({ id, name, price, img, description }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cart = useContext(CartContext);

    return (
      <>  
        <Text onClick={onOpen}>{name}</Text>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{name} - ${price}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <img className='enlargedProductImg' src={img} alt={`image of ${name}`}/>
              {description}
            </ModalBody>
            <ModalFooter padding="0px 20px 20px 20px">
                    {cart.getProductQuantity(id) ? (
                      <span style={{ margin: "0 auto" }}>
                        In Cart: {cart.getProductQuantity(id)}
                        <Button
                          padding="0px"
                          margin="0 5px 0 10px"
                          onClick={() => cart.addItemToCart(id)}
                        >
                          <AddIcon fontSize="10px" />
                        </Button>
                        <Button
                          padding="0px"
                          onClick={() => cart.removeOneFromCart(id)}
                        >
                          <MinusIcon fontSize="10px" />
                        </Button>
                      </span>
                    ) : (
                      <AddToCartBtn
                        productTitle={name}
                        productID={id}
                      />
                    )}
                  </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
};

export default ProductInfoPopup
