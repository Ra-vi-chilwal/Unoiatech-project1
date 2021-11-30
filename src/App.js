import './App.css';
import Finiancialsystem from './components/Finiancialsyatem';
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
  <Navbar />
   <Welcome />
   <Finiancialsystem />
    </div>
  );
}

export default App;
