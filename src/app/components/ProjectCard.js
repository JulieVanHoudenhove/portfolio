"use client";

import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project, background, id, className }) => {
    return (
        <Link href={`/projets/${project.slug}`} key={id} className={`projectCard px-16 lg:px-32 py-8 lg:py-16 flex justify-between items-center border-t w-full md:h-[150px] lg:h-[200px] ${background === 'blue-pattern' ? 'bg-blue-pattern text-white border-white' : 'bg-cream text-black border-dark'} ${className}`}>
            <div className="relative flex gap-64 items-center">
                <p className="hidden md:block font-medium text-md lg:text-lg">{id}</p>
                <div className="flex gap-16 items-center">
                    <h3 className="text-lg lg:text-xl font-yipes">{project.title}</h3>
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={150}
                        height={100}
                        className="projectCard__image rotate-12"
                    />
                </div>
            </div>
            <p className="hidden lg:block text-2xs lg:text-xs msg-wrapper text-left">{project.subtitle}</p>
        </Link>
    );
};

export default ProjectCard;
