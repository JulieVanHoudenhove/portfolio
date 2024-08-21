"use client";

import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project, background, id }) => {
    return (
        <Link href={`/projets/${project.slug}`} key={id} className={`projectCard px-56 py-16 flex justify-between items-center border-t w-full h-[200px] ${background === 'blue-pattern' ? 'bg-blue-pattern text-white border-white' : 'bg-cream text-black border-dark'}`}>
            <div className="relative flex gap-64 items-center">
                <p className="font-medium text-lg">{id}</p>
                <div className="flex gap-16 items-center">
                    <p className="text-xl font-yipes">{project.title}</p>
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={150}
                        height={100}
                        className="projectCard__image rotate-12"
                    />
                </div>
            </div>
            <p className="text-xs">{project.description}</p>
        </Link>
    );
};

export default ProjectCard;
