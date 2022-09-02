import { useRouter } from 'next/router';
import useGenericState from '../hooks/useGenericState';

function Login() {
  const router = useRouter();

  const INITIAL_STATE = {
    emailInput: '',
    passwordInput: '',
  }
  const [ genericState, setGenericState ] = useGenericState(INITIAL_STATE);

  const onSubmitClick = (e) => {
    e.preventDefault()
    router.push('/home')
  }

  const verifyEmailAndPassword = (email, password) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const passwordRegex = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[a-z].*[a-z].*[a-z]).{8,16}$/;
    return !(emailRegex.test(email)) || !(passwordRegex.test(password));
  };

  return (
    <form onSubmit={onSubmitClick}>
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
      <button
        type="submit"
        disabled={verifyEmailAndPassword(genericState.emailInput, genericState.passwordInput)}
      >
        Sign In
      </button>
    </form>
  )
}

export default Login;