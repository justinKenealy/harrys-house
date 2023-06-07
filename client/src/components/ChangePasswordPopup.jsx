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
import ChangePasswordForm from './changePasswordForm';
import './ProductInfoPopup.css'

const ChangePasswordPopup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <>  
        <Button onClick={onOpen}>Change Password</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Change Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <ChangePasswordForm/>
            </ModalBody>
            <ModalFooter>
                    
                  </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
};

export default ChangePasswordPopup
