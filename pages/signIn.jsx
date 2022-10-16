import { useRouter } from 'next/router';
import { useContext } from 'react';
import context from '../context/context';
import SignInButton from '../components/Login/SignInButton';
import { CustomForm, CustomPaper, CustomParagraph, CustomStack } from '../styles/LoginForm';
import { useState } from 'react';
import LoginInputs from '../components/Login/LoginInputs';
import Link from '@mui/material/Link';
import supabase from '../utils/supabaseClient';
import createJWT from '../utils/createJWT';

function SignIn() {
  const router = useRouter();
  const { genericState, setHasWrongPass } = useContext(context);
  const [ isRegistered, setIsRegistered ] = useState(true)
  const onSubmitClick = async (e) => {
    e.preventDefault()
    const { data: user } = await supabase
      .from('users')
      .select("*")
      .eq('email', genericState.emailInput)
    if (!user[ 0 ]) return setIsRegistered(false);
    if (user[ 0 ].password !== genericState.passwordInput) return setHasWrongPass(true);
    const jwt = createJWT(user[ 0 ].id)
    localStorage.setItem('loggedUser', JSON.stringify(jwt));
  };

  return (
    <CustomForm onSubmit={onSubmitClick}>
      <CustomPaper>
        <CustomStack spacing={2.5}>
          <h1>weBook</h1>

          <LoginInputs />
          <SignInButton />

          {!isRegistered && (
            <>
              <CustomParagraph>It seems you are not registered, you can
                <Link href='/signUp'> sign up </Link>
                right now! It will only take a few minutes :)
              </CustomParagraph>
            </>
          )}

        </CustomStack>
      </CustomPaper>
    </CustomForm>
  )
}

export default SignIn;