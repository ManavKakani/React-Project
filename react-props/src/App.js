import { useEffect, useState } from 'react';
import './App.css';
import Count from './components/Count';
import Drink from './components/Drink';

import Profile from './components/Profile';

let init = [
  {
    name: "Asdasd",
    age: 12
  },
  {
    name: "asdfsd",
    age: 122
  },
  {
    name: "aaswe  fxaw",
    age: 121
  },
]

function App() {

  const [persons, setPersons] = useState(init);

  return (
    <>
      <Drink name="tea" />
      <Drink name="coffee" />
      <Drink name="coffee" />
      <Drink name="coffee" />
      <Drink name="coffee" />

      <Count />
      {
        persons.map(per => <>
          <h1>{per.name}</h1>
          <h4>{per.age}</h4>
        </>)
      }
      {/* <Profile name="asdfas" border={true} address={address} />
      <Profile name="asdfas" avtarUrl='5cmyRGA' border={true} />
      <Profile name="asdfas" avtarUrl='OKS67lh' border={true} />
      <Profile name="asdfas" avtarUrl='1bX5QH6' border={true} /> */}
    </>
  );
}

export default App;
