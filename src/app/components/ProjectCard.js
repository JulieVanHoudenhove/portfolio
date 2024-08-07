"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

const ProjectCard = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/data/projects.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <div className="w-full border-b border-dark mb-40">
            {projects.length === 0 ? (
                <p>Loading projects...</p>
            ) : (
                projects.map(project => (
                    <Link href={`/projects/${project.slug}`} key={project.id} className="projectCard px-56 py-16 flex justify-between items-center border-t border-dark">
                        <div className="relative flex gap-64">
                            <p className="font-medium text-lg">{project.id}</p>
                            <p className="text-xl font-yipes">{project.title}</p>
                            <Image src={project.image} alt={project.title} width={150} height={150} className="projectCard__image absolute -top-1/2 -right-3/4 -rotate-45" />
                        </div>
                        <p className="text-xs">{project.description}</p>
                    </Link>
                ))
            )}
        </div>
    );
};

export default ProjectCard;
