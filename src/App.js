import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';
import ProblemList from './ProblemList';
import Options from './Options';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: '70px' }}>
        <h2>
          <a id='list'></a>
          Problems List
        </h2>
        <ProblemList />

        <hr />

        <h2>
          <a id='options'></a>
          Options
        </h2>
        <Options />
      </Container>
    </>
  );
}

export default App;
