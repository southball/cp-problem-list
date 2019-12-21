import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from './Navbar';
import ProblemList from './ProblemList';
import Options from './Options';
import Help from './Help';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: '70px' }}>
        <h2>
          <a className='anchor' id='list'></a>
          Problems List
        </h2>
        <ProblemList />

        <hr />

        <h2>
          <a className='anchor' id='options'></a>
          Options
        </h2>
        <Options />

        <hr />

        <h2>
          <a className='anchor' id='help'></a>
          Help
        </h2>
        <Help />
      </Container>
    </>
  );
}

export default App;
