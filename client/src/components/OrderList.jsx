import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Card,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import OrderListItem from "./OrderListItem";

const OrderList = ({ user }) => {
  const [ordersArray, setOrdersArray] = useState([]);

  const getOrders = async () => {
    const res = await fetch("/api/orders/" + user.id);
    const orders = await res.json();
    const idArray = orders.map((item) => item.id);
    fetch("/api/order-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderIDs: idArray }),
    })
      .then((response) => response.json())
      .then((data) => {
        setOrdersArray(
          Object.values(
            data.reduce((acc, obj) => {
              const { order_id } = obj;
              if (!acc[order_id]) {
                acc[order_id] = [];
              }
              acc[order_id].push(obj);
              return acc;
            }, {})
          )
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getOrders();
  }, []);

  console.log(ordersArray);

  return (
    <div id="orderListSection">
      <Heading padding="35px 15px 5px 15px" size="md">
        Orders
      </Heading>

      <Accordion defaultIndex={[0]} allowMultiple>
        {true &&
          ordersArray.map((order) => (
            <OrderListItem order={order}/>
          ))}
      </Accordion>
    </div>
  );
};

export default OrderList;
