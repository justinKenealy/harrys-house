import { Button, Center, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cancel = () => {
  const UrlBasepath = import.meta.env.VITE_API_SERVER_BASEPATH;

  return (
    <div style={{ margin: "50px auto", textAlign: "center" }}>
      <Text>You cancelled the order.</Text>
      <Image
        height="200px"
        src={`${UrlBasepath}/assets/logo/sadCorgi.png`}
        margin="15px"
      />
      <Link to="/store">
        <Button colorScheme="blue">Return to Store</Button>
      </Link>
    </div>
  );
};

export default Cancel;
