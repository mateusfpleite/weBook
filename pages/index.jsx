import { useRouter } from 'next/router';
import useGenericState from '../hooks/useGenericState';
import SignInButton from '../components/SignInButton';
import { useContext } from 'react';
import context from '../context/context';

function Login() {
  const router = useRouter();

  const { genericState, setGenericState } = useContext(context);

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
      <div>
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
      </div>
      <SignInButton />
    </form>
  )
}

export default Login;