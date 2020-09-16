import React from 'react';
import logo from './logo.svg';
import './App.css';

import Greetings from './Greeting';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} 안뇽`);
    alert(`${ name } 안농`);
  };
  return (
    <Greetings
      name="Typescript" 
      optional="선택사항입니다."
      onClick={ onClick }
    />
  );
}

export default App;
