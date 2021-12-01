import './App.css';
import Finiancialsystem from './components/Finiancialsyatem';
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Forntier from './components/Forntier';
import Coin from './components/Coin';
function App() {
  return (
    <div className="App">
  <Navbar />
   <Welcome />
   <Finiancialsystem />
   <Forntier />
   <Coin />
    </div>
  );
}

export default App;
