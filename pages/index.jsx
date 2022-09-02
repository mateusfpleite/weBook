import { useRouter } from 'next/router';
import useGenericState from '../hooks/useGenericState';
import SignInButton from '../components/SignInButton';

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
      {/* <SignInButton /> */}
    </form>
  )
}

export default Login;