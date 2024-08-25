import { notFound } from "next/navigation";
import ProjectClient from "./ProjectClient";
import { getProjectData } from "@/app/lib/projects";

export async function generateMetadata({ params }) {
    const project = await getProjectData(params.slug);

    if (!project) {
        return {
            title: "Projet non trouvé - Julie Van Houdenhove | Développeuse Web",
            description: "Le projet que vous recherchez n'a pas été trouvé.",
        };
    }

    return {
        title: `${project.title} - Julie Van Houdenhove | Développeuse Web`,
        description: `Découvrez en détail le projet ${project.title} réalisé par Julie Van Houdenhove, développeuse web. Apprenez-en plus sur les technologies utilisées, les défis relevés et les résultats obtenus.`,
        keywords: `projet ${project.title}, développement web, full stack, front-end, back-end, compétences, Julie Van Houdenhove, technologies, réalisations`,
        openGraph: {
            title: `${project.title} - Julie Van Houdenhove | Développeuse Web`,
            keywords: `projet ${project.title}, développement web, full stack, front-end, back-end, compétences, Julie Van Houdenhove, technologies, réalisations`,
            url: `https://julie-vh.fr/projets/${params.slug}`,
            type: "website",
            images: [{ url: `images/${project.image1}` }],
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} - Julie Van Houdenhove | Développeuse Web`,
            keywords: `projet ${project.title}, développement web, full stack, front-end, back-end, compétences, Julie Van Houdenhove, technologies, réalisations`,
            image: `images/${project.image1}`,
        },
    };
}

export default async function ProjectPage({ params }) {
    const project = await getProjectData(params.slug);

    if (!project) {
        notFound();
    }

    const skillsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}data/skills.json`);
    const allSkills = await skillsResponse.json();
    const projectSkills = allSkills.filter(skill => project.skills.includes(skill.id));

    const projectsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}data/projects.json`);
    const projects = await projectsResponse.json();
    const filteredProjects = projects.filter(proj => proj.slug !== params.slug);
    const randomOtherProjects = filteredProjects.sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
        <ProjectClient
            project={project}
            skills={projectSkills}
            randomOtherProjects={randomOtherProjects}
        />
    );
}
