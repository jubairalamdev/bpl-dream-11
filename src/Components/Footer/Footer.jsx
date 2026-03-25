import React from 'react';
import bannerBg from '../../assets/bg-shadow.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='mt-12 relative'>

            <div className='bg-base-100/40 max-w-212.5 p-6 border-4 border-base-100 rounded-4xl mx-auto relative z-30'>
                <div className=''>
                    <div className='bg-base-100 text-base-content rounded-xl'>
                        <div className="min-h-84 flex justify-center items-center space-y-6 flex-col rounded-xl bg-cover  px-5 text-center" style={{ backgroundImage: `url(${bannerBg})` }}>
                            <h2 className='font-bold text-4xl text-base-content'>Subscribe to our Newsletter</h2>
                            <p className='font-light text-xl text-base-content/70'>Get the latest updates and news right in your inbox!</p>
                            <div>
                                <div className="join space-x-2 flex flex-wrap justify-center gap-2">
                                    <div>
                                        <label className="input validator join-item w-62.5 p-4 h-fit rounded-xl">
                                            <input type="email" placeholder="Enter Your email address" required />
                                        </label>
                                        <div className="validator-hint hidden">Enter valid email address</div>
                                    </div>
                                    <button className="btn btn-neutral rounded-xl h-13 subscribe-btn border-none shadow-none text-base-content font-bold">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-slate-950 pt-46 -mt-42 z-20'>
                <footer className="footer sm:footer-horizontal p-10 max-w-330 mx-auto text-neutral-50">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <form>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="w-80">
                            <label>Subscribe to our newsletter for the latest updates.</label>
                            <div>
                                <div className="join  text-base-content/90 mt-2">
                                    <div>
                                        <label className="input validator join-item w-62.5 rounded-bl-xl rounded-tl-xl">
                                            <input type="email" placeholder="Enter Your email address" required />
                                        </label>
                                        <div className="validator-hint hidden">Enter valid email address</div>
                                    </div>
                                    <button className="btn btn-neutral rounded-br-xl rounded-tr-xl subscribe-btn border-none shadow-none text-base-content font-bold">Subscribe</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </footer>
            </div>
        </div>
    );
};

export default Footer;