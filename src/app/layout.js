import "./globals.scss";
import Cursor from "@/app/components/Cursor";

export const metadata = {
    title: "Accueil - Julie Van Houdenhove | Développeuse Web",
    description: "Bienvenue sur le portfolio de Julie Van Houdenhove, développeuse web. Découvrez mes compétences, projets et réalisations en développement web et mobile.",
    keywords: "accueil, portfolio, développeuse web, full stack, front-end, back-end, Julie Van Houdenhove, projets web, développement mobile",
    openGraph: {
        title: "Accueil - Julie Van Houdenhove | Développeuse Web",
        description: "Bienvenue sur le portfolio de Julie Van Houdenhove, développeuse web. Découvrez mes compétences, projets et réalisations en développement web et mobile.",
        url: 'https://www.julie-vh.fr/',
        type: "website",
        images: [{ url: "/images/home_metadata_og.png" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Accueil - Julie Van Houdenhove | Développeuse Web",
        description: "Bienvenue sur le portfolio de Julie Van Houdenhove, développeuse web. Découvrez mes compétences, projets et réalisations en développement web et mobile.",
        image: "/images/home_metadata_tw.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/images/favicon_star.svg" type="image/x-icon" sizes="16x16"/>
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="315" />
            </head>
            <body>
                <Cursor />
                {children}
            </body>
        </html>
    );
}
