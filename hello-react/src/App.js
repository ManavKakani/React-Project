import './App.css';
import Container from './components/Card';
import { ProfileImage } from './components/ProfileImage';
import Footer from './components/footer';

const dummyData = [
  {
    id: 1,
    username: 'abc',
    tagline: 'xyz',
    imgurl: "",
    isActive: true
  },
  {
    id: 2,
    username: 'abc2',
    tagline: 'xyz2',
    imgurl: "",
    isActive: false
  },
  {
    id: 3,
    username: 'abc3',
    tagline: 'xyz3',
    imgurl: "",
    isActive: true
  },
]

function App() {

  const name = "abxc";

  return (
    <Container />

  )
}

export default App;