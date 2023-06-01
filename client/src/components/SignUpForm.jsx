import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthProvider";

const SignUpForm = () => {
    const { register } = useAuth();
    const [errorMessage, setErrorMessage] = useState("")

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const fields = Object.fromEntries(new FormData(e.target));
        
        if (fields.password !== fields.passwordConfirm){
          setErrorMessage("Passwords must match")
          return
        }
        
        try {
          await register(fields);
        } catch (err) {
          console.log(err);
        }
      };
    
      return (
        <form id="newUserForm" onSubmit={handleRegisterSubmit}>
          <Input margin="5px 0" type="text" name="username" placeholder="username" />
          <Input margin="5px 0" type="password" name="password" placeholder="password" onChange={() => setErrorMessage("")}/>
          <Input margin="5px 0" type="password" name="passwordConfirm" placeholder="confirm password" onChange={() => setErrorMessage("")}/>
          {errorMessage && <div>{errorMessage}</div>}
          <Button margin="5px 0" type="submit" value="Sign Up">Sign Up</Button>
        </form>
      )
};

export default SignUpForm;
