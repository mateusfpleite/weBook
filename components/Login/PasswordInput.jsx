import { useContext } from "react";
import context from "../../context/context";

function PasswordInput() {
  const { genericState, setGenericState } = useContext(context);

  const { passwordInput } = genericState;
  return (
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
  )
}

export default PasswordInput;