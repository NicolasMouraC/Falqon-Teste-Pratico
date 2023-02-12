import Header from './components/Header.js';
import Plans from './components/Plans.js';
import TravelInfo from './components/TravelInfo.js';
import NavBar from './components/Navbar.js';
import './App.css';

function App() {
  document.body.classList.add("bg-backgroundColor");
  return (
    <div>
      <Header />
      <Plans />
      <TravelInfo />
      <NavBar/>
    </div>
  )
}

export default App;
