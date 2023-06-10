import { Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";

const LoginForm = () => {
  const { login } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.target));
    try {
      await login(fields);
    } catch (err) {
      setLoginFailed(true);
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loginFailed && (
        <Text>Username or password is incorrect. Try again.</Text>
      )}
      <Input
        backgroundColor="white"
        margin="5px 0"
        type="text"
        name="username"
        placeholder="username"
        onChange={() => setLoginFailed("")}
      />
      <Input
        backgroundColor="white"
        margin="5px 0"
        type="password"
        name="password"
        placeholder="password"
        onChange={() => setLoginFailed("")}
      />
      <Text margin="15px 0">Demo Account - username: demo/ password: Demo1234$</Text>
      <Button colorScheme="blue" margin="5px 0" type="submit" value="Login">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
