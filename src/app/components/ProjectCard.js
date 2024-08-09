"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ project, background }) => {
    return (
        <Link href={`/projets/${project.slug}`} key={project.id} className={`projectCard px-56 py-16 flex justify-between items-center border-t w-full ${background === 'blue-pattern' ? 'bg-blue-pattern text-white border-white' : 'bg-cream text-black border-dark'}`}>
            <div className="relative flex gap-64">
                <p className="font-medium text-lg">{project.id}</p>
                <p className="text-xl font-yipes">{project.title}</p>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={150}
                    height={100}
                    className="projectCard__image absolute -top-1/2 -right-3/4 -rotate-45"
                />
            </div>
            <p className="text-xs">{project.description}</p>
        </Link>
    );
};

export default ProjectCard;
