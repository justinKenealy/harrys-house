import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useProducts } from "../contexts/ProductsContext";
import AddToCartBtn from "./AddToCartBtn";
import ProductFilterTab from "./ProductFilterTab";
import ProductInfoPopup from "./ProductInfoPopup";
import "./Products.css";
import ProductSearchBar from "./ProductSearchBar";

const Products = () => {
  // const [products, setProducts] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [productFilter, setProductFilter] = useState(null);

  const { products } = useProducts()
  console.log(products)
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await fetch("/api/products");
  //     const data = await res.json();
  //     setProducts(data.user);
  //   };
  //   getProducts();
  // }, []);

  const checkSearchQuery = (name, description) => {
    if (searchText.length < 3) {
      return true;
    }
    if (
      name.toLowerCase().includes(searchText.toLowerCase()) ||
      description.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return true;
    }
    return false;
  };

  return (
    <div id="storePageBody">
      <ProductSearchBar searchText={searchText} setSearchText={setSearchText} />
      <ProductFilterTab
        productFilter={productFilter}
        setProductFilter={setProductFilter}
      />
      <SimpleGrid id="productGrid" spacing={2} margin="0 auto">
        {productFilter
          ? products &&
            products
              .filter(
                (product) =>
                  product.category === productFilter &&
                  checkSearchQuery(product.name, product.description)
              )
              .map((product) => (
                <Card className="productCard" key={product.id}>
                  <CardHeader padding="10px">
                    <img className="productImg" src={product.img_url} />
                  </CardHeader>
                  <CardBody>
                    <Heading className="productTitle" size="md">
                      <ProductInfoPopup
                        name={product.name}
                        img={product.img_url}
                        description={product.description}
                      />
                    </Heading>

                    <Text margin="10px 0 0 0">${product.price}</Text>
                  </CardBody>
                  <CardFooter padding="0px 20px 20px 20px">
                    <AddToCartBtn productTitle={product.name} productID={product.id}/>
                  </CardFooter>
                </Card>
              ))
          : products &&
            products
              .filter((product) =>
                checkSearchQuery(product.name, product.description)
              )
              .map((product) => (
                <Card className="productCard" key={product.id}>
                  <CardHeader padding="10px">
                    <img className="productImg" src={product.img_url} />
                  </CardHeader>
                  <CardBody>
                    <Heading className="productTitle" size="md">
                      <ProductInfoPopup
                        name={product.name}
                        img={product.img_url}
                        description={product.description}
                      />
                    </Heading>

                    <Text margin="10px 0 0 0">${product.price}</Text>
                  </CardBody>
                  <CardFooter padding="0px 20px 20px 20px">
                    <AddToCartBtn productTitle={product.name} />
                  </CardFooter>
                </Card>
              ))}
      </SimpleGrid>
    </div>
  );
};

export default Products;
