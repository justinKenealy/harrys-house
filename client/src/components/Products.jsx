import { Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text } from "@chakra-ui/react";
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
    <>
    <ProductSearchBar searchText={searchText} setSearchText={setSearchText}/>
    <ProductFilterTab productFilter={productFilter} setProductFilter={setProductFilter}/>
    <SimpleGrid id="productGrid" spacing={2} width="80%" margin="0 auto">
        {products &&
          products.map((product) => (
            <Card className="productCard" key={product.id}>
              <CardHeader>
                <Heading size="md">{product.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{product.description}</Text>
              </CardBody>
              <CardFooter>
                <Text>{product.price}</Text>
              </CardFooter>
            </Card>
          ))}
      </SimpleGrid>
    </>
  );
};

export default Products;
