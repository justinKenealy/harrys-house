import { Button, useToast } from "@chakra-ui/react";
import FontAwesomeIcon from "react";

const AddToWishlistBtn = ({
  user_id,
  product_id,
  wishlistProductIDs,
  setWishlistProductIDs,
}) => {
    
    const AddProductToWishList = () => {
      const requestBody = {
        user_id: user_id,
        product_id: product_id,
      };
      fetch("api/wishlist_products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => response)
        .catch((error) => {
          console.error(error);
        });
    };
    
    const toast = useToast();

  const handleAddWishlistProduct = () => {
    AddProductToWishList();
    const newWishListProducts = [...wishlistProductIDs, product_id]
    setWishlistProductIDs(newWishListProducts);
    toast({
      description: "Item added to your wishlist.",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  };

  return (
    <div className="addToWishlistBtn">
      <i
        onClick={() => handleAddWishlistProduct()}
        className="fa-regular fa-heart fa-xl"
      ></i>
    </div>
  );
};

export default AddToWishlistBtn;
