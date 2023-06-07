import { Button } from "@chakra-ui/react";

const DeleteFromWishListBtn = ({
  user_id,
  product_id,
  wishlistProducts,
  setWishlistProducts,
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
    const newWishListProducts = wishlistProducts.filter(
      (item) => item.id !== product_id
    );
    setWishlistProducts(newWishListProducts);
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
