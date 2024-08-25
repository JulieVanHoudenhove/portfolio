"use client"

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

export default function NotFoundClient() {
    return (
        <>
            <Header />
            <div className="min-h-screen flex flex-col items-center justify-center bg-cream">
                <h1 className="flex justify-center font-yipes text-xl lg:text-2xl font-bold">404</h1>
                <p className="text-lg lg:text-xl mb-8">Oups ! Page non trouvée</p>
                <Link href="/" className="font-bold text-2xs lg:text-xs underline hover:opacity-70 transition">Retourner à l'accueil</Link>
            </div>
            <Footer />
        </>
    );
}
