import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link, Navigate } from "react-router-dom";

const LandingPage = () => {

  return (
    <div>
      <Heading>Welcome to Harry's House Pet Store</Heading>
      <Text fontSize='2xl'>
        We offer a wide range of pet supplies and accessories for your best
        friends no matter their shape or size.
      </Text>
      <Link to="/store"><Button>Shop Now</Button></Link>
    </div>
  );
};

export default LandingPage;
