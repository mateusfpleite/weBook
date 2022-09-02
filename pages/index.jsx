import { useRouter } from 'next/router';
import useGenericState from '../hooks/useGenericState';
import SignInButton from '../components/SignInButton';
import { useContext } from 'react';
import context from '../context/context';

function Login() {
  const router = useRouter();

  const { genericState, setGenericState } = useContext(context);

  console.log(genericState)

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