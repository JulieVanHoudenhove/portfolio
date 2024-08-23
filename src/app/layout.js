import "./globals.scss";
import Cursor from "@/app/components/Cursor";

export const metadata = {
    title: "Portfolio - Julie VAN HOUDENHOVE",
    description: "oui oui",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>{metadata.title}</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/images/favicon_star.svg" type="image/x-icon" sizes="16x16"/>
            </head>
            <body>
                <Cursor />
                {children}
            </body>
        </html>
    );
}
