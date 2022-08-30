import useGenericState from "../../hooks/useGenericState";
import Button from '@mui/material/Button';

function Login() {
  const INITIAL_STATE = {
    emailInput: '',
    passwordInput: '',
  }
  const [ genericState, setGenericState ] = useGenericState(INITIAL_STATE);

  return (
    <form onSubmit>
      <label htmlFor="emailInput">
        Email:
        <input
          name="emailInput"
          id="emailInput"
          type="text"
          onChange={setGenericState}
          value={genericState.emailInput}
        />
      </label>
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
    </form>
  )
}

export default Login;