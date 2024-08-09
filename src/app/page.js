"use client";

import Header from "@/app/components/Header";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import ProjectCard from "@/app/components/ProjectCard";
import SkillCard from "@/app/components/SkillCard";
import {useEffect, useState} from "react";

export default function Home() {
    const [skillsData, setSkillsData] = useState([]);
    const [skillsBisData, setSkillsBisData] = useState([]);

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

        fetchSkills();
        fetchSkillsBis();
    }, []);
    return (
        <main>
            <Header background={"blue-pattern"} />
            <section id="a_propos" className="h-[95vh] flex justify-center items-center pt-[152px] gap-8 bg-blue-pattern">
                <div className="flex gap-8">
                    <div className="relative ml-40">
                        <Image className="rounded-3xl" src="/images/julie.webp" width={327} height={432} alt="Julie Van Houdenhove" />
                        <Image className="absolute bottom-8 -left-1/2" src="/images/old_pc.png" width={306} height={206} alt="un vieux PC en 3D" />
                    </div>
                    <div className="flex flex-col gap-6 items-start text-white">
                        <h1 className="font-yipes text-2xl">Julie<br />Van Houdenhove</h1>
                        <div className="flex flex-col gap-4">
                            <p className="text-md font-medium">Développeuse web</p>
                            <p className="text-xs max-w-[739px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent  ultricies odio et massa semper, ut placerat nisi posuere. Sed euismod  justo sit amet lorem hendrerit, non eleifend diam sodales.</p>
                        </div>
                        <a href="#" className="font-bold text-xs underline">Telecharger sans hesiter mon super CV de la mort qui tue</a>
                        <div className="flex gap-4">
                            <Image src="/images/computer.svg" height={71} width={72} alt="Icône d'ordinateur" />
                            <Image src="/images/laptop.svg" height={71} width={72} alt="Icône d'ordinateur portable" />
                            <Image src="/images/phone.svg" height={71} width={72} alt="Icône de smartphone" />
                            <Image src="/images/tablet.svg" height={71} width={72} alt="Icône de tablette" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="slider-home">
                    <div className="slide-track">
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Web Developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Mobile App Developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Front-end developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Creative Developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Web Developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Mobile App Developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Front-end developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Creative Developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Web Developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Mobile App Developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Front-end developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Creative Developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Web Developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Mobile App Developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Front-end developer</p>
                        </div>
                        <div className="slide">
                            <Image className="p-2" width={38} height={48} src="/images/swiper-star.png" alt="étoile" />
                            <p className="font-yipes font-sm px-6 py-1 text-white">Creative Developer</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projets" className="flex flex-col items-center bg-cream">
                <h2 className="font-yipes text-2xl py-32">Projets</h2>
                <ProjectCard />
            </section>
            <section id="competences" className="flex flex-col items-center bg-blue-pattern">
                <h2 className="font-yipes text-2xl text-white py-32">Compétences</h2>
                <SkillCard skills={skillsData} />
                <div className="border-t border-white w-[70%]"></div>
                <SkillCard skills={skillsBisData} />
            </section>
            <Footer />
        </main>
    );
}
