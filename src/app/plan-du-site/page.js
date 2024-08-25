import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


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
            images: [{ url: "/images/favicon_star.svg" }],
        },
        twitter: {
            card: "summary_large_image",
            title: "Plan du site - Julie Van Houdenhove | Développeuse Web Full Stack",
            description: "Explorez le plan du site de Julie Van Houdenhove, développeuse web. Accédez rapidement à toutes les sections et pages importantes du site.",
            image: "/images/favicon_star.svg",
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

export default async function SitemapPage() {
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
        <>
            <Header />
            <main className="bg-cream lg:pt-[152px]">
                <h1 className="flex justify-center font-yipes text-xl lg:text-2xl font-bold pb-16 pt-40 lg:py-40">Plan du site</h1>
                <ul className="px-32 pb-16 lg:pb-32 text-2xs lg:text-xs">
                    {firstStaticPages.map((page, index) => (
                        <li className="list-disc underline font-bold hover:opacity-70" key={index}>
                            <a href={page.loc}>{page.name}</a>
                        </li>
                    ))}
                    {dynamicPages.map((page, index) => (
                        <li className="list-disc  mx-5 underline font-bold hover:opacity-70" key={index}>
                            <a href={page.loc}>{page.name}</a>
                        </li>
                    ))}
                    {secondStaticPages.map((page, index) => (
                        <li className="list-disc underline font-bold hover:opacity-70" key={index}>
                            <a href={page.loc}>{page.name}</a>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </>
    );
}