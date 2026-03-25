import React from 'react';
import bannerBg from '../../assets/bg-shadow.png'
import bannerImg from '../../assets/banner-main.png'

const Banner = ({addCoin}) => {
    return (
        <div className='pt-30'>
            <div className='bg-base-content text-base-100 rounded-4xl'>
                <div className="min-h-136.25 flex justify-center items-center space-y-6 flex-col rounded-4xl px-5 text-center" style={{ backgroundImage: `url(${bannerBg})` }}>
                    <img src={bannerImg} alt="" className='h-fit' />
                    <h2 className='font-bold text-2xl lg:text-4xl text-base-100 md:text-3xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                    <p className='font-light text-xl lg:text-2xl text-base-300/70'>Beyond Boundaries Beyond Limits</p>
                        <button className='p-1 rounded-2xl border-2 border-yellow-300'>
                            <span className='btn brand-bg shadow-none border-0 rounded-xl font-bold py-4 text-neutral-900' onClick={()=>{addCoin()}}>Claim Free Credit</span>
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;