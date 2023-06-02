import { Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Products = () => {
    const [products, setProducts] = useState(null);

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
    <SimpleGrid spacing={2} width="80%" margin="0 auto" templateColumns="1">
        {products &&
          products.map((product) => (
            <Card key={product.id}>
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
