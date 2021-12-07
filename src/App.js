import './App.css';
import Finiancialsystem from './components/Finiancialsyatem';
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Forntier from './components/Forntier';
import Coin from './components/Coin';
import DeFi from './components/DeFi';
import AlwaysReady from './components/AlwaysReady';
import Nrgyon from './components/Nrgyon';
import Staking from "./components/Staking";
import Rewards from "./components/Rewards";
function App() {
  return (
    <div className="App">
  <Navbar />
   <Welcome />
  <Finiancialsystem />
      <Forntier />
     <Coin />
    <DeFi /> 
     <AlwaysReady />
    <Nrgyon />  
    <Staking />
    <Rewards /> 
    </div>
  );
}

export default App;
