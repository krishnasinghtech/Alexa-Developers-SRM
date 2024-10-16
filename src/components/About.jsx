import about from "../assets/about.jpg";

function About() {
    return (
        <div className="bg-background py-10 px-[50px] sm:py-20 sm:px-10">
            {/* Section Title */}
            <div className="flex justify-center">
                <span className="text-accent1 text-center text-section-title font-medium border-b-2 border-accent1 pb-2">
                    About Us
                </span>
            </div>

            {/* Content Area */}
            <div className="flex flex-col md:flex-row justify-center items-center mt-6">
                {/* Image Section */}
                <img 
                    src={about} 
                    alt="Alexa Developers" 
                    className="w-full h-auto max-w-[450px] rounded-3xl" 
                />
                
                {/* Text Section */}
                <div className="m-5 p-5 sm:m-10 sm:p-[3.5rem] text-normal-text">
                    <p>
                        Welcome to Alexa Developers SRM, a thriving, student-run technical organization at SRMIST that brings technology and community together. 
                        We create an open atmosphere for tech enthusiasts to explore, learn, and grow, with a focus on voice-controlled technologies, application 
                        development, and UI/UX design via hands-on events and workshops.
                    </p>
                    <div className="mt-5">
                        <p>
                            Together we build a community, where creativity knows no bounds and collaboration is key.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
