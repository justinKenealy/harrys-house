import { Card, CardBody, Divider, Image, Img, Text } from "@chakra-ui/react";
import "./OrderListItemProduct.css"

const OrderListItemProduct = ({ quantity, productData }) => {
  const UrlBasepath = import.meta.env.VITE_API_SERVER_BASEPATH;

  return (
    <>
      <Divider padding="5px" />
      <div className="orderListProductDiv">
      <div className="orderListProductImageDiv">
        <Image
          objectFit="cover"
          height="100%"
          width="100%"
          className="wishlistProductImg"
          src={UrlBasepath + productData.img_url}
        />
        </div>
        <div style={{ margin: "10px" }}>
        <Text>{productData.name}</Text>
        <Text>Quantity: {quantity}</Text>
        </div>
      </div>
    </>
  );
};

export default OrderListItemProduct;
