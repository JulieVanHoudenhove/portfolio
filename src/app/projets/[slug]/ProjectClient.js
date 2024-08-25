"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/app/components/Header";
import SkillCard from "@/app/components/SkillCard";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import ProjectCard from "@/app/components/ProjectCard";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectClient({ project, skills, randomOtherProjects }) {
    useEffect(() => {
        if (project) {
            gsap.fromTo(
                ".project-title",
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".project-title",
                        start: "top 80%",
                        end: "top 60%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
            gsap.fromTo(".project-image",
                { x: -200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".project-image",
                        start: "top 70%",
                        end: "top 60%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
            gsap.fromTo(".project-text > *",
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: ".project-text",
                        start: "top 75%",
                        end: "top 50%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
            gsap.fromTo(".animated-image",
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".animated-image",
                        start: "top 50%",
                        end: "top 60%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
            gsap.fromTo(".plus-text > *",
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: ".plus-text",
                        start: "top 75%",
                        end: "top 60%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
            gsap.fromTo(".image-section img",
                { opacity: 0, x: 200 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".image-section",
                        start: "top 70%",
                        end: "top 60%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, [project]);

    useEffect(() => {
        if (skills.length > 0) {
            const skillCards = gsap.utils.toArray('.detail-skill-card');

            gsap.fromTo(skillCards,
                { opacity: 0, y: -50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".detail-skill-card",
                        start: "top 80%",
                        end: "top 40%",
                        toggleActions: "play none none reverse",
                    }
                }
            );
        }
    }, [skills]);

    useEffect(() => {
        gsap.fromTo(
            ".other-title",
            { opacity: 0, y: -20 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".other-title",
                    start: "top 80%",
                    end: "top 60%",
                    toggleActions: "play none none reverse",
                },
            }
        );
        if (randomOtherProjects.length > 0) {
            gsap.utils.toArray('.detail-project-card').forEach((card, index) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%",
                            toggleActions: "play none none reverse",
                        }
                    }
                );
            });
        }
    }, [randomOtherProjects]);

    return (
        <>
            <main>
                <Header />
                <section className="bg-cream lg:pt-[152px]">
                    <h1 className="project-title flex justify-center font-yipes text-xl lg:text-2xl font-bold py-40">
                        {project.title}
                    </h1>
                    <div className="project-title flex gap-1 px-8 lg:px-32 text-2xs lg:text-xs">
                        <Image
                            src="/images/arrow_left.svg"
                            alt="Icône de flèche vers la gauche"
                            height={20}
                            width={20}
                        />
                        <Link className="font-bold hover:opacity-70 underline" href="/">
                            Accueil
                        </Link>
                        <p>/</p>
                        <Link className="font-bold hover:opacity-70 underline" href="/#projets">
                            Projets
                        </Link>
                        <p>/</p>
                        <p>{project.title}</p>
                    </div>
                </section>
                <section className="bg-cream flex flex-col gap-8 px-8 lg:px-32 pb-32 text-2xs lg:text-xs">
                    <div className="flex flex-col lg:flex-row gap-8 pt-8">
                        <div className="w-full lg:w-1/2 flex items-center justify-center">
                            <img className="project-image" src={project.image} alt={project.title} />
                        </div>
                        <div className="flex flex-col gap-8 w-full lg:w-1/2">
                            <div className="flex flex-col gap-8 project-text">
                                <h2 className="font-medium text-sm lg:text-md">Description</h2>
                                <p>{project.description1}</p>
                            </div>
                            {skills.length > 0 && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {skills.map((skill, index) => (
                                        <SkillCard skill={skill} size="md" className="detail-skill-card hidden-on-load" />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <img
                        className="animated-image hidden-on-load"
                        src={project.image2}
                        alt={project.title}
                    />
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="flex flex-col gap-8 w-full lg:w-1/2 plus-text">
                            <h2 className="font-medium text-sm lg:text-md">Pour aller plus loin</h2>
                            <p className="msg-wrappery">{project.description2}</p>
                            {project.link1 && (
                                <Link
                                    className="font-bold underline hover:opacity-70 transition flex gap-2"
                                    target="_blank"
                                    href={`${project.link1}`}
                                >
                                    {project.label1}
                                    <Image
                                        src="/images/open_in_new.svg"
                                        width={24}
                                        height={24}
                                        alt="Icône d'ouverture dans un nouvel onglet"
                                    />
                                </Link>
                            )}
                            {project.link2 && (
                                <Link
                                    className="font-bold underline hover:opacity-70 transition flex gap-2"
                                    target="_blank"
                                    href={`${project.link2}`}
                                >
                                    {project.label2}
                                    <Image
                                        src="/images/open_in_new.svg"
                                        width={24}
                                        height={24}
                                        alt="Icône d'ouverture dans un nouvel onglet"
                                    />
                                </Link>
                            )}
                            {project.link3 && (
                                <Link
                                    className="font-bold underline hover:opacity-70 transition flex gap-2"
                                    target="_blank"
                                    href={`${project.link3}`}
                                >
                                    {project.label3}
                                    <Image
                                        src="/images/open_in_new.svg"
                                        width={24}
                                        height={24}
                                        alt="Icône d'ouverture dans un nouvel onglet"
                                    />
                                </Link>
                            )}
                        </div>
                        <div className="w-full lg:w-1/2 flex items-center justify-center image-section">
                            <img src={project.image3} alt={project.title} />
                        </div>
                    </div>
                </section>
                {randomOtherProjects.length > 0 && (
                    <section className="bg-blue-pattern text-white flex flex-col items-center">
                        <h2 className="font-yipes text-xl lg:text-2xl py-16 lg:py-32 other-title">
                            Mais aussi
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            {randomOtherProjects.map((otherProject, index) => (
                                <ProjectCard
                                    key={index}
                                    project={otherProject}
                                    background={"blue-pattern"}
                                    id={index + 1}
                                    className="detail-project-card hidden-on-load"
                                />
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
