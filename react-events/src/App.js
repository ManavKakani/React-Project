import { useState } from 'react';
import './App.css';
import List from './components/List';
import LoginForm from './components/LoginForm';
import PataraContext from './components/use-contexts/pataro';
import Parent1 from './components/use-contexts/Parent1';

const init = [
  {
    name: 'Joe', work: 'freelance-developer',
    blogs: '54', websites: '32',
    hackathons: 'none', location: 'Morocco', id: '0',

  },
  {
    name: 'Janet', work: 'fullstacsk-developer',
    blogs: '34', websites: '12',
    hackathons: '6', location: 'Mozambique', id: '1',
  },
  {
    name: 'Janet', work: 'fullstack-developer1',
    blogs: '34', websites: '12',
    hackathons: '6', location: 'Mozambique', id: '2',
  },
];




function App() {

  const [applicants, setApplicants] = useState(init);

  const [count, setCount] = useState(0);

  let value = {
    count, setCount
  };

  return (
    <div className="App">
      {count}

      {/* <List applicants={applicants} setApplicants={setApplicants} /> */}
      <PataraContext.Provider value={value} >
        <Parent1 />
      </PataraContext.Provider>

      {/* <LoginForm /> */}
      {/* {renderList()}
      <button onClick={clickHandler()}>
        btn1
      </button> */}
    </div>
  );
}

export default App;
