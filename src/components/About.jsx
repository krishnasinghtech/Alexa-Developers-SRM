import about from "../assets/about.jpg";

function About() {
    return (
        <div className="bg-background py-20 px-10">
            <div className="flex justify-center">
                <span className="text-accent1 text-center text-3xl font-medium border-b-2 border-accent1 pb-2">
                    About Us
                </span>
            </div>
            <div className="flex justify-center items-center mt-6">
                <img 
                    src={about} 
                    alt="Alexa Developers" 
                    className="w-auto h-[450px] rounded-3xl" 
                />
                <div className="m-10 p-10 text-lg text-text">
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
