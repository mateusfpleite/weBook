import useGenericState from '../hooks/useGenericState';
import Context from './context';

function ContextProvider({ children }) {
  const INITIAL_STATE = {
    emailInput: '',
    passwordInput: '',
  }

  const [ genericState, setGenericState ] = useGenericState(INITIAL_STATE);

  const allValues = {
    genericState,
    setGenericState,
  };

  return (

    <Context.Provider value={allValues}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;