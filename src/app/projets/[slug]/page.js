import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import SkillCard from "@/app/components/SkillCard";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import ProjectCard from "@/app/components/ProjectCard";

export const metadata = {
    title: "oui - Julie VAN HOUDENHOVE",
    description: "oui oui",
};

export default async function ProjectPage({ params }) {
    async function getProject(slug) {
        const response = await fetch('http://julie-vh.fr/data/projects.json');
        const projects = await response.json();
        return projects.find(project => project.slug === slug);
    }

    async function getOtherProjects(currentSlug) {
        const response = await fetch('http://julie-vh.fr/data/projects.json');
        const projects = await response.json();
        const filteredProjects = projects.filter(project => project.slug !== currentSlug);
        return filteredProjects.sort(() => 0.5 - Math.random()).slice(0, 3);
    }

    const project = await getProject(params.slug);

    if (!project) {
        notFound();
    }

    const skills = project.skills && Array.isArray(project.skills) ? project.skills : [];
    const allSkills = await fetch('http://julie-vh.fr/data/skills.json').then(res => res.json());
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
