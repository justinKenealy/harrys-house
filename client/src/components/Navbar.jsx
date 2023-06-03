import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import './Navbar.css'

const NavBar = ({ user }) => {
  return (
    <>
      <Box
        bg="#a6d598"
        w="100%"
        h="80px"
        display="flex"
        justifyContent={"space-around"}
        alignItems="center"
      >
          <Heading color="white">Harry's House 🦊</Heading>
          <Link className="navItem" to="/">Home</Link>
          <Link className="navItem" to="/store">Store</Link>
          { user && <Link className="navItem" to="/account">Account</Link>}
          { user && <Link className="navItem"><LogoutButton>Logout</LogoutButton></Link>}
          { !user && <Link className="navItem" to="/login">Login</Link>}
          <Link className="navItem" to="/cart">Cart</Link>
      </Box>
    </>
  );
};

export default NavBar;
