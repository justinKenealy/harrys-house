import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const NavBar = ({ user }) => {
  return (
    <>
      <Box
        bg="#a6d598"
        w="100%"
        h="50px"
        display="flex"
        justifyContent={"space-around"}
        alignItems="center"
      >
          <Heading color="white">Harry's House 🦊</Heading>
          <Link to="/">Home</Link>
          <Link to="/store">Store</Link>
          { user && <Link to="/account">Account</Link>}
          { user && <Link><LogoutButton>Logout</LogoutButton></Link>}
          { !user && <Link to="/login">Login</Link>}
          <Link to="/cart">Cart</Link>
      </Box>
    </>
  );
};

export default NavBar;
