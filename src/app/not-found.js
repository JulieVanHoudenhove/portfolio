import NotFoundClient from "./NotFoundClient";

export async function generateMetadata() {
    return {
        title: "Page non trouvée - Julie Van Houdenhove | Développeuse Web",
        description: "La page que vous recherchez n'existe pas sur le site de Julie Van Houdenhove. Découvrez nos projets ou retournez à l'accueil pour continuer votre navigation.",
        keywords: "erreur 404, page non trouvée, Julie Van Houdenhove, développement web, site internet",
        openGraph: {
            title: "Page non trouvée - Julie Van Houdenhove | Développeuse Web",
            description: "La page que vous recherchez n'existe pas sur le site de Julie Van Houdenhove. Explorez nos projets ou revenez à l'accueil.",
            images: [{ url: "/images/favicon_stars.svg" }],
            type: "website",
        },
        twitter: {
            card: "summary",
            title: "Page non trouvée - Julie Van Houdenhove | Développeuse Web",
            description: "La page que vous recherchez n'existe pas sur le site de Julie Van Houdenhove. Découvrez nos projets ou retournez à l'accueil.",
            image: "/images/favicon_stars.svg",
        },
    };
}

export default function NotFound() {
    return <NotFoundClient />;
}
