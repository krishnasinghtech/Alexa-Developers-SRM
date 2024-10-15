import { Link } from "react-router-dom";
import alexa from '../assets/alexa.png';

function Header() {
    return (
        <div className="bg-background text-xl text-text p-4 font-medium flex justify-around items-center sticky top-0 z-50">
            <div className='flex items-center'>
                <div className="text-xl font-bold pb-1 text-heading">Alexa Developers SRM</div>
                <img 
                    src={alexa}
                    alt="Alexa Logo" 
                    className="w-11 h-11 rounded-full"
                />
            </div>
            <div className="flex"> 
                <Link to="/" className="hover:text-accent2 cursor-pointer px-6">Home</Link>
                <Link to="/events" className="hover:text-accent2 cursor-pointer px-6">Events</Link>
                <Link to="/about" className="hover:text-accent2 cursor-pointer px-6">About</Link>
                <Link to="/domain" className="hover:text-accent2 cursor-pointer px-6">Domains</Link>
                <Link to="/apply" className="hover:text-accent2 cursor-pointer px-6">Apply Now</Link>
            </div>
        </div>
    );
}

export default Header;
