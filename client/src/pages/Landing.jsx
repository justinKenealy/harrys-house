import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./Landing.css"

const LandingPage = () => {

  return (
    <div id="homepage">
      <Heading>Welcome to Harry's House Pet Store</Heading>
      <Text margin="40px 0" fontSize='2xl'>
        We offer a wide range of pet supplies and accessories for your best
        friends no matter their shape or size. Head to our store to check out our products!
      </Text>
      <Link to="/store"><Button>Shop Now</Button></Link>
    </div>
  );
};

export default LandingPage;
