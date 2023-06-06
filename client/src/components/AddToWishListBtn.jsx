import { Button } from "@chakra-ui/react";

const AddToWishlistBtn = ({user_id, product_id}) => {

    const AddToWishlist = () => {      
          const requestBody = {
            "user_id": user_id,
            "product_id": product_id
          };
      
          fetch('api/wishlist_products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
          })
            .then(response => response.json())
            .then(data => {
              console.log(data); 
            })
            .catch(error => {
              console.error(error);
            });
        };
      
        // const register = async (fields) => {
        //     const res = await fetch("api/users", {
        //         method: "POST",
        //         headers: {
        //           "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(fields),
        //       });
        //   };


  return (
    <Button
      colorScheme="blue"
      margin="0 auto"
      onClick={() => 
        AddToWishlist(user_id, product_id)
      }
    >
      Love
    </Button>
  );
};

export default AddToWishlistBtn;
