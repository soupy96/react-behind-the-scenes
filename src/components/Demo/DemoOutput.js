import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
  console.log('DEMO RUNNING');

  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

// for functional components, not class based
// React.memo optomize functional components
// memo tells reacts for this components that it gets as a argument, react should look at the props that this component gets and compare the new value it just got to the previous value that it previously had
// only if the value has changed the components will be re-executed/re-evaluted
// we dont want to use this for everything tho cause it needs to store the values for the previous and changed values for props. this has its own performance issues.
export default React.memo(DemoOutput);
