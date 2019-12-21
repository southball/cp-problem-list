import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import StateContext from './state/state-context';

import Problem from './Problem';

export default function ProblemList() {
  const state = useContext(StateContext);

  function addProblem() {
    state.set({ problems: state.problems.concat({ judge: '', problemId: '', name: '', url: '', difficulty: '' }) });
  }

  return (
    <>
      <Button variant='dark' onClick={addProblem} style={{ marginBottom: '8px' }}>
        Add Problem
      </Button>

      {state.problems.map((problem, id) => (
        <Problem problem={problem} id={id} key={id} />
      ))}
    </>
  );
}