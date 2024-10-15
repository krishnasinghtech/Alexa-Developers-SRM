import { useEffect, useState } from 'react';
import alexa from '../assets/alexa.png';

function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 700);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative bg-background h-[70vh] flex flex-col items-center justify-center text-heading py-10 px-4 sm:py-20 sm:px-8">
            <div className="absolute inset-0 bg-background"></div>

            <img 
                src={alexa}
                alt="Alexa Logo" 
                className={`absolute blur-sm w-[120%] sm:w-[60%] lg:w-[40%] h-auto max-w-[600px] select-none rounded-full transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-50' : 'opacity-0'}`} 
                draggable="false"
            />

            <div className={`absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center transition-transform duration-1000 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-10'}`}>
                <div className="text-accent1 text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Alexa Developers SRM</div>
                <div className="text-lg sm:text-xl italic">“Voices United, Tech Amplified”</div>
            </div>
        </div>
    );
}

export default Hero;
