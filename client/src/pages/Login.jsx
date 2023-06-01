import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import "./Login.css"

import "./Login.css"

const LoginPage = () => {
  return (
    <div id="loginPage">
      <div id="accountMessage">Welcome to Harry's House! Login or create an account</div>
      <Tabs align="center">
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