import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in delay-1">Brian Otto</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in delay-2 py-5">
                    I'm a web developer with a passion for creating beautiful and functional websites.
                </p>
            </div>
            
            <div className="opacity-0 animate-fade-in delay-3">
                <a href="#projects" className="cosmic-button">
                    View My Work
                </a>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                <ArrowDown className="h-6 w-6 text-primary" />
            </div>
        </section>
    )
}