import React, { Suspense, use } from 'react';
import './AvailablePlayers.css'
import PlayerAvailable from '../PlayerAvailable/PlayerAvailable';
import axios from 'axios';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import NoPlayersFound from '../NoPlayersFound/NoPlayersFound';

const playersDataPromise = axios.get("https://gist.githubusercontent.com/jubairalamdev/b258cd559527f354d7d3451ae3a42283/raw/0d4bfb19191ae5e80ba108d28b94a421d8a783fb/gistfile1.txt");

const AvailablePlayers = ({handleTabs, selectedPlayers, addPlayer, availableTab}) => {

    const playersData = use(playersDataPromise);

    return (
        <div className='mt-16'>
            <div className='flex justify-between flex-col-reverse md:flex-row items-center gap-3'>
                <h2 className='font-semibold text-2xl'>Available Players</h2>
                <div className='flex'>
                    <button className={`btn ${availableTab ? 'active-btn' : 'inactive-btn'} rounded-bl-xl text-base-content rounded-tl-xl`} onClick={()=>{handleTabs("Available")}}>
                        Available
                    </button>
                    <button className={`btn ${availableTab ? 'inactive-btn' : 'active-btn'} rounded-br-xl text-base-content rounded-tr-xl`} onClick={()=>{handleTabs("Selected")}}>
                        Selected<span>({selectedPlayers.length})</span>
                    </button>
                </div>
            </div>
            <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 sm:grid-cols-2'>
                <Suspense fallback={<CardSkeleton></CardSkeleton>}>
                    {
                        playersData.data.length>0
                        ? playersData.data.map(player => <PlayerAvailable selectedPlayers={selectedPlayers} addPlayer={addPlayer} key={player.id} player={player} />)
                        : <NoPlayersFound></NoPlayersFound>
                    }
                </Suspense>
                
            </div>
        </div>
    );
};

export default AvailablePlayers;