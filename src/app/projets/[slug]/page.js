import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import SkillCard from "@/app/components/SkillCard";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import ProjectCard from "@/app/components/ProjectCard";
import Link from "next/link";

export const metadata = {
    title: "Projets - Julie VAN HOUDENHOVE",
    description: "",
};

export default async function ProjectPage({ params }) {
    async function getProject(slug) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}data/projects.json`);
        const projects = await response.json();
        return projects.find(project => project.slug === slug);
    }

    async function getOtherProjects(currentSlug) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}data/projects.json`);
        const projects = await response.json();
        const filteredProjects = projects.filter(project => project.slug !== currentSlug);
        return filteredProjects.sort(() => 0.5 - Math.random()).slice(0, 3);
    }

    const project = await getProject(params.slug);

    if (!project) {
        notFound();
    }

    const skills = project.skills && Array.isArray(project.skills) ? project.skills : [];
    const allSkills = await fetch('http://localhost:3000/data/skills.json').then(res => res.json());
    const filteredSkills = allSkills.filter(skill => skills.includes(skill.id));

    const randomOtherProjects = await getOtherProjects(params.slug);

    return (
        <main>
            <Header />
            <section className="bg-cream pt-[152px]">
                <h1 className="flex justify-center font-yipes text-2xl font-bold py-40">{project.title}</h1>
                <div className='flex gap-1 px-32'>
                    <Image src='/images/arrow_left.svg' alt='Icône de flèche vers la gauche' height={20} width={20} />
                    <Link className='font-bold hover:opacity-70' href='/'>Accueil</Link>
                    <p>/</p>
                    <Link className='font-bold hover:opacity-70' href='/#projets'>Projets</Link>
                    <p>/</p>
                    <p>{project.title}</p>
                </div>
            </section>
            <section className="bg-cream flex flex-col gap-5 px-56 pb-32">
                <div className="flex gap-5">
                    <img className="w-full h-auto object-cover" src={project.image} alt={project.title} />
                    <div className="flex flex-col w-1/2">
                        <div className="flex flex-col">
                            <p className="font-medium text-md">Description</p>
                            <p>{project.description1}</p>
                        </div>
                        {filteredSkills.length > 0 && (
                            <div className="flex gap-4 flex-wrap">
                                <SkillCard skills={filteredSkills} />
                            </div>
                        )}
                    </div>
                </div>
                <Image src={project.image2} alt={project.title} width={600} height={400} />
                <div className="flex">
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <p className="font-medium text-md">Pour aller plus loin</p>
                            <p className="msg-wrapper">{project.description2}</p>
                            {project.link1 ?
                                <Link className='font-bold underline hover:opacity-70 transition flex gap-2' target="_blank" href={`${project.link1}`}>{project.label1}<Image src="/images/open_in_new.svg" width={24} height={24} alt="Icône d'ouverture dans un nouvel onglet" /></Link>
                            : ''}
                            {project.link2 ?
                                <Link className='font-bold underline hover:opacity-70 transition flex gap-2' target="_blank" href={`${project.link2}`}>{project.label2}<Image src="/images/open_in_new.svg" width={24} height={24} alt="Icône d'ouverture dans un nouvel onglet" /></Link>
                            : ''}
                            {project.link3 ?
                                <Link className='font-bold underline hover:opacity-70 transition flex gap-2' target="_blank" href={`${project.link3}`}>{project.label3}<Image src="/images/open_in_new.svg" width={24} height={24} alt="Icône d'ouverture dans un nouvel onglet" /></Link>
                            : ''}
                        </div>
                    </div>
                    <Image src={project.image3} alt={project.title} width={600} height={400} />
                </div>
            </section>
            {randomOtherProjects.length > 0 && (
                <section className="bg-blue-pattern text-white flex flex-col items-center">
                    <h2 className="font-yipes text-2xl py-32">Mais aussi</h2>
                    <div className="flex flex-wrap gap-4">
                        {randomOtherProjects.map((otherProject, index) => (
                            <ProjectCard key={otherProject} project={otherProject} background={"blue-pattern"} id={index + 1}/>
                        ))}
                    </div>
                    <div className="h-40 w-full border-t border-white"></div>
                </section>
            )}
            <Footer />
        </main>
    );
}
