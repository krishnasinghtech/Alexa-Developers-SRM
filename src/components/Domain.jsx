import technicalSvg from "../assets/technical.svg";
import creativesSvg from "../assets/creatives.svg";
import eventsSvg from "../assets/events.svg";
import businessSvg from "../assets/business.svg";

function Domain() {
    return (
        <div className="bg-background px-5 sm:px-10 lg:px-40 py-10">
            {/* Section Title */}
            <div className="flex justify-center mb-10">
                <span className="text-accent1 text-center text-section-title font-medium border-b-2 border-accent1 pb-2">
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
                        <span className="text-section-title text-accent1 border-b-2 border-accent1">Technical</span>
                        <p className="mx-10 px-10 mt-2 text-normal-text">
                            A vibrant community of tech enthusiasts collaborating and transforming the future. The tech domain works together to perfect frontend user experiences, build robust systems in backend, and innovate ideas through app dev, elevating their skills throughout the journey.
                        </p>
                    </div>
                </div>

                {/* Creatives Domain */}
                <div className="flex flex-col-reverse md:flex-row justify-between text-center items-center w-full mb-20">
                    <div className="text-text font-text px-5 mx-5 md:w-1/2">
                        <span className="text-section-title text-accent1 border-b-2 border-accent1">Creatives</span>
                        <p className="mx-10 px-10 mt-2 text-normal-text">
                            In the Creatives domain, ideas evolve into unforgettable experiences. The talented content writers and designers have mastered the creation of engaging visuals and impactful narratives to breathe life into tech and capture the community's imagination.
                        </p>
                    </div>
                    <img 
                        className="rounded-3xl w-full max-w-[300px] h-auto md:w-1/2" 
                        alt="Creative Domain" 
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
                        <span className="text-section-title text-accent1 border-b-2 border-accent1">Events</span>
                        <p className="mx-10 px-10 mt-2 text-normal-text">
                            The Events domain brings knowledge and experience together through workshops, tech talks, and hackathons. This dedicated team crafts opportunities for all to learn and grow, sparking innovation and collaboration within the community.
                        </p>
                    </div>
                </div>

                {/* Business Domain */}
                <div className="flex flex-col-reverse md:flex-row justify-between text-center items-center w-full mb-20">
                    <div className="text-text font-text px-5 mx-5 md:w-1/2">
                        <span className="text-section-title text-accent1 border-b-2 border-accent1">Business</span>
                        <p className="mx-10 px-10 mt-2 text-normal-text">
                            The Business domain plays a crucial role in bridging the gap between technology and real-world applications. This team strategically plans and executes outreach initiatives, developing partnerships that support our vision and the tech community.
                        </p>
                    </div>
                    <img 
                        className="rounded-3xl w-full max-w-[300px] h-auto md:w-1/2" 
                        alt="Business Domain" 
                        src={businessSvg} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Domain;
