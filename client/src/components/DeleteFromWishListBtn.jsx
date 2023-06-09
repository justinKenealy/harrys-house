import { Button, useToast } from "@chakra-ui/react";

const DeleteFromWishListBtn = ({
  user_id,
  product_id,
  wishlistProducts,
  setWishlistProducts,
}) => {
  const toast = useToast();

  const DeleteFromWishList = () => {
    fetch(`api/wishlist_products/${user_id}/${product_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response)
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteWishlistProduct = () => {
    DeleteFromWishList(user_id, product_id);
    const newWishListProducts = wishlistProducts.filter(
      (item) => item.id !== product_id
    );
    setWishlistProducts(newWishListProducts);
    toast({
      description: "Item removed from your wishlist.",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <div className="deleteFromWishlistBtn">
      <i
        className="fa-regular fa-heart fa-xl"
        onClick={() => handleDeleteWishlistProduct()}
      ></i>
    </div>
  );
};

export default DeleteFromWishListBtn;
