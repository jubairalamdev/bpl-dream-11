import React, { Suspense, use } from 'react';
import './AvailablePlayers.css'
import PlayerAvailable from '../PlayerAvailable/PlayerAvailable';
import axios from 'axios';
import CardSkeleton from '../CardSkeleton/CardSkeleton';

const playersDataPromise = axios.get("/db/db.json");

const AvailablePlayers = ({handleTabs, selectedPlayers, addPlayer}) => {

    const playersData = use(playersDataPromise);

    return (
        <div className='max-w-330 mx-auto mt-16'>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-2xl'>Available Players</h2>
                <div className='flex'>
                    <button className="btn active-btn rounded-bl-xl rounded-tl-xl" onClick={()=>{handleTabs("Available")}}>
                        Available
                    </button>
                    <button className="btn inactive-btn rounded-br-xl rounded-tr-xl" onClick={()=>{handleTabs("Selected")}}>
                        Selected<span>({selectedPlayers.length})</span>
                    </button>
                </div>
            </div>
            <div className='mt-8 grid grid-cols-3 gap-6'>
                <Suspense fallback={<CardSkeleton></CardSkeleton>}>
                    {
                        playersData.data.map(player => <PlayerAvailable addPlayer={addPlayer} key={player.id} player={player} />)
                    }
                </Suspense>
                
            </div>
        </div>
    );
};

export default AvailablePlayers;