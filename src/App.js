import React from 'react';
import Congrats from './congrats';
import GuessedWords from './guessedWords';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[{
        guessedWord: 'apple',letterMatchCount: 3
      }]} />
    </div>
  );
}

export default App;
