import React, {useRef} from 'react';
import Card from './components/Card';

function App() {
  return (
    <>
      <h1>App Component</h1>
      <hr />

      <Card unique="true" />
    </>
  );
}

export default App;
