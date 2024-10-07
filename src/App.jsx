import React, {useRef} from 'react';
import Card from './components/Card';

function App() {
  const ref = useRef(111)
  return (
    <>
      <h1>Learn React.JS</h1>
      <Card uqique={undefined} ref={ref} x={'z'}/>
    </>
  );
}

export default App;
