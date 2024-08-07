import { notFound } from 'next/navigation';
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

async function getProject(slug) {
    const response = await fetch('http://localhost:3000/data/projects.json');
    const projects = await response.json();
    return projects.find(project => project.slug === slug);
}

export async function generateStaticParams() {
    const response = await fetch('http://localhost:3000/data/projects.json');
    const projects = await response.json();
    return projects.map(project => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }) {
    const project = await getProject(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main>
            <Header />
            <section className="bg-cream pt-[152px]">
                <h1 className="flex justify-center font-yipes text-2xl font-bold py-40">{project.title}</h1>
                <div className="flex">
                    <Image src={project.image} alt={project.title} width={600} height={400} />
                    <div>
                        <p>Description</p>
                        <p>{project.description}</p>
                    </div>
                </div>
                {/*<img className="cover" src="photo.png"/>*/}
                {/*<div className="flex">*/}
                {/*    <Image src={project.image} alt={project.title} width={600} height={400} />*/}
                {/*    <div>*/}
                {/*        <p>Description</p>*/}
                {/*        <p>{project.description}</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
            <Footer />
        </main>
    );
}
