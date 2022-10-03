import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  // using useCallback with an empty array of dependancies means that it will never change and therefore, always the same function object should be re-used when the App component is re-evaluated
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  // if the app component is re-evaluted all the child components will be re-evaluated as well
  return (
    <div className='app'>
      <h1>Hi there!</h1>
      {/* DemoOutput is not re-executed because false is always false. false === false */}
      <DemoOutput show={false} />
      {/* Button is re-executed with memo because a function is not the same as its own function even though its the same function both times. */}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
