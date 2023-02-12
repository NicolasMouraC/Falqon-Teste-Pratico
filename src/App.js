import Header from './components/Header.js';
import Plans from './components/Plans.js';
import TravelInfo from './components/TravelInfo.js';
import './App.css';

function App() {
  document.body.classList.add("bg-darkPurple");
  return (
    <div>
      <Header />
      <Plans />
      <TravelInfo />
    </div>
  )
}

export default App;
