import React from 'react';
import errorPng from '../../assets/alert-error.png';

const NoPlayersFound = () => {
    return (
        <div class="py-16 flex flex-col items-center text-center bg-base-300 rounded-2xl p-5">
            <img src={errorPng} class="mb-5" />
            <h2 class="text-4xl font-semibold mt-3 hind-siliguri-font">No Players!</h2>
            <p class="text-lg text-gray-600 hind-siliguri-font">No Players are found. Is there a bug somewhere?</p>
        </div>
    );
};

export default NoPlayersFound;