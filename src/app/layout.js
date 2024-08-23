import "./globals.scss";
import Cursor from "@/app/components/Cursor";

export const metadata = {
    title: "Accueil - Julie Van Houdenhove | Développeuse Web Full Stack",
    description: "Bienvenue sur la page d'accueil du portfolio de Julie Van Houdenhove, développeuse web full stack.",
    keywords: "portfolio, développeuse web, full stack, Julie Van Houdenhove, projets web",
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
