import useGenericState from "../../hooks/useGenericState";

function Login() {
  const INITIAL_STATE = {
    emailInput: '',
    passwordInput: '',
  }
  const [genericState, setGenericState] = useGenericState(INITIAL_STATE);

  return (
    <div>
      <label htmlFor="emailInput">
        Email:
        <input
          name="emailInput"
          id="emailInput"
          type="text"
          onChange={ setGenericState }
          value={ genericState.emailInput }
        />
        <input 
        type="password"
        name="passwordInput"
        id="passwordInput"
        onChange={ setGenericState }
        value={ genericState.passwordInput }
        />
      </label>
    </div>
  )
}

export default Login;