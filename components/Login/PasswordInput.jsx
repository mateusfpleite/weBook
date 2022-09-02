import { useContext } from "react";
import context from "../../context/context";

function PasswordInput() {
  const { genericState, setGenericState } = useContext(context);

  const verifyLowerCase = (password) => {
    const regex = /(?=.*[a-z].*[a-z].*[a-z])/;
    return !(regex.test(password));
  };

  const verifyUpperCase = (password) => {
    const regex = /(?=.*[A-Z])/;
    return !(regex.test(password));
  };

  const verifySpecial = (password) => {
    const regex = /(?=.*[!@#$&*])/;
    return !(regex.test(password));
  };

  const verifyPassLength = (password) => {
    const regex = /.{8,16}$/;
    return !(regex.test(password));
  };

  const { passwordInput } = genericState;

  return (
    <>
      <label htmlFor="passwordInput">
        Password:
        <input
          type="password"
          name="passwordInput"
          id="passwordInput"
          onChange={setGenericState}
          value={passwordInput}
        />
      </label>
      <p>Your password must contain at least:</p>
      <ul>
        <li style={ { color: verifyLowerCase(passwordInput) ? 'red' : 'green' } }>3 lower case character</li>
        <li style={ { color: verifyUpperCase(passwordInput) ? 'red' : 'green'} }>1 upper case character</li>
        <li style={ { color: verifySpecial(passwordInput) ? 'red' : 'green'} }>1 special character</li>
        <li style={ { color: verifyPassLength(passwordInput) ? 'red' : 'green'} }>8-16 characters</li>
      </ul>
    </>
  )
}

export default PasswordInput;