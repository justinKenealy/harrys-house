import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import './Navbar.css'

const NavBar = ({ user, setSelectedPage, selectedPage}) => {


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
            <Link className={selectedPage === 'home' ? "selectedNavItem" :"navItem"} to="/" onClick={() => setSelectedPage('home')}>Home</Link>
            <Link className={selectedPage === 'store' ? "selectedNavItem" :"navItem"} to="/store" onClick={() => setSelectedPage('store')}>Store</Link>
            { user && <Link className={selectedPage === 'account' ? "selectedNavItem" :"navItem"} to="/account" onClick={() => setSelectedPage('account')}>Account</Link>}
            { user && <Link className="navItem"><LogoutButton>Logout</LogoutButton></Link>}
            { !user && <Link className={selectedPage === 'login' ? "selectedNavItem" :"navItem"} to="/login" onClick={() => setSelectedPage('login')}>Login</Link>}
            <Link className={selectedPage === 'cart' ? "selectedNavItem" :"navItem"} to="/cart" onClick={() => setSelectedPage('cart')}>Cart</Link>
          </nav>
      </Box>
    </>
  );
};

export default NavBar;
