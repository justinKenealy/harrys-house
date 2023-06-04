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
import AddToCartBtn from './AddToCartBtn';
import './ProductInfoPopup.css'

const ProductInfoPopup = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { name, img, description } = props
    return (
      <>  
        <Text onClick={onOpen}>{name}</Text>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <img className='enlargedProductImg' src={img} alt={`image of ${name}`}/>
              {description}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
    <AddToCartBtn />
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
};

export default ProductInfoPopup
