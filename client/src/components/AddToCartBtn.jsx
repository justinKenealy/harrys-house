import { Button, useToast } from "@chakra-ui/react";

const AddToCartBtn = ({productTitle}) => {
  const toast = useToast();
  return (
    <Button
      margin="0 auto"
      onClick={() =>
        toast({
          title: productTitle,
          description: "added to your cart.",
          status: "success",
          duration: 3000,
          isClosable: true,
        })
      }
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartBtn;
