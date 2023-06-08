import { Tabs, TabList, Tab, TabPanels, TabPanel, Heading } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import "./Login.css";

import "./Login.css";

const LoginPage = ({ user }) => {
  const UrlBasepath = import.meta.env.VITE_API_SERVER_BASEPATH

  return user ? (
    <Navigate to="/account" />
  ) : (
    <div id="loginPage">
      <img id="heroImage" alt="hero image" src={`${UrlBasepath}/assets/homepage/landingPageBackground.jpg`}/>
      <Tabs align="center" width="75%" maxWidth="600px" margin="50px auto">
        <TabList>
          <Tab fontSize="2xl" >Login</Tab>
          <Tab fontSize="2xl" >Sign Up</Tab>
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
