import about from "../assets/about.jpg";

function About() {
    return (
        <div className="bg-background py-10 sm:py-20 px-4 sm:px-10">
            <div className="flex justify-center">
                <span className="text-accent1 text-center text-2xl sm:text-3xl font-medium border-b-2 border-accent1 pb-2">
                    About Us
                </span>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center mt-6">
                <img 
                    src={about} 
                    alt="Alexa Developers" 
                    className="w-full h-auto max-w-[450px] rounded-3xl" 
                />
                <div className="m-5 p-5 sm:m-10 sm:p-10 text-lg text-text">
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