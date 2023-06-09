import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
    Card,
    Text,
    Divider,
  } from "@chakra-ui/react";
import { useProducts } from "../contexts/ProductsContext";
import OrderListItemProduct from "./OrderListItemProduct";
  
  const OrderListItem = ({ order, allOrders }) => {
    const { products } = useProducts();

    const findOrderById = (order, allOrders) => {
        const orderIds = order.map((orderItem) => orderItem.order_id);
        return allOrders.filter((order) => orderIds.every((id) => id === order.id));
      };

    const thisOrder = findOrderById(order, allOrders)[0];

    const getProductData = (id) => {
        return products.find((product) => product.id === id);
      };

    const totalPrice = order.reduce((accumulator, currentItem) => {
      const quantity = currentItem.quantity;
      const price = parseFloat(currentItem.price);
      return accumulator + quantity * price;
    }, 0);

    return (
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: 'rgb(44, 129, 199)', color: 'white' }}>
                <Box as="span" flex="1" textAlign="left">
                  <Text as='b' padding="10px">Ordered: {thisOrder.created_at.slice(0,10)}</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                {order && order.map(x => (
                    <OrderListItemProduct quantity={x.quantity} productData={getProductData(x.product_id)} />

                ))}
                <Divider padding="5px"/>
                <Text padding="10px" as='b'>Total Price: ${totalPrice}</Text>
            </AccordionPanel>
          </AccordionItem>
    );
  };
  
  export default OrderListItem;
  