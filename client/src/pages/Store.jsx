import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";
import Products from "../components/Products";
import SignUpForm from "../components/SignUpForm";
import "./Login.css"

import "./Login.css"

const Store = () => {
  return (
    <div id="Store">
      <Products />
    </div>
  );
};

export default Store;
