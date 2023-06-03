import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
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

        console.log(data);
        setProducts(data.user);
      };
      getProducts();
    }, []);

  return (
    <div id="storePageBody">
    <div id="productSearchBar"><ProductSearchBar searchText={searchText} setSearchText={setSearchText}/></div>
    <div id="productFilterTab"><ProductFilterTab productFilter={productFilter} setProductFilter={setProductFilter}/></div>
    <SimpleGrid id="productGrid" spacing={2} width="80%" margin="0 auto">
        {products &&
          products.map((product) => (
            <Card className="productCard" key={product.id}>
              <CardHeader>
                <Heading size="md">{product.name}</Heading>
              </CardHeader>
              <CardBody>
                <Image src="http://placedog.net/500"/>
                <Text>{product.description}</Text>
                <Text>{product.price}</Text>
              </CardBody>
              <CardFooter>
                <Button margin="0 auto">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
    </div>
  );
};

export default Products;
