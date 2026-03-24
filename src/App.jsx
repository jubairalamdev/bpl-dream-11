import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'

function App() {

  const [availableTab, setAvailableTab] = useState(true);

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const [coin, setCoin] = useState(9999999);

  const addPlayer = (player) => {
    if (coin >= player.price_usd) {
      setCoin(coin - player.price_usd);
      const newPlayers = [...selectedPlayers, player];
      setSelectedPlayers(newPlayers);
      const selectPlayerBtn = document.getElementById(`selectPlayerBtn-${player.id}`);
      selectPlayerBtn.classList.replace('active-btn', 'inactive-btn');
      selectPlayerBtn.innerText = "Player Chosen";
      selectPlayerBtn.disabled = true;
    }
    else {
      const coinError = document.getElementById("coinError");
      coinError.classList.replace('translate-y-20', 'translate-y-0')
      setTimeout(() => {
        coinError.classList.replace('translate-y-0', 'translate-y-20');
      }, 2000);
    }
  }

  const addCoin = () => {
    setCoin(coin + 200000)
  }

  const handleTabs = (tabName) => {
    if (tabName === "Available") {
      setAvailableTab(true);
    }
    if (tabName === "Selected") {
      setAvailableTab(false);
    }
  }

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner addCoin={addCoin}></Banner>
      {
        availableTab
          ? <AvailablePlayers handleTabs={handleTabs} selectedPlayers={selectedPlayers} addPlayer={addPlayer}></AvailablePlayers>
          : <SelectedPlayers handleTabs={handleTabs} selectedPlayers={selectedPlayers}></SelectedPlayers>
      }
      <Footer></Footer>
      <div className=' fixed z-50 bottom-6 w-full translate-y-20 text-base-100 transition' id="coinError">
        <div role="alert" className="bg-error flex p-4 rounded-xl w-fit mx-auto gap-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Error! Not Enough Coins</span>
        </div>
      </div>

    </>
  )
}

export default App
