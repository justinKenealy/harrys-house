import { AddIcon, MinusIcon } from "@chakra-ui/icons"
import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import AddToCartBtn from "./AddToCartBtn"
import ProductInfoPopup from "./ProductInfoPopup"

const ProductCard = ({product}) => {
    const cart = useContext(CartContext);

    return (
        <Card className="productCard">
                  <CardHeader padding="10px">
                    <img className="productImg" src={product.img_url} />
                  </CardHeader>
                  <CardBody>
                    <Heading className="productTitle" size="md">
                      <ProductInfoPopup
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        img={product.img_url}
                        description={product.description}
                      />
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

export default ProductCard