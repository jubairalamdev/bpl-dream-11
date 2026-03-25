import React from 'react';
import logo from '../../assets/logo.png';
import { CirclePoundSterling, Paintbrush } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ coin }) => {
    return (
        <div className='fixed w-full pt-5 px-5 xl:px-0'>
            <div className="navbar max-w-330 mx-auto p-4 rounded-2xl bg-base-100/70 backdrop-blur-lg border-[0.5px] border-base-content/20">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-base-content/60 space-x-5">
                        <li className='menu-items'><a>Home</a></li>
                        <li className='menu-items'><a>Fixture</a></li>
                        <li className='menu-items'><a>Teams</a></li>
                        <li className='menu-items'><a>Schedules</a></li>
                        <li>
                            <label className="swap swap-rotate py-1 px-2 brand-bg text-neutral-700 rounded-full">
                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" className="theme-controller" value="dark" />

                                {/* sun icon */}
                                <Paintbrush  />

                                {/* moon icon */}
                                <Paintbrush  />
                            </label>
                        </li>
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