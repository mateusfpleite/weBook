import { useContext } from "react";
import context from "../../context/context";

function SignInButton() {
 const { genericState } = useContext(context);

  const verifyEmailAndPassword = (email, password) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z].*[a-z].*[a-z]).{8,16}$/;
    return !(emailRegex.test(email)) || !(passwordRegex.test(password));
  };
  return (
    <button
    type="submit"
    disabled={verifyEmailAndPassword(genericState.emailInput, genericState.passwordInput)}
  >
    Sign In
  </button>
  )
}

export default SignInButton;