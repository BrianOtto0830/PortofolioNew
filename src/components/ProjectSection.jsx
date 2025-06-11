import { ExternalLink } from "lucide-react"
import { Github } from "lucide-react"

const projects = [
    {
        id:1,
        title:"Frontend TrendEra e-commerce",
        description:"A minimalistic e-commerce website built with React and Tailwind CSS.",
        image:"/projects/projectfrontend1.png",
        tags: ["React", "Tailwind CSS", "TypeScript", "Supabase"],
        link:"https://vercel.com/brianotto0830s-projects/trend-era-e-commerce",
        githuburl: "https://github.com/BrianOtto0830/TrendEra-eCommerce",
    },
    {
        id:2,
        title:"Backend TrendEra e-commerce",
        description: "Backend TrendEra e-commerce",
        image: "/projects/projectbackend2.png",
        tags: ["Node.js", "Next.js", "PostgreSQL", "Supabase"],
        link:"https://ka-bootcamp-back-end.vercel.app/",
        githuburl: "https://github.com/BrianOtto0830/KA-Bootcamp-BackEnd",
    },
]

export const ProjectSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    My <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. each project showcases a different aspect of my skills and expertise.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key}
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=>(
                                        <span key={tag} className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold mb-2">
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>

                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.link}>
                                        <ExternalLink className="w-6 h-6 text-primary hover:text-primary-foreground transition-colors duration-300"/>
                                    </a>
                                    <a href={project.githuburl}>
                                        <Github className="w-6 h-6 text-primary hover:text-primary-foreground transition-colors duration-300"/>
                                    </a>
                                </div>
                            </div>
                            
                        </div>                       
                    ))}
                </div>
            </div>
        </section>
    )
}