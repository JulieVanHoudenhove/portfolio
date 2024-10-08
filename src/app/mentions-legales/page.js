import MentionsLegalesClient from "./MentionsLegalesClient";

export async function generateMetadata() {
    return {
        title: "Mentions Légales - Julie Van Houdenhove | Développeuse Web",
        description: "Consultez les mentions légales du site de Julie Van Houdenhove, développeuse web. Retrouvez les informations sur l'éditeur, l'hébergeur, et les droits de propriété intellectuelle.",
        keywords: "mentions légales, Julie Van Houdenhove, développement web, site internet, propriété intellectuelle",
        openGraph: {
            title: "Mentions Légales - Julie Van Houdenhove | Développeuse Web",
            description: "Consultez les mentions légales du site de Julie Van Houdenhove, développeuse web.",
            url: "https://julie-vh.fr/mentions-legales",
            images: [{ url: "/images/home_metadata_og.png" }],
            type: "website",
        },
        twitter: {
            card: "summary",
            title: "Mentions Légales - Julie Van Houdenhove | Développeuse Web",
            description: "Consultez les mentions légales du site de Julie Van Houdenhove, développeuse web.",
            image: "/images/home_metadata_tw.png",
        },
    };
}

export default function MentionsLegales() {
    return <MentionsLegalesClient />;
}
