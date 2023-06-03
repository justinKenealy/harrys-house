import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const LandingPage = () => {
  const handleShopNowBtn = () => {
    <Navigate to="/store" />;
  };

  return (
    <div>
      <Heading>Welcome to Harry's House Pet Store</Heading>
      <Text fontSize='2xl'>
        We offer a wide range of pet supplies and accessories for your best
        friends no matter their shape or size.
      </Text>
      <Button onClick={handleShopNowBtn}>Shop Now</Button>
    </div>
  );
};

export default LandingPage;
