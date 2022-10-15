import { useState } from 'react';

const useSetHasWrongPass = (INITIAL_STATE) => {
  const [hasWrongPassword, setHasWrongPassword] = useState(INITIAL_STATE);
  
  const setWrongPass = (state) => setHasWrongPassword(state)

  return [hasWrongPassword, setWrongPass]
};

export default useSetHasWrongPass;
