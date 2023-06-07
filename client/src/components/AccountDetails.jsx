import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useProducts } from "../contexts/ProductsContext";
// import WishlistProvider, { useWishlist, WishlistContext } from "../contexts/WishlistProductsContext";
import WishlistProductCard from "./WishlistProductCard";
import "./WishlistProductCard.css";

const AccountDetails = ({ user }) => {
  return (
    <>
      <div id="accountDetailsSection">
        <Heading padding="15px 20px" size="md">Account Details</Heading>
        <Card marginLeft="5px">
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Username: 
                </Heading>
                <Text pt="2" fontSize="sm">
                {user.username}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Email Address:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {user.email}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                    Password Management
                </Heading>
                <Text pt="2" fontSize="sm">
                  <Button>Change Password</Button>
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default AccountDetails;
