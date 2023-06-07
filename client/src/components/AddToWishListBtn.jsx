import { Button } from "@chakra-ui/react";
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

  const handleAddWishlistProduct = () => {
    AddProductToWishList();
    console.log(wishlistProductIDs);
    console.log(product_id)
    const newWishListProducts = [...wishlistProductIDs, product_id]
    console.log(newWishListProducts)
    setWishlistProductIDs(newWishListProducts);
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
