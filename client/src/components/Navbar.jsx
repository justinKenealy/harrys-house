import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import LogoutButton from "./LogoutButton";

const NavBar = ({ user }) => {
  return (
    <>
      <Box
        bg="green"
        w="100%"
        h="50px"
        display="flex"
        justifyContent={user ? "space-between" : "center"}
        alignItems="center"
      >
          <Heading color="white">Harry's House 🦊</Heading>
          <Link to="/">Home</Link>
          <Link to="/store">Store</Link>
          { user && <Link to="/account">Account</Link>}
          { !user && <Link to="/login">Login</Link>}
          <Link to="/cart">Cart</Link>
      </Box>
    </>
  );
};

export default NavBar;
