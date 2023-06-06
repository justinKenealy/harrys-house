import { Button, Input } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthProvider";

const LoginForm = () => {
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.target));
    try {
      await login(fields);
    } catch (err) {
      // Show error message
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input backgroundColor="white" margin="5px 0" type="text" name="username" placeholder="username" />
      <Input backgroundColor="white" margin="5px 0" type="password" name="password" placeholder="password" />
      <Button colorScheme="blue" margin="5px 0" type="submit" value="Login">Login</Button>
    </form>
  );
};

export default LoginForm;
