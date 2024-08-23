"use client";

import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import SkillCard from "@/app/components/SkillCard";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import ProjectCard from "@/app/components/ProjectCard";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectPage({ params }) {
    const [project, setProject] = useState(null);
    const [skills, setSkills] = useState([]);
    const [metadata, setMetadata] = useState(null);
    const [randomOtherProjects, setRandomOtherProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}data/projects.json`);
            const projects = await response.json();
            const projectData = projects.find(project => project.slug === params.slug);

            if (!projectData) {
                notFound();
            }

            setProject(projectData);

            setMetadata({
                title: `Projet ${projectData.title} - Julie Van Houdenhove | Développeuse Web`,
                description: `Découvrez en détail le projet ${projectData.title} réalisé par Julie Van Houdenhove, développeuse web. Apprenez-en plus sur les technologies utilisées, les défis relevés et les résultats obtenus.`,
                keywords: `projet ${projectData.title}, développement web, full stack, front-end, back-end, compétences, Julie Van Houdenhove, technologies, réalisations`,
                author: "Julie Van Houdenhove",
                image: "/images/favicon_star.svg",
                url: `https://julie-vh.fr/projets/${params.slug}`,
                type: "website",
            });

            const skillsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}data/skills.json`);
            const allSkills = await skillsResponse.json();
            const projectSkills = allSkills.filter(skill => projectData.skills.includes(skill.id));
            setSkills(projectSkills);

            const filteredProjects = projects.filter(proj => proj.slug !== params.slug);
            const randomProjects = filteredProjects.sort(() => 0.5 - Math.random()).slice(0, 3);
            setRandomOtherProjects(randomProjects);
        }

        fetchData();
    }, [params.slug]);

    if (!project || !metadata) {
        return null;
    }

    return (
        <>
            <head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
                <meta name="author" content={metadata.author} />
                <meta property="og:image" content={metadata.image} />
                <meta property="og:url" content={metadata.url} />
                <meta property="og:type" content={metadata.type} />
            </head>
            <main>
                <Header />
                <section className="bg-cream lg:pt-[152px]">
                    <h1 className="flex justify-center font-yipes text-xl lg:text-2xl font-bold py-40">{project.title}</h1>
                    <div className='flex gap-1 px-8 lg:px-32 text-2xs lg:text-xs'>
                        <Image src='/images/arrow_left.svg' alt='Icône de flèche vers la gauche' height={20} width={20} />
                        <Link className='font-bold hover:opacity-70 underline' href='/'>Accueil</Link>
                        <p>/</p>
                        <Link className='font-bold hover:opacity-70 underline' href='/#projets'>Projets</Link>
                        <p>/</p>
                        <p>{project.title}</p>
                    </div>
                </section>
                <section className="bg-cream flex flex-col gap-8 px-8 lg:px-32 pb-32 text-2xs lg:text-xs">
                    <div className="flex flex-col lg:flex-row gap-8 pt-8">
                        <div className="w-full lg:w-1/2 flex items-center justify-center">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="flex flex-col gap-8 w-full lg:w-1/2">
                            <div className="flex flex-col gap-8">
                                <h2 className="font-medium text-sm lg:text-md">Description</h2>
                                <p>{project.description1}</p>
                            </div>
                            {skills.length > 0 && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    <SkillCard skills={skills} size="md" />
                                </div>
                            )}
                        </div>
                    </div>
                    <img src={project.image2} alt={project.title} />
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex flex-col gap-8 w-full lg:w-1/2">
                            <h2 className="font-medium text-sm lg:text-md">Pour aller plus loin</h2>
                            <p className="msg-wrappery">{project.description2}</p>
                            {project.link1 &&
                                <Link className='font-bold underline hover:opacity-70 transition flex gap-2' target="_blank" href={`${project.link1}`}>{project.label1}<Image src="/images/open_in_new.svg" width={24} height={24} alt="Icône d'ouverture dans un nouvel onglet" /></Link>
                            }
                            {project.link2 &&
                                <Link className='font-bold underline hover:opacity-70 transition flex gap-2' target="_blank" href={`${project.link2}`}>{project.label2}<Image src="/images/open_in_new.svg" width={24} height={24} alt="Icône d'ouverture dans un nouvel onglet" /></Link>
                            }
                            {project.link3 &&
                                <Link className='font-bold underline hover:opacity-70 transition flex gap-2' target="_blank" href={`${project.link3}`}>{project.label3}<Image src="/images/open_in_new.svg" width={24} height={24} alt="Icône d'ouverture dans un nouvel onglet" /></Link>
                            }
                        </div>
                        <div className="w-full lg:w-1/2 flex items-center justify-center">
                            <img src={project.image3} alt={project.title} />
                        </div>
                    </div>
                </section>
                {randomOtherProjects.length > 0 && (
                    <section className="bg-blue-pattern text-white flex flex-col items-center">
                        <h2 className="font-yipes text-xl lg:text-2xl py-16 lg:py-32">Mais aussi</h2>
                        <div className="flex flex-wrap gap-4">
                            {randomOtherProjects.map((otherProject, index) => (
                                <ProjectCard key={index} project={otherProject} background={"blue-pattern"} id={index + 1}/>
                            ))}
                        </div>
                        <div className="h-16 lg:h-40 w-full border-t border-white"></div>
                    </section>
                )}
                <Footer />
            </main>
        </>
    );
}
