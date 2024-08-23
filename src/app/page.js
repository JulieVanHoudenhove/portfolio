"use client";

import { useEffect, useState } from 'react';
import Header from "@/app/components/Header";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import ProjectCard from "@/app/components/ProjectCard";
import SkillCard from "@/app/components/SkillCard";
import Link from "next/link";

export default function Home() {
    const [skillsData, setSkillsData] = useState([]);
    const [skillsBisData, setSkillsBisData] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchSkills = async () => {
            const response = await fetch('/data/skills.json');
            const data = await response.json();
            setSkillsData(data);
        };

        const fetchSkillsBis = async () => {
            const response = await fetch('/data/skills_bis.json');
            const data = await response.json();
            setSkillsBisData(data);
        };

        const fetchProjects = async () => {
            const response = await fetch('/data/projects.json');
            const data = await response.json();
            setProjects(data);
        };

        fetchSkills();
        fetchSkillsBis();
        fetchProjects();
    }, []);

    const slides = [
        { text: "Web Developer", imgSrc: "/images/swiper_star.svg" },
        { text: "Mobile App Developer", imgSrc: "/images/swiper_star.svg" },
        { text: "Front-end developer", imgSrc: "/images/swiper_star.svg" },
        { text: "Creative Developer", imgSrc: "/images/swiper_star.svg" },
    ];

    const numOfSlides = 12;

    return (
        <main>
            <Header background={"blue-pattern"} />
            <section id="a_propos" className="lg:h-[95vh] flex justify-center items-center px-14 lg:px-0 pt-[152px] gap-8 bg-blue-pattern">
                <div className="flex flex-col-reverse lg:flex-row gap-8">
                    <div className="relative flex justify-center lg:block pt-12 lg:pt-0 pb-32 lg:pb-0 ml-0 lg:ml-40">
                        <Image className="rounded-3xl" src="/images/julie.webp" width={327} height={432} alt="Julie Van Houdenhove" />
                        <Image className="absolute bottom-[60px] -left-12 lg:bottom-8 lg:-left-1/2" src="/images/old_pc.png" width={306} height={206} alt="un vieux PC en 3D" />
                    </div>
                    <div className="flex flex-col gap-6 items-start text-white">
                        <h1 className="font-yipes text-xl lg:text-2xl">Julie<br />Van Houdenhove</h1>
                        <div className="flex flex-col gap-4">
                            <p className="text-sm lg:text-md font-medium">Développeuse web</p>
                            <p className="text-2xs lg:text-xs max-w-[739px]">Étudiante en développement web, je suis aussi développeuse frontend en alternance. J’aime relever des défis techniques et donner vie à des projets web à la fois élégants et fonctionnels.</p>
                        </div>
                        <Link target="_blank" href="/pdf/CV_Julie_VAN_HOUDENHOVE.pdf" className="font-bold text-2xs lg:text-xs underline hover:opacity-70 transition flex gap-2">Téléchargez mon CV sans hésiter !<Image src="/images/open_in_new_white.svg" width={24} height={24} alt="Icône d'ouverture dans un nouvel onglet" /></Link>
                        <div className="flex gap-4">
                            <Image src="/images/computer.svg" height={71} width={72} alt="Icône d'ordinateur" />
                            <Image src="/images/laptop.svg" height={71} width={72} alt="Icône d'ordinateur portable" />
                            <Image src="/images/phone.svg" height={71} width={72} alt="Icône de smartphone" />
                            <Image src="/images/tablet.svg" height={71} width={72} alt="Icône de tablette" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="a_propos">
                <div className="slider-home">
                    <div className="slide-track">
                        {Array.from({ length: numOfSlides }).map((_, index) => {
                            const slide = slides[index % slides.length];
                            return (
                                <div className="slide" key={index}>
                                    <img className="p-2" src={slide.imgSrc} alt="étoile" />
                                    <p className="font-yipes font-sm px-6 py-1 text-white">{slide.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section id="projets" className="flex flex-col items-center bg-cream">
                <h2 className="font-yipes text-xl lg:text-2xl py-36">Projets</h2>
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} id={index + 1} />
                    ))
                ) : (
                    <p>Loading projects...</p>
                )}
                <div className="h-40 w-full border-t border-dark"></div>
            </section>
            <section id="competences" className="flex flex-col items-center bg-blue-pattern">
                <h2 className="font-yipes text-xl lg:text-2xl text-white pt-36">Compétences</h2>
                <div className="flex flex-col items-center pt-16 pb-16 px-16 lg:px-32">
                    <main className="w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 flex-wrap py-16 gap-9">
                        <SkillCard skills={skillsData} />
                    </main>
                    <div className="border-t border-white w-full"></div>
                    <main className="w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 py-16 gap-9">
                        <SkillCard skills={skillsBisData} />
                    </main>
                </div>
            </section>
            <section id="contact">
                <Footer />
            </section>
        </main>
    );
}
