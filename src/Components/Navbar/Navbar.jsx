import React from 'react';
import logo from '../../assets/logo.png';
import { CirclePoundSterling } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='fixed w-full pt-5'>
            <div className="navbar max-w-330 mx-auto p-0 bg-base-100">
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
                                <span className='font-semibold'>0 Coin</span>
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