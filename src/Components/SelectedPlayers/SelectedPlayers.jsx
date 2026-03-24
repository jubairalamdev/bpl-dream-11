import React from 'react';
import { Suspense, use } from 'react';
import CardSkeleton from '../CardSkeleton/CardSkeleton';
import axios from 'axios'
import PlayerSelected from '../PlayerSelected/PlayerSelected';

const playersDataPromise = axios.get("/db/db.json");

const SelectedPlayers = ({ handleTabs, selectedPlayers }) => {

    const playersData = use(playersDataPromise);

    return (
        <div className='max-w-330 mx-auto mt-16'>
            <div className='flex justify-between'>
                <h2 className='font-semibold text-2xl'>Players Selected ({selectedPlayers.length}/{playersData.data.length})</h2>
                <div className='flex'>
                    <button className="btn active-btn rounded-bl-xl rounded-tl-xl" onClick={() => { handleTabs("Available") }}>
                        Available
                    </button>
                    <button className="btn inactive-btn rounded-br-xl rounded-tr-xl" onClick={() => { handleTabs("Selected") }}>
                        Selected<span>({selectedPlayers.length})</span>
                    </button>
                </div>
            </div>
            <div className='mt-8 grid grid-cols-1 gap-6'>
                <Suspense fallback={<CardSkeleton></CardSkeleton>}>
                    {
                        selectedPlayers.map(player=><PlayerSelected player={player}></PlayerSelected>)
                    }
                </Suspense>
            </div>
            <button className='p-1 rounded-2xl border-2 border-yellow-300 mt-10'  onClick={() => { handleTabs("Available") }}>
                <span className='btn brand-bg shadow-none border-0 rounded-xl font-bold py-4'>Add More Players</span>
            </button>
        </div>
    );
};

export default SelectedPlayers;