import "./globals.scss";
import Cursor from "@/app/components/Cursor";

export const metadata = {
    title: "Accueil - Julie Van Houdenhove | Développeuse Web",
    description: "Bienvenue sur le portfolio de Julie Van Houdenhove, développeuse web. Découvrez mes compétences, projets et réalisations en développement web et mobile.",
    keywords: "accueil, portfolio, développeuse web, full stack, front-end, back-end, Julie Van Houdenhove, projets web, développement mobile",
    author: "Julie Van Houdenhove",
    image: "/images/favicon_star.svg",
    url: "https://julie-vh.fr/",
    type: "website",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/images/favicon_star.svg" type="image/x-icon" sizes="16x16"/>


                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
                <meta name="author" content={metadata.author} />

                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:image" content={metadata.image} />
                <meta property="og:url" content={metadata.url} />
                <meta property="og:type" content={metadata.type} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metadata.title} />
                <meta name="twitter:description" content={metadata.description} />
                <meta name="twitter:image" content={metadata.image} />
            </head>
            <body>
                <Cursor />
                {children}
            </body>
        </html>
    );
}
