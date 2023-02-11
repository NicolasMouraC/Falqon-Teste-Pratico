import Header from './components/Header.js';
import Plans from './components/Plans.js';
import './App.css';

function App() {
  document.body.classList.add("bg-darkPurple");
  return (
    <div>
      <Header />
      <Plans />
    </div>
  )
}

export default App;
