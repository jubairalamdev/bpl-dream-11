import React from 'react';
import logo from '../../assets/logo.png';
import { CirclePoundSterling } from 'lucide-react';

const Navbar = ({coin}) => {
    return (
        <div className='fixed w-full pt-5'>
            <div className="navbar max-w-330 mx-auto p-4 rounded-2xl bg-base-100/70 backdrop-blur-lg border-[0.5px] border-base-content/20">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-base-content/60 space-x-5">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                        <li>
                            <div className="badge border-base-content/30 p-4">
                                <span className='font-semibold'>{coin} Coin</span>
                                <span className='text-warning'>
                                    <CirclePoundSterling />
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;