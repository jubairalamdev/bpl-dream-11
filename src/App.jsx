import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import AvailablePlayers from './Components/AvailablePlayers/AvailablePlayers'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'
import { toast, ToastContainer } from 'react-toastify'

function App() {

  const [availableTab, setAvailableTab] = useState(true);

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const [coin, setCoin] = useState(9999999);

  const addPlayer = (player) => {
    if (coin >= player.price_usd) {
      setCoin(coin - player.price_usd);
      const newPlayers = [...selectedPlayers, player];
      setSelectedPlayers(newPlayers);
      toast.success("Player Added Successfully!")
    }
    else {
      toast.warning("Not Enough Coins")
    }
  }

  const removePlayer = (player) => {
    const updatedList = selectedPlayers.filter(p => p !== player);
    setSelectedPlayers(updatedList);
    toast.success("Player Removed Successfully!")
  }

  const addCoin = () => {
    setCoin(coin + 200000)
    toast.success("Added 200000 Coins")
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
      <main className='max-w-330 xl:px-0 px-5 mx-auto '>
        <Banner addCoin={addCoin}></Banner>
        {
          availableTab
            ? <AvailablePlayers handleTabs={handleTabs} availableTab={availableTab} selectedPlayers={selectedPlayers} addPlayer={addPlayer}></AvailablePlayers>
            : <SelectedPlayers handleTabs={handleTabs} availableTab={availableTab} selectedPlayers={selectedPlayers} removePlayer={removePlayer}></SelectedPlayers>
        }
      </main>
      <Footer></Footer>
      <ToastContainer theme="dark" autoClose={3000} position="bottom-center"></ToastContainer>
    </>
  )
}

export default App
