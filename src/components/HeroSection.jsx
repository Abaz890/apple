import React from 'react';

const HeroSection = () => {
    const videoSrc = "/large.mp4";

    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center text-white bg-black overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        flex flex-col items-center text-center z-20 px-4"> 
                
                <h2 className="text-xl md:text-2xl font-semibold opacity-90 mb-2">
                    MacBook Pro
                </h2>
                
                <h1 className="masked text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8"> 
                    Built for Apple Intelligence.
                </h1>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10"> 
                <video
                    className="w-full max-w-5xl h-auto object-contain" 
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline 
                    preload="auto"
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 
                        flex flex-col items-center text-center z-20 space-y-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200 text-lg">
                    Buy
                </button>

                <p className="text-sm md:text-base opacity-80">
                    From $1599 or $133.25/mo. for 12 mo.**
                </p>
            </div>
        </div>
    );
};

export default HeroSection;