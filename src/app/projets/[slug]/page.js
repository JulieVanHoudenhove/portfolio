import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import SkillCard from "@/app/components/SkillCard";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import ProjectCard from "@/app/components/ProjectCard";

export default async function ProjectPage({ params }) {
    // Fonction pour obtenir un projet spécifique
    async function getProject(slug) {
        const response = await fetch('http://localhost:3000/data/projects.json');
        const projects = await response.json();
        return projects.find(project => project.slug === slug);
    }

    // Fonction pour obtenir les autres projets
    async function getOtherProjects(currentSlug) {
        const response = await fetch('http://localhost:3000/data/projects.json');
        const projects = await response.json();
        // Filtrer les projets pour exclure celui dont le slug est `currentSlug`
        const filteredProjects = projects.filter(project => project.slug !== currentSlug);
        // Mélanger les projets et retourner les 3 premiers
        return filteredProjects.sort(() => 0.5 - Math.random()).slice(0, 3);
    }

    const project = await getProject(params.slug);

    if (!project) {
        notFound();
    }

    const skills = project.skills && Array.isArray(project.skills) ? project.skills : [];
    const allSkills = await fetch('http://localhost:3000/data/skills.json').then(res => res.json());
    const filteredSkills = allSkills.filter(skill => skills.includes(skill.name));

    // Obtenir les autres projets
    const randomOtherProjects = await getOtherProjects(params.slug);

    return (
        <main>
            <Header />
            <section className="bg-cream pt-[152px]">
                <h1 className="flex justify-center font-yipes text-2xl font-bold py-40">{project.title}</h1>
                <div className="flex">
                    <Image src={project.image} alt={project.title} width={600} height={400} />
                    <div>
                        <p>Description</p>
                        <p>{project.description}</p>
                    </div>
                </div>
            </section>
            {filteredSkills.length > 0 && (
                <section className="skills-section">
                    <h2>Compétences Utilisées</h2>
                    <SkillCard skills={filteredSkills} />
                </section>
            )}
            {randomOtherProjects.length > 0 && (
                <section className="bg-blue-pattern text-white flex flex-col items-center">
                    <h2 className="font-yipes text-2xl py-32">Mais aussi</h2>
                    <div className="flex flex-wrap gap-4">
                        {randomOtherProjects.map(otherProject => (
                            <ProjectCard key={otherProject.id} project={otherProject} background={"blue-pattern"} />
                        ))}
                    </div>
                    <div className="h-40 w-full border-t border-white"></div>
                </section>
            )}
            <Footer />
        </main>
    );
}
