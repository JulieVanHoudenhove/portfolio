import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

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