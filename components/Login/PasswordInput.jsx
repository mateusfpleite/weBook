import { useContext } from "react";
import context from "../../context/context";

function PasswordInput() {
  const { genericState, setGenericState } = useContext(context);

  return (
    <>
      <label htmlFor="passwordInput">
        Password:
        <input
          type="password"
          name="passwordInput"
          id="passwordInput"
          onChange={setGenericState}
          value={genericState.passwordInput}
        />
      </label>
      <p>Your password must contain at least:</p>
      <ul>
        <li>3 lower case character</li>
        <li>1 upper case character</li>
        <li>1 special character</li>
        <li>8-16 characters</li>
      </ul>
    </>
  )
}

export default PasswordInput;