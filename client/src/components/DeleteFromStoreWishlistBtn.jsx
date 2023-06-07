import { Button } from "@chakra-ui/react";

const DeleteFromStoreWishListBtn = ({
  user_id,
  product_id,
  wishlistProductIDs,
  setWishlistProductIDs,
}) => {
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
    const newWishListProducts = wishlistProductIDs.filter(
        (id) => id !== product_id
        );
        setWishlistProductIDs(newWishListProducts);
        console.log(wishlistProductIDs)
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

export default DeleteFromStoreWishListBtn;
