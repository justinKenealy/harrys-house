import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import ValidPasswordPopup from "./ValidPasswordPopup";

const ChangePasswordForm = () => {
  const { user, updatePassword } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.target));
    updatePassword(user.id, fields);
  };

  const handlePasswordChange = (event) => {
    setErrorMessage("");
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (passwordValidator(newPassword)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const passwordValidator = (password) => {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (
      !password.length >= 8 ||
      !/\d/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !specialChars.test(password)
    ) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <form id="newUserForm" onSubmit={handleSubmit}>
      <Input
        backgroundColor="white"
        margin="5px 0"
        type="password"
        name="passwordOld"
        placeholder="current password"
      />
      <Input
        backgroundColor="white"
        margin="5px 0"
        type="password"
        name="passwordNew"
        placeholder="new password"
        value={password}
        onChange={handlePasswordChange}
      />
      {password && (
        <div style={{ color: isValid ? "green" : "red" }}>
          {isValid ? "Valid Password " : "Too weak  "}
          <ValidPasswordPopup />
        </div>
      )}
      <Input
        backgroundColor="white"
        margin="5px 0"
        type="password"
        name="passwordConfirm"
        placeholder="confirm new password"
        onChange={() => setErrorMessage("")}
      />
      {errorMessage && <div>{errorMessage}</div>}
      <Button colorScheme="blue" margin="5px 0" type="submit" value="Confirm">
        Confirm
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
