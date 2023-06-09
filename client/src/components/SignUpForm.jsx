import { Button, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import ValidPasswordPopup from "./ValidPasswordPopup";

const SignUpForm = () => {
  const { register } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [userTaken, setUserTaken] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isValid, setIsValid] = useState(false);
  const toast = useToast();

  const handleRegisterSuccessful = () => {
    toast({
      description: "Account created successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setUsername("");
    setEmail("");
    setPassword("");
    setPassword2("");
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.target));

    try {
      await register(fields);
      handleRegisterSuccessful();
      return;
    } catch (err) {
      setUserTaken("Username or email already taken. Try again.");
      setUsername("");
      setEmail("");
      setPassword("");
      setPassword2("");
      console.log(err);
    }
  };

  const handlePasswordChange = (event) => {
    setUserTaken("");
    setErrorMessage("");
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (passwordValidator(newPassword)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handlePassword2Change = (event) => {
    setUserTaken("");
    const newPassword = event.target.value;
    setPassword2(newPassword);
    if (password !== newPassword) {
      setErrorMessage("Passwords must match");
      return;
    }
    setErrorMessage("");
  };

  const handleUsernameChange = (event) => {
    setUserTaken("");
    const newUsername = event.target.value;
    setUsername(newUsername);
  };

  const handleEmailChange = (event) => {
    setUserTaken("");
    const newEmail = event.target.value;
    setEmail(newEmail);
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
      {userTaken && <Text margin="10px 0">{userTaken}</Text>}
      <Input
        backgroundColor="white"
        margin="5px 0"
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <Input
        backgroundColor="white"
        margin="5px 0"
        type="text"
        name="email"
        placeholder="email address"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        backgroundColor="white"
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
        backgroundColor="white"
        margin="5px 0"
        type="password"
        name="passwordConfirm"
        placeholder="confirm password"
        value={password2}
        onChange={handlePassword2Change}
      />
      {errorMessage && <Text margin="10px 0">{errorMessage}</Text>}
      {username && isValid && email && password2 && !errorMessage ? (
        <Button colorScheme="blue" margin="5px 0" type="submit" value="Sign Up">
          Sign Up
        </Button>
      ) : (
        <Button margin="5px 0">Complete fields to sign up</Button>
      )}
    </form>
  );
};

export default SignUpForm;
