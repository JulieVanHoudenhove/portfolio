import PlanDuSiteClient from './PlanDuSiteClient';

export async function generateMetadata() {
    return {
        title: "Plan du site - Julie Van Houdenhove | Développeuse Web Full Stack",
        description: "Explorez le plan du site de Julie Van Houdenhove, développeuse web. Accédez rapidement à toutes les sections et pages importantes du site.",
        keywords: "plan du site, navigation, Julie Van Houdenhove, développeuse web, sitemap",
        author: "Julie Van Houdenhove",
        openGraph: {
            title: "Plan du site - Julie Van Houdenhove | Développeuse Web Full Stack",
            description: "Explorez le plan du site de Julie Van Houdenhove, développeuse web. Accédez rapidement à toutes les sections et pages importantes du site.",
            url: 'https://www.julie-vh.fr/plan-du-site',
            type: "website",
            images: [{ url: "/images/home_metadata_og.png" }],
        },
        twitter: {
            card: "summary_large_image",
            title: "Plan du site - Julie Van Houdenhove | Développeuse Web Full Stack",
            description: "Explorez le plan du site de Julie Van Houdenhove, développeuse web. Accédez rapidement à toutes les sections et pages importantes du site.",
            image: "/images/home_metadata_tw.png",
        },
    };
}

async function getProjectPages() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}data/projects.json`);
        if (!res.ok) {
            throw new Error('Failed to fetch projects');
        }
        const projects = await res.json();
        return projects.map((project) => ({
            loc: `/projets/${project.slug}`,
            name: project.title,
        }));
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default async function Page() {
    const firstStaticPages = [
        { loc: '/', name: 'Accueil' },
        { loc: '/#a_propos', name: 'À propos' },
        { loc: '/#projets', name: 'Projets' },
    ];
    const secondStaticPages = [
        { loc: '/#competences', name: 'Compétences' },
        { loc: '/#contact', name: 'Contact' },
    ];

    const dynamicPages = await getProjectPages();

    return (
        <PlanDuSiteClient
            firstStaticPages={firstStaticPages}
            secondStaticPages={secondStaticPages}
            dynamicPages={dynamicPages}
        />
    );
}
