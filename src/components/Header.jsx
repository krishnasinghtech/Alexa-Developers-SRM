import { useState } from "react";
import { Link } from "react-router-dom";
import alexa from '../assets/alexa.png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="bg-background text-xl text-text p-4 font-medium flex justify-between items-center sticky top-0 z-50">
            <div className='flex items-center'>
                <div className="text-xl font-bold pb-1 text-heading">Alexa Developers SRM</div>
                <img 
                    src={alexa}
                    alt="Alexa Logo" 
                    className="w-7 h-7 ml-1 rounded-full"
                />
            </div>

            {/* Horizontal Navigation for Large Screens */}
            <div className="hidden lg:flex space-x-6">
                <Link to="/" className="hover:text-accent2 cursor-pointer">Home</Link>
                <Link to="/events" className="hover:text-accent2 cursor-pointer">Events</Link>
                <Link to="/about" className="hover:text-accent2 cursor-pointer">About</Link>
                <Link to="/domain" className="hover:text-accent2 cursor-pointer">Domains</Link>
                <Link to="/apply" className="hover:text-accent2 cursor-pointer">Apply Now</Link>
            </div>

            {/* Burger Menu Icon */}
            <div className="block lg:hidden">
                <button onClick={toggleMenu} className="text-accent2 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Centered Menu for Small Screens */}
            <div className={`fixed inset-0 bg-background transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 z-0 pointer-events-none'}`}>
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center ${isMenuOpen ? 'visible' : 'invisible'}`}>
                    <button onClick={toggleMenu} className="self-end mb-4 text-accent2 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <Link to="/" onClick={toggleMenu} className="hover:text-accent2 cursor-pointer py-2 text-xl">Home</Link>
                    <Link to="/events" onClick={toggleMenu} className="hover:text-accent2 cursor-pointer py-2 text-xl">Events</Link>
                    <Link to="/about" onClick={toggleMenu} className="hover:text-accent2 cursor-pointer py-2 text-xl">About</Link>
                    <Link to="/domain" onClick={toggleMenu} className="hover:text-accent2 cursor-pointer py-2 text-xl">Domains</Link>
                    <Link to="/apply" onClick={toggleMenu} className="hover:text-accent2 cursor-pointer py-2 text-xl">Apply Now</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
