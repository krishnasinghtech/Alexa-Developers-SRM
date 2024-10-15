import { useState, useEffect } from "react";
import eventPoster1 from "../assets/eventPoster1.jpg";

function Events() {
    const [showMore, setShowMore] = useState(false);
    const [visibleEventDescriptions, setVisibleEventDescriptions] = useState([]);

    const events = [
        { id: 1, title: "Tech Conference 2024", date: "Jan 15, 2024", image: eventPoster1, description: "Join us for a day of tech insights and networking." },
        { id: 2, title: "Creative Summit", date: "Feb 20, 2024", image: eventPoster1, description: "A gathering of creative minds sharing ideas." },
        { id: 3, title: "Startup Workshop", date: "Mar 10, 2024", image: eventPoster1, description: "Learn how to launch your startup effectively." },
        { id: 4, title: "Hackathon", date: "Apr 5, 2024", image: eventPoster1, description: "Compete to create the best tech solution." },
        { id: 5, title: "Cybersecurity Seminar", date: "Apr 15, 2024", image: eventPoster1, description: "Explore the latest in cybersecurity." },
        { id: 6, title: "AI Conference", date: "May 5, 2024", image: eventPoster1, description: "Dive into the future of AI technology." },
        { id: 7, title: "Data Science Expo", date: "Jun 5, 2024", image: eventPoster1, description: "Discover data science innovations." },
    ];

    const displayedEvents = showMore ? events : events.slice(0, 6);

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            if (index < displayedEvents.length) {
                setVisibleEventDescriptions(prev => [...prev, displayedEvents[index]]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 1000); // Adjust timing as needed

        return () => clearInterval(interval);
    }, [displayedEvents]);

    return (
        <div className="bg-background py-12">
            <div className="flex justify-center mb-10">
                <span className="text-accent1 text-center text-3xl font-medium border-b-2 border-accent1 pb-2">
                    Our Events
                </span>
            </div>

            <div className="relative">
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 sm:px-8 ${!showMore ? 'overflow-hidden max-h-[650px]' : ''}`}>
                    {visibleEventDescriptions.map(event => (
                        <div key={event.id} className="text-center flex justify-around items-center relative">
                            <div className="flex flex-col">
                                <div className="w-full max-w-[400px] h-[250px] sm:h-[300px] overflow-hidden rounded-xl mx-auto relative">
                                    <img 
                                        className="w-400 h-200 object-cover shadow-lg transition-transform transform hover:scale-105"
                                        src={event.image} 
                                        alt={event.title} 
                                    />
                                </div>
                                <div className="flex justify-around mt-2">
                                    <div>
                                        <h3 className="text-heading font-heading text-lg sm:text-xl">{event.title}</h3>
                                        <p className="text-text font-text text-sm sm:text-base">{event.date}</p>
                                    </div>
                                    <button className="bg-transparent text-accent1 text-lg sm:text-2xl rounded-lg transition-transform transform hover:scale-105">Checkout</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {!showMore && (
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
                )}
            </div>

            {events.length > 6 && (
                <div className="flex justify-center mt-8">
                    <button 
                        className="bg-accent1 text-white px-6 py-2 rounded-lg transition-transform transform hover:scale-105"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'Show Less' : 'See More'}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Events;
