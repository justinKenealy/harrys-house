import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import ValidPasswordPopup from "./ValidPasswordPopup";

const SignUpForm = () => {
  const { register } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.target));

    if (fields.password !== fields.passwordConfirm) {
      setErrorMessage("Passwords must match");
      return;
    }

    try {
      await register(fields);
    } catch (err) {
      console.log(err);
    }
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
    <form id="newUserForm" onSubmit={handleRegisterSubmit}>
      <Input
        margin="5px 0"
        type="text"
        name="username"
        placeholder="username"
      />
      <Input
        margin="5px 0"
        type="text"
        name="email"
        placeholder="email address"
      />
      <Input
        margin="5px 0"
        type="password"
        name="password"
        placeholder="password"
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
        margin="5px 0"
        type="password"
        name="passwordConfirm"
        placeholder="confirm password"
        onChange={() => setErrorMessage("")}
      />
      {errorMessage && <div>{errorMessage}</div>}
      <Button margin="5px 0" type="submit" value="Sign Up">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
