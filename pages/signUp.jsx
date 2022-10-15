import { useRouter } from 'next/router';
import { useContext } from 'react';
import context from '../context/context';
import PasswordInput from '../components/Login/PasswordInput';
import SignUpFields from '../components/Login/SignUpFIelds';

function SingUp() {
  const router = useRouter();

  const { genericState, setGenericState } = useContext(context);

  const signUpButton = (e) => {
    e.preventDefault();
    router.push('/');
  }

  return (
    <form onSubmit={signUpButton}>
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
      <PasswordInput />
      <SignUpFields passwordInput={genericState.passwordInput} />
      {/* button for signing up, and registering user in db */}
      <button type='submit'>Sign up</button>
    </form>
  )
}

export default SingUp;