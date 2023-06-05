import { Button, useToast } from "@chakra-ui/react";
import { CartContext } from "../contexts/CartContext"
import { useContext } from "react";

const AddToCartBtn = ({productTitle, productID}) => {
  // console.log(productID)
  const toast = useToast();
  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(productID)
  
  const addToCartHandler = () => {
    toast({
      title: productTitle,
      description: "added to your cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
    cart.addItemToCart(productID)
  }

  // console.log(cart.items)

  return (
    <Button
      margin="0 auto"
      onClick={() => 
        addToCartHandler()
      }
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
