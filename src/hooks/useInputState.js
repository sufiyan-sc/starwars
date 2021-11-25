import { useState } from 'react';

function useInputState(initialVal) {
  const [state, setState] = useState(initialVal);
  const handleChange = (event) => {
    setState(event.target.value);
  };
  return [state, handleChange];
}

export default useInputState;
