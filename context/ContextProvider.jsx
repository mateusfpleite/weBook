import useGenericState from '../hooks/useGenericState';
import Context from './context';
import useSetHasWrongPass from '../hooks/useSetHasWrongPass';
import { useState } from 'react';

function ContextProvider({ children }) {
  const INITIAL_STATE = {
    emailInput: '',
    passwordInput: '',
  }

  const [ genericState, setGenericState ] = useGenericState(INITIAL_STATE);

  const [ hasWrongPass, setHasWrongPass ] = useSetHasWrongPass(false)

  const [ profileId, setProfileId ] = useState('');

  const allValues = {
    genericState,
    setGenericState,
    hasWrongPass,
    setHasWrongPass,
    profileId,
    setProfileId
  };

  return (

    <Context.Provider value={allValues}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;