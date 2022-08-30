import { useState } from 'react';

function useGenericState(initial_state) {
  const [genericState, setGenericState] = useState(initial_state);

  const setState = ({ target: { name, value }}) => setGenericState((prevState) => ({ ...prevState, [name]: value }));

  return [genericState, setState];
}

export default useGenericState;