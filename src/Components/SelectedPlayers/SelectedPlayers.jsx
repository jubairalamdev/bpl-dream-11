import React from 'react';
import { Suspense, use } from 'react';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import axios from 'axios'
import PlayerSelected from '../PlayerSelected/PlayerSelected';
import NoPlayersFound from '../NoPlayersFound/NoPlayersFound';

const playersDataPromise = axios.get("https://gist.githubusercontent.com/jubairalamdev/b258cd559527f354d7d3451ae3a42283/raw/0d4bfb19191ae5e80ba108d28b94a421d8a783fb/gistfile1.txt");

const SelectedPlayers = ({ handleTabs, selectedPlayers, removePlayer, availableTab }) => {

    const playersData = use(playersDataPromise);

    return (
        <div className='mt-16'>
            <div className='flex justify-between flex-col-reverse md:flex-row items-center gap-3'>
                <h2 className='font-semibold text-2xl'>Players Selected ({selectedPlayers.length}/{playersData.data.length})</h2>
                <div className='flex'>
                    <button className={`btn ${availableTab ? 'active-btn' : 'inactive-btn'} text-base-content rounded-bl-xl rounded-tl-xl`} onClick={()=>{handleTabs("Available")}}>
                        Available
                    </button>
                    <button className={`btn ${availableTab ? 'inactive-btn' : 'active-btn'} text-base-content rounded-br-xl rounded-tr-xl`} onClick={()=>{handleTabs("Selected")}}>
                        Selected<span>({selectedPlayers.length})</span>
                    </button>
                </div>
            </div>
            <div className='mt-8 grid grid-cols-1 gap-6'>
                <Suspense fallback={<CardSkeleton></CardSkeleton>}>
                    {
                        selectedPlayers.length > 0
                            ? selectedPlayers.map(player => <PlayerSelected player={player} removePlayer={removePlayer}></PlayerSelected>)
                            : <NoPlayersFound></NoPlayersFound>
                    }
                </Suspense>
            </div>
            <button className='p-1 rounded-2xl border-2 border-yellow-300 mt-10' onClick={() => { handleTabs("Available") }}>
                <span className='btn brand-bg shadow-none border-0 rounded-xl font-bold py-4 text-neutral-900'>Add More Players</span>
            </button>
        </div>
    );
};

export default SelectedPlayers;