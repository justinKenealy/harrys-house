import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { useAuth } from "../contexts/AuthProvider"
import { CartContext } from "../contexts/CartContext"
import AddToCartBtn from "./AddToCartBtn"
import AddToWishlistBtn from "./AddToWishListBtn"
import DeleteFromWishListBtn from "./DeleteFromWishListBtn"
import ProductInfoPopup from "./ProductInfoPopup"

const WishlistProductCard = ( {product, wishlistProducts, setWishlistProducts} ) => {
    const cart = useContext(CartContext);
    const { user } = useAuth()

    return (
        <Card className="wishlistProductCard">
                  <CardHeader padding="10px">
                    <img className="wishlistProductImg" src={product.img_url} />
                      {<DeleteFromWishListBtn user_id={user.id} product_id={product.id} wishlistProducts={wishlistProducts} setWishlistProducts={setWishlistProducts}/>}
                  </CardHeader>
                  <CardBody>
                    <Heading className="wishlistProductTitle" size="md">
                      {product.name}
                    </Heading>
                    <Text margin="10px 0 0 0">${product.price}</Text>
                  </CardBody>
                  <CardFooter padding="0px 20px 20px 20px">
                    {cart.getProductQuantity(product.id) ? (
                      <span style={{ margin: "0 auto" }}>
                        In Cart: {cart.getProductQuantity(product.id)}
                        <Button
                          padding="0px"
                          margin="0 5px 0 10px"
                          onClick={() => cart.addItemToCart(product.id)}
                        >
                          <AddIcon fontSize="10px" />
                        </Button>
                        <Button
                          padding="0px"
                          onClick={() => cart.removeOneFromCart(product.id)}
                        >
                          <MinusIcon fontSize="10px" />
                        </Button>
                      </span>
                    ) : (
                      <AddToCartBtn
                        productTitle={product.name}
                        productID={product.id}
                      />
                    )}
                  </CardFooter>
                </Card>
    )
}

export default WishlistProductCard