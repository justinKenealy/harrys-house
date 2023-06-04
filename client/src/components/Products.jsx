import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import AddToCartBtn from "./AddToCartBtn";
import ProductFilterTab from "./ProductFilterTab";
import "./Products.css"
import ProductSearchBar from "./ProductSearchBar";

const Products = () => {
    const [products, setProducts] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [productFilter, setProductFilter] = useState('');

    console.log(productFilter)

    useEffect(() => {
      const getProducts = async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data.user);
      };
      getProducts();
    }, []);

  return (
    <div id="storePageBody">
    <ProductSearchBar searchText={searchText} setSearchText={setSearchText}/>
    <ProductFilterTab productFilter={productFilter} setProductFilter={setProductFilter}/>
    <SimpleGrid id="productGrid" spacing={2} margin="0 auto">
        {products &&
          products.map((product) => (
            <Card className="productCard" key={product.id}>
              <CardHeader padding="10px">
                <img className="productImg" src={product.img_url}/>
              </CardHeader>
              <CardBody>
                <Heading className="productTitle" size="md">{product.name}</Heading>
                <Text margin="10px 0 0 0">${product.price}</Text>
              </CardBody>
              <CardFooter padding="0px 20px 20px 20px">
                <AddToCartBtn productTitle={product.name}/>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
    </div>
  );
};

export default Products;
