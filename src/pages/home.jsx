import { ThemeToogle } from "../components/ThemeToogle"
import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden">
            {/* Theme Toogle */}
            <ThemeToogle />
            {/* Background Effect */}
            <StarBackground />

            {/* Navbar */}
            <NavBar />

            {/* MainContent */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
            </main>

            {/* Footer */}

        </div>
    )
}