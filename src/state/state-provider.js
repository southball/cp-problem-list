import React, { useState, useEffect } from 'react';
import StateContext from './state-context';

const LOCAL_STORAGE_ID = 'cp-problems.app-state';
const INITIAL_STATE = {
  problems: [],
  options: {
    showDifficulty: true,
    showAbbreviation: true,
  },
};

export default function StateProvider({ children }) {
  const initialState =
    JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_ID)) || INITIAL_STATE;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_ID, JSON.stringify(state))
  }, [state]);

  function partialSetState(delta) {
    setState({ ...state, ...delta });
  }

  return (
    <StateContext.Provider value={{ ...state, set: partialSetState }}>
      {children}
    </StateContext.Provider>
  );
}