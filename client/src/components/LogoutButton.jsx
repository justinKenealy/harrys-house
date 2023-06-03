import { Button } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const LogoutButton = () => {
    const { logout } = useAuth();
    const handleLogout = async (e) => {
        logout()
        return <Navigate to="/" replace/>
    };

  return (
    <button margin="5px" onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
