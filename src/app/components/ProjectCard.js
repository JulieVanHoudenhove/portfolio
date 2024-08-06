"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";

const ProjectCard = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('/data/projects.json');
            const data = await response.json();
            setProjects(data);
        };
        fetchProjects();
    }, []);

    return (
        <div className="w-full border-b border-dark mb-40">
            {projects.map(project => (
                <Link href={project.link} key={project.id} className="projectCard px-56 py-16 flex justify-between items-center border-t border-dark">
                    <div className="relative flex gap-64">
                        <p className="font-medium text-lg">{project.id}</p>
                        <p className="text-xl font-yipes">{project.title}</p>
                        <img src={project.image} alt={project.title} className="projectCard__image absolute -top-1/2 -right-3/4 -rotate-45" />
                    </div>
                    <p className="text-xs">{project.description}</p>
                </Link>
            ))}
        </div>
    );
};

export default ProjectCard;
