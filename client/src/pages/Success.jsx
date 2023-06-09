import { Button, Center, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Success = () => {
  const UrlBasepath = import.meta.env.VITE_API_SERVER_BASEPATH;

  return (
    <div style={{ margin: "50px auto", textAlign: "center" }}>
      <Text>Thank you for your order!</Text>
      <Image
        height="200px"
        src={`${UrlBasepath}/assets/logo/corgi_logo2.png`}
        margin="15px"
      />
      <Link to="/store">
        <Button colorScheme="blue">Return to Store</Button>
      </Link>
    </div>
  );
};

export default Success;
