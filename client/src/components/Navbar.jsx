import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import './Navbar.css'

const NavBar = ({ user }) => {
  return (
    <>
      <Box
        bg="#336699"
        w="100%"
        h="80px"
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
      >
          <div id="logoAndHeading">
          <img width="70px" src="http://localhost:3000/assets/logo/corgi_logo2.png"/>
          <Heading textAlign="left" padding="12px 0 0 10px" color="white">Harry's House</Heading>
          </div>
          <nav id="navBar">
            <Link className="navItem" to="/">Home</Link>
            <Link className="navItem" to="/store">Store</Link>
            { user && <Link className="navItem" to="/account">Account</Link>}
            { user && <Link className="navItem"><LogoutButton>Logout</LogoutButton></Link>}
            { !user && <Link className="navItem" to="/login">Login</Link>}
            <Link className="navItem" to="/cart">Cart</Link>
          </nav>
      </Box>
    </>
  );
};

export default NavBar;
