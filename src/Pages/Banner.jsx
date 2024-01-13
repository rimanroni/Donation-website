import React from 'react';

const Banner = () => {
    return (
        <div>
             <header className="relative flex items-center px-4 justify-center h-screen mb-12 overflow-hidden">
                <div
                    className="relative z-30 p-5  text-white  bg-gray-700 bg-opacity-100 rounded-xl"
                >
                    <input type="text" placeholder='Enter Your Search ' className='border-b-2 bg-transparent px-2 text-white outline-none ring-0 placeholder:text-white bg-green-400' />
                    <button className='ring-2  mt-4 lg:mt-0 ring-white px-2 rounded py-1 text-white ml-2'>Seaching</button>
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
                >
                    <source
                       src=' /donation.mp4'
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </header>

        </div>
    );
};

export default Banner;