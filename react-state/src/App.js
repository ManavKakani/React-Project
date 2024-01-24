import { useState } from 'react';
import './App.css';
import ClickHandler from './ClickHandler';


function App() {


  return <ClickHandler />

  const [count, setCount] = useState(1);

  function increase5() {
    setCount(count + 1);
    // setCount(count + 4);
    setCount(pre => {
      console.log(pre, 'pre');
      return "abcgcg"
    });
  }


  console.log(count);
  return (
    <div>
      <div><h1>{count}</h1></div>
      <button onClick={() => { setCount(count + 1) }}> increse 1</button>
      <button onClick={() => { setCount(count + 2) }}> increse 2</button>
      <button onClick={increase5}> increse 5</button>

      {/* <button onClick={() => { count = count + 1 }}> increse 1</button>
      <button onClick={() => { count = count + 2; console.log(count); }}> increse 2</button> */}
    </div>
  );
}

export default App;
