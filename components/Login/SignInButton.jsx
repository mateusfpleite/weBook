import { useContext } from "react";
import context from "../../context/context";
import { CustomButton } from "../../styles/Login";

function SignInButton() {
  const { genericState } = useContext(context);

  const verifyEmailAndPassword = (email, password) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z].*[a-z].*[a-z]).{8,16}$/;
    return !(emailRegex.test(email)) || !(passwordRegex.test(password));
  };
  return (
    <CustomButton
      fullWidth
      disabled={
        verifyEmailAndPassword(genericState.emailInput, genericState.passwordInput)
      }
      type="submit"
      variant="contained"
    >
      Sign In
    </CustomButton>
  )
}


export default SignInButton;