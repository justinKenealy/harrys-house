import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import "./Login.css";

import "./Login.css";

const LoginPage = ({ user }) => {
  return user ? (
    <Navigate to="/account" />
  ) : (
    <div id="loginPage">
      <div id="accountMessage">
        Welcome to Harry's House! Login or create an account
      </div>
      <Tabs align="center" width="60%" maxWidth="600px" margin="0 auto">
        <TabList>
          <Tab>Login</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <LoginForm />
          </TabPanel>
          <TabPanel>
            <SignUpForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default LoginPage;
