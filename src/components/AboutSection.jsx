import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
                        <p className="text-muted-foreground">
                            With a strong foundation in web development and a passion 
                            for creating engaging and user-friendly interfaces, 
                            I am dedicated to delivering high-quality solutions 
                            that meet the needs of my clients.
                        </p>
                        <p className="text-muted-foreground">
                            I have experience working with a variety of web development 
                            technologies, including HTML, CSS, JavaScript, and 
                            frameworks such as React and Node.js.
                        </p>
                        
                        <p className="text-muted-foreground">
                            I am also a quick learner and enjoy staying up-to-date 
                            with the latest trends and best practices in web development.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a href="https://download1323.mediafire.com/agda1ob8npxgIiu6h9ZGKI64CpWtX_9Pdm0lrq-kVkJmgANMEu5K0Oruior6U_5hgulo7aLooEzIqoQSZq4vanHti6n0hTMm22A55ySQDS5lf_3tj12AXzy8wPlx-mDLsuHAKEmVvUhYgKf2Coezs5eFc3GggabFnZhI0AhTnD2wQzMV/xt8x9klaqtu5y33/CV+Brian+Otto+English.pdf" 
                            className="cosmic-button px-6 py-2.5 rounded-full bg-[#F7D2C4] text-[#333] font-medium transition-colors duration-300 hover:bg-[#F7D2C4]/80 focus:outline-none focus:ring-2 focus:ring-[#F7D2C4]/50">
                                Download CV
                            </a>
                        </div> 
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Developing and maintaining websites 
                                        with responsive design and modern features.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Designer</h4>
                                    <p className="text-muted-foreground">
                                        Creating user-friendly and visually appealing interfaces 
                                        that enhance user experience and satisfaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Manager</h4>
                                    <p className="text-muted-foreground">
                                        Managing and overseeing projects 
                                        to ensure timely and successful completion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                </div>

            </div>
        </section>
    )
}