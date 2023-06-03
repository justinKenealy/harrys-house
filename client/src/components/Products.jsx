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
    <ProductSearchBar searchText={searchText} setSearchText={setSearchText}/>
    <ProductFilterTab productFilter={productFilter} setProductFilter={setProductFilter}/>
    <SimpleGrid id="productGrid" spacing={2} width="80%" margin="0 auto">
        {products &&
          products.map((product) => (
            <Card className="productCard" key={product.id}>
              <CardHeader>
                <Image src="http://placedog.net/500"/>
              </CardHeader>
              <CardBody>
                <Heading margin="10px 0" size="md">{product.name}</Heading>
                <Text margin="10px 0 0 0">${product.price}</Text>
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
