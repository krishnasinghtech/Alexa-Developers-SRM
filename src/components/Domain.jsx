import technicalSvg from "../assets/technical.svg";
import creativesSvg from "../assets/creatives.svg";
import eventsSvg from "../assets/events.svg";
import businessSvg from "../assets/business.svg";

function Domain() {
    return (
        <div className="bg-background px-5 sm:px-10 lg:px-40 py-10">
            <div className="flex justify-center mb-10">
                <span className="text-accent1 text-center text-2xl sm:text-3xl font-medium border-b-2 border-accent1 pb-2">
                    Our Domains
                </span>
            </div>

            <div className="flex flex-col items-center px-5 py-12">

                {/* Technical Domain */}
                <div className="flex flex-col md:flex-row justify-between text-center items-center w-full mb-20">
                    <img 
                        className="rounded-3xl w-full max-w-[300px] h-auto mb-5 md:mb-0 md:w-1/2" 
                        alt="Technical Domain" 
                        src={technicalSvg} 
                    />
                    <div className="text-text font-text px-5 mx-5 md:w-1/2">
                        <span className="text-2xl sm:text-3xl text-accent1 border-b-2 border-accent1">Technical</span>
                        <p className="mx-10 px-10 mt-2 text-sm sm:text-base">
                            A vibrant community of tech enthusiasts collaborating and transforming the future. The tech domain works together to perfect frontend user experiences, build robust systems in backend, and innovate ideas through app dev, elevating their skills throughout the journey.
                        </p>
                    </div>
                </div>

                {/* Creatives Domain */}
                <div className="flex flex-col-reverse md:flex-row justify-between text-center items-center w-full mb-20">
                    <div className="text-text font-text px-5 mx-5 md:w-1/2">
                        <span className="text-2xl sm:text-3xl text-accent1 border-b-2 border-accent1">Creatives</span>
                        <p className="mx-10 px-10 mt-2 text-sm sm:text-base">
                            In the Creatives domain, ideas evolve into unforgettable experiences. The talented content writers and designers have mastered the creation of compelling narratives and seamless design interfaces. Experience the forefront of creativity as they shape the art of engagement.
                        </p>
                    </div>
                    <img 
                        className="rounded-3xl w-full max-w-[250px] h-auto mb-5 md:mb-0 md:w-1/2" 
                        alt="Creatives Domain" 
                        src={creativesSvg} 
                    />
                </div>

                {/* Events Domain */}
                <div className="flex flex-col md:flex-row justify-between text-center items-center w-full mb-20">
                    <img 
                        className="rounded-3xl w-full max-w-[300px] h-auto mb-5 md:mb-0 md:w-1/2" 
                        alt="Events Domain" 
                        src={eventsSvg} 
                    />
                    <div className="text-text font-text px-5 mx-5 md:w-1/2">
                        <span className="text-2xl sm:text-3xl text-accent1 border-b-2 border-accent1">Events</span>
                        <p className="mx-10 px-10 mt-2 text-sm sm:text-base">
                            The heartbeat of the club, from brainstorming brilliant ideas to executing them with precision, ensures that each event is not just memorable but leaves a lasting impact on everyone involved. Our events domain thrives because of the hard work and creativity of the team.
                        </p>
                    </div>
                </div>

                {/* Business Domain */}
                <div className="flex flex-col-reverse md:flex-row justify-between text-center items-center w-full mb-10">
                    <div className="text-text font-text px-5 mx-5 md:w-1/2">
                        <span className="text-2xl sm:text-3xl text-accent1 border-b-2 border-accent1">Business</span>
                        <p className="mx-10 px-5 mt-2 text-sm sm:text-base">
                            The business domain is at the forefront, fostering innovation and entrepreneurial spirit among students. It provides real-world relations and networking opportunities with industry professionals, bringing in amazing sponsors through skilled PR activities and bringing imagination to life.
                        </p>
                    </div>
                    <img 
                        className="rounded-3xl w-full max-w-[300px] h-auto mb-5 md:mb-0 md:w-1/2" 
                        alt="Business Domain" 
                        src={businessSvg} 
                    />
                </div>

            </div>
        </div>
    );
}

export default Domain;
