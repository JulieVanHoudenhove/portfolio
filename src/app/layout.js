import "./globals.scss";
import Cursor from "@/app/components/Cursor";

export const metadata = {
    title: "Accueil - Julie Van Houdenhove | Développeuse Web",
    description: "Bienvenue sur le portfolio de Julie Van Houdenhove, développeuse web. Découvrez mes compétences, projets et réalisations en développement web et mobile.",
    keywords: "accueil, portfolio, développeuse web, full stack, front-end, back-end, Julie Van Houdenhove, projets web, développement mobile",
    openGraph: {
        title: "Accueil - Julie Van Houdenhove | Développeuse Web",
        description: "Bienvenue sur le portfolio de Julie Van Houdenhove, développeuse web. Découvrez mes compétences, projets et réalisations en développement web et mobile.",
        url: `${process.env.NEXT_PUBLIC_API_URL}`,
        type: "website",
        images: [{ url: "/images/favicon_star.svg" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Accueil - Julie Van Houdenhove | Développeuse Web",
        description: "Bienvenue sur le portfolio de Julie Van Houdenhove, développeuse web. Découvrez mes compétences, projets et réalisations en développement web et mobile.",
        image: "/images/favicon_star.svg",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Cursor />
                {children}
            </body>
        </html>
    );
}
